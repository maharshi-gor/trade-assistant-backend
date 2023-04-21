import { contact as Contact } from "../../models/contact";
import { populateObject } from "../../helper/object-handler";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";
import ContactDto from "../../dto/account/contact-dto";

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

export default {
  saveContact
};
