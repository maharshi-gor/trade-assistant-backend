import { contact as Contact } from "../../models/contact";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";
import ContactDto from "../../dto/account/contact-dto";

const saveContact = async (
  contactData: any,
  transaction?: any
): Promise<ContactDto> => {
  const contact = new Contact();

  populateObject(contactData, contact);

  let result: ContactDto = new ContactDto();

  if (!contact.id || !isValidUUID(contact.id)) {
    contact.id = uuidv4();

    populateObject(
      (await Contact.create(contact.dataValues, { transaction })).dataValues,
      result
    );
  } else {
    await Contact.update(contact.dataValues, {
      where: {
        id: contact.id
      },
      transaction
    });
    let value = await Contact.findByPk(contact.id);
    if (value instanceof Contact) {
      populateObject(value.dataValues, result);
    }
  }

  return result;
};

export default {
  saveContact
};
