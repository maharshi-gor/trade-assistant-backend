import { account as Account } from "../../models/account";
import contactService from "./contact";
import addressService from "./address";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";
import db from "../../models/index";
import AccountDto from "../../dto/account/account-dto";
import { contact as Contact } from "../../models/contact";
import { address as Address } from "../../models/address";

const saveAccount = async (accountData: AccountDto): Promise<AccountDto> => {
  const account = populateObject(accountData, Account);

  const id = await db.sequelize.transaction(async (transaction: any) => {
    const contact = await contactService.saveContact(
      accountData.contact,
      transaction
    );
    const address = await addressService.saveAddress(
      accountData.address,
      transaction
    );
    account.contact_id = contact.id!;
    account.address_id = address.id!;

    if (!account.id || !isValidUUID(account.id)) {
      account.id = uuidv4();
      await Account.create(account.dataValues, { transaction });
    } else {
      await Account.update(account.dataValues, {
        where: {
          id: account.id
        },
        transaction
      });
    }

    return account.id;
  });

  return await fetchAccount(id);
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
      return populateObject(result, AccountDto);
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
