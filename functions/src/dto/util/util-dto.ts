export enum UtilType {
  BANK = "bank",
  BRANCH = "branch",
  CATEGORY = "category",
  SUB_CATEGORY = "sub-category",
  FINANCIAL_SERVICE = "finance-company",
  COMPANY = "company",
  SALES_PERSON = "salesman",
  TAX_DETAILS = "tax-category"
}

export class UtilDto {
  id?: string;
  type?: UtilType;
}
