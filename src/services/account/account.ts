import { account as Account } from "../../models/account";
import contactService from "./contact";
import addressService from "./address";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4 } from "uuid";
import db from "../../models/index";
import AccountDto from "../../dto/account/account-dto";

const saveAccount = async (accountDto: AccountDto): Promise<Account> => {
  const result = await db.sequelize.transaction(async (transaction: any) => {
    const contact = await contactService.saveContact(
      accountDto.contactData,
      transaction
    );
    console.log(contact);
    // const address = await addressService.saveAddress(accountDto.addressData, t);
  });
  return new Account();
};

export default {
  saveAccount
};
