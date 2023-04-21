import { account as Account } from "../../models/account";
import contactService from "./contact";
import addressService from "./address";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";
import db from "../../models/index";
import AccountDto from "../../dto/account/account-dto";
import AddressDto from "../../dto/account/address-dto";
import { contact as Contact } from "../../models/contact";
import { address as Address } from "../../models/address";
import ContactDto from "../../dto/account/contact-dto";

const saveAccount = async (accountData: AccountDto): Promise<AccountDto> => {
  const account = populateObject(accountData, Account);

  return await db.sequelize.transaction(async (transaction: any) => {
    const contact = await contactService.saveContact(
      accountData.contactData,
      transaction
    );
    const address = await addressService.saveAddress(
      accountData.addressData,
      transaction
    );
    account.contact_id = contact.id!;
    account.address_id = address.id!;

    if (!account.id || !isValidUUID(account.id)) {
      account.id = uuidv4();
      return populateObject(
        (await Account.create(account.dataValues, { transaction })).dataValues,
        AddressDto
      );
    }
    await Account.update(account.dataValues, {
      where: {
        id: account.id
      },
      transaction
    });

    let value = await Account.findByPk(account.id);
    if (value instanceof Account) {
      return populateObject(value.dataValues, AccountDto);
    }

    return new AccountDto();
  });
};

const fetchAccount = async (accountId: string): Promise<AccountDto> => {
  try {
    const account = await Account.findByPk(accountId, {
      include: [
        {
          model: Contact,
          as: "contact"
        },
        {
          model: Address,
          as: "address"
        }
      ]
    });
    const result = JSON.parse(JSON.stringify(account, null, 2));
    if (account instanceof Account) {
      const accountData = populateObject(result, AccountDto);
      accountData.contactData = populateObject(result.contact, ContactDto);
      accountData.addressData = populateObject(result.address, AddressDto);
      return accountData;
    }
    return new AccountDto();
  } catch (error) {
    console.error(error);
    return new AccountDto();
  }
};

export default {
  saveAccount,
  fetchAccount
};
