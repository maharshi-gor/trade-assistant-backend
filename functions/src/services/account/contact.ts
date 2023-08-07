import { contact as Contact } from "../../models/contact";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";
import ContactDto from "../../dto/account/contact-dto";
import { Op } from "sequelize";
import { account } from "../../models/account";
// import { account as Account } from "../../models/account";

const saveContact = async (
  contactData: any,
  transaction: any
): Promise<ContactDto> => {
  const contact = populateObject(contactData, Contact);

  if (!contact.id || !isValidUUID(contact.id)) {
    contact.id = uuidv4();

    return populateObject(
      (await Contact.create(contact.dataValues, { transaction })).dataValues,
      ContactDto
    );
  }

  await Contact.update(contact.dataValues, {
    where: {
      id: contact.id
    },
    transaction
  });

  let value = await Contact.findByPk(contact.id);
  if (value instanceof Contact) {
    return populateObject(value.dataValues, ContactDto);
  }

  return new ContactDto();
};

const findContacts = async (name?: any): Promise<ContactDto[]> => {
  let contacts = await Contact.findAll({
    attributes: ["name", "id", "mobile"],
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    },
    limit: 8
  });

  const results = [] as ContactDto[];
  for (let i = 0; i < contacts.length; i++) {
    const result = populateObject(contacts[i].dataValues, ContactDto);
    const account = await contacts[i].getAccounts();
    result.account_id = account[0].id;
    result.gst_in = account[0].gstin;
    results.push(result);
  }
  return results;
};

export default {
  saveContact,
  findContacts
};
