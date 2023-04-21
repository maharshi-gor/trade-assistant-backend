import AddressDto from "../../dto/account/address-dto";
import { populateObject } from "../../helper/object-handler";
import { address as Address } from "../../models/address";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";

const saveAddress = async (
  addressData: AddressDto,
  transaction: any
): Promise<AddressDto> => {
  const address = populateObject(addressData, Address);

  if (!address.id || !isValidUUID(address.id)) {
    address.id = uuidv4();

    return populateObject(
      (await Address.create(address.dataValues, { transaction })).dataValues,
      AddressDto
    );
  }
  await Address.update(address.dataValues, {
    where: {
      id: address.id
    },
    transaction
  });

  let value = await Address.findByPk(address.id);
  if (value instanceof Address) {
    return populateObject(value.dataValues, AddressDto);
  }

  return new AddressDto();
};

export default {
  saveAddress
};
