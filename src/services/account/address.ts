import AddressDto from "../../dto/account/address-dto";
import { populateObject } from "../../helper/object-handler";
import { address as Address } from "../../models/address";
import { v4 as uuidv4, validate as isValidUUID } from "uuid";

const saveAddress = async (
  addressData: AddressDto,
  transaction: any
): Promise<Address> => {
  const address = new Address();

  populateObject(addressData, address);

  let result: Address;

  if (!address.id || !isValidUUID(address.id)) {
    address.id = uuidv4();
    result = await Address.create(address.dataValues, { transaction });
  } else {
    result = await Address.create(address.dataValues);
  }

  return result;
};

export default {
  saveAddress
};
