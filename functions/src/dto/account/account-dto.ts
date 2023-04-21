import AddressDto from "./address-dto";
import ContactDto from "./contact-dto";

export default class AccountDto {
  id?: string;
  type!: string;
  opening_balance?: number;
  gstin?: string;
  addressData!: AddressDto;
  contactData!: ContactDto;
}
