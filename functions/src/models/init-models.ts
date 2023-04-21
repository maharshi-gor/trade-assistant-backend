import type { Sequelize } from "sequelize";
import { account as _account } from "./account";
import type { accountAttributes, accountCreationAttributes } from "./account";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { bank as _bank } from "./bank";
import type { bankAttributes, bankCreationAttributes } from "./bank";
import { bank_mapping as _bank_mapping } from "./bank_mapping";
import type { bank_mappingAttributes, bank_mappingCreationAttributes } from "./bank_mapping";
import { branch as _branch } from "./branch";
import type { branchAttributes, branchCreationAttributes } from "./branch";
import { branch_mapping as _branch_mapping } from "./branch_mapping";
import type { branch_mappingAttributes, branch_mappingCreationAttributes } from "./branch_mapping";
import { category as _category } from "./category";
import type { categoryAttributes, categoryCreationAttributes } from "./category";
import { category_mapping as _category_mapping } from "./category_mapping";
import type { category_mappingAttributes, category_mappingCreationAttributes } from "./category_mapping";
import { company as _company } from "./company";
import type { companyAttributes, companyCreationAttributes } from "./company";
import { company_mapping as _company_mapping } from "./company_mapping";
import type { company_mappingAttributes, company_mappingCreationAttributes } from "./company_mapping";
import { contact as _contact } from "./contact";
import type { contactAttributes, contactCreationAttributes } from "./contact";
import { contact_account_mapping as _contact_account_mapping } from "./contact_account_mapping";
import type { contact_account_mappingAttributes, contact_account_mappingCreationAttributes } from "./contact_account_mapping";
import { finance_company as _finance_company } from "./finance_company";
import type { finance_companyAttributes, finance_companyCreationAttributes } from "./finance_company";
import { finance_company_mapping as _finance_company_mapping } from "./finance_company_mapping";
import type { finance_company_mappingAttributes, finance_company_mappingCreationAttributes } from "./finance_company_mapping";
import { inventory as _inventory } from "./inventory";
import type { inventoryAttributes, inventoryCreationAttributes } from "./inventory";
import { invoice as _invoice } from "./invoice";
import type { invoiceAttributes, invoiceCreationAttributes } from "./invoice";
import { invoice_finance as _invoice_finance } from "./invoice_finance";
import type { invoice_financeAttributes, invoice_financeCreationAttributes } from "./invoice_finance";
import { invoice_item as _invoice_item } from "./invoice_item";
import type { invoice_itemAttributes, invoice_itemCreationAttributes } from "./invoice_item";
import { invoice_serial as _invoice_serial } from "./invoice_serial";
import type { invoice_serialAttributes, invoice_serialCreationAttributes } from "./invoice_serial";
import { issued_credit_debit_note as _issued_credit_debit_note } from "./issued_credit_debit_note";
import type { issued_credit_debit_noteAttributes, issued_credit_debit_noteCreationAttributes } from "./issued_credit_debit_note";
import { payment as _payment } from "./payment";
import type { paymentAttributes, paymentCreationAttributes } from "./payment";
import { product_inventory_mapping as _product_inventory_mapping } from "./product_inventory_mapping";
import type { product_inventory_mappingAttributes, product_inventory_mappingCreationAttributes } from "./product_inventory_mapping";
import { purchase as _purchase } from "./purchase";
import type { purchaseAttributes, purchaseCreationAttributes } from "./purchase";
import { purchase_item as _purchase_item } from "./purchase_item";
import type { purchase_itemAttributes, purchase_itemCreationAttributes } from "./purchase_item";
import { purchase_product_invoice_item_mapping as _purchase_product_invoice_item_mapping } from "./purchase_product_invoice_item_mapping";
import type { purchase_product_invoice_item_mappingAttributes, purchase_product_invoice_item_mappingCreationAttributes } from "./purchase_product_invoice_item_mapping";
import { purchase_serial as _purchase_serial } from "./purchase_serial";
import type { purchase_serialAttributes, purchase_serialCreationAttributes } from "./purchase_serial";
import { received_credit_debit_note as _received_credit_debit_note } from "./received_credit_debit_note";
import type { received_credit_debit_noteAttributes, received_credit_debit_noteCreationAttributes } from "./received_credit_debit_note";
import { sale_fscheme_invoice_finance_mapping as _sale_fscheme_invoice_finance_mapping } from "./sale_fscheme_invoice_finance_mapping";
import type { sale_fscheme_invoice_finance_mappingAttributes, sale_fscheme_invoice_finance_mappingCreationAttributes } from "./sale_fscheme_invoice_finance_mapping";
import { sale_product_invoice_item_mapping as _sale_product_invoice_item_mapping } from "./sale_product_invoice_item_mapping";
import type { sale_product_invoice_item_mappingAttributes, sale_product_invoice_item_mappingCreationAttributes } from "./sale_product_invoice_item_mapping";
import { salesman as _salesman } from "./salesman";
import type { salesmanAttributes, salesmanCreationAttributes } from "./salesman";
import { salesman_mapping as _salesman_mapping } from "./salesman_mapping";
import type { salesman_mappingAttributes, salesman_mappingCreationAttributes } from "./salesman_mapping";
import { sub_category as _sub_category } from "./sub_category";
import type { sub_categoryAttributes, sub_categoryCreationAttributes } from "./sub_category";
import { sub_category_mapping as _sub_category_mapping } from "./sub_category_mapping";
import type { sub_category_mappingAttributes, sub_category_mappingCreationAttributes } from "./sub_category_mapping";
import { tax_category as _tax_category } from "./tax_category";
import type { tax_categoryAttributes, tax_categoryCreationAttributes } from "./tax_category";
import { tax_category_mapping as _tax_category_mapping } from "./tax_category_mapping";
import type { tax_category_mappingAttributes, tax_category_mappingCreationAttributes } from "./tax_category_mapping";

export {
  _account as account,
  _address as address,
  _bank as bank,
  _bank_mapping as bank_mapping,
  _branch as branch,
  _branch_mapping as branch_mapping,
  _category as category,
  _category_mapping as category_mapping,
  _company as company,
  _company_mapping as company_mapping,
  _contact as contact,
  _contact_account_mapping as contact_account_mapping,
  _finance_company as finance_company,
  _finance_company_mapping as finance_company_mapping,
  _inventory as inventory,
  _invoice as invoice,
  _invoice_finance as invoice_finance,
  _invoice_item as invoice_item,
  _invoice_serial as invoice_serial,
  _issued_credit_debit_note as issued_credit_debit_note,
  _payment as payment,
  _product_inventory_mapping as product_inventory_mapping,
  _purchase as purchase,
  _purchase_item as purchase_item,
  _purchase_product_invoice_item_mapping as purchase_product_invoice_item_mapping,
  _purchase_serial as purchase_serial,
  _received_credit_debit_note as received_credit_debit_note,
  _sale_fscheme_invoice_finance_mapping as sale_fscheme_invoice_finance_mapping,
  _sale_product_invoice_item_mapping as sale_product_invoice_item_mapping,
  _salesman as salesman,
  _salesman_mapping as salesman_mapping,
  _sub_category as sub_category,
  _sub_category_mapping as sub_category_mapping,
  _tax_category as tax_category,
  _tax_category_mapping as tax_category_mapping,
};

export type {
  accountAttributes,
  accountCreationAttributes,
  addressAttributes,
  addressCreationAttributes,
  bankAttributes,
  bankCreationAttributes,
  bank_mappingAttributes,
  bank_mappingCreationAttributes,
  branchAttributes,
  branchCreationAttributes,
  branch_mappingAttributes,
  branch_mappingCreationAttributes,
  categoryAttributes,
  categoryCreationAttributes,
  category_mappingAttributes,
  category_mappingCreationAttributes,
  companyAttributes,
  companyCreationAttributes,
  company_mappingAttributes,
  company_mappingCreationAttributes,
  contactAttributes,
  contactCreationAttributes,
  contact_account_mappingAttributes,
  contact_account_mappingCreationAttributes,
  finance_companyAttributes,
  finance_companyCreationAttributes,
  finance_company_mappingAttributes,
  finance_company_mappingCreationAttributes,
  inventoryAttributes,
  inventoryCreationAttributes,
  invoiceAttributes,
  invoiceCreationAttributes,
  invoice_financeAttributes,
  invoice_financeCreationAttributes,
  invoice_itemAttributes,
  invoice_itemCreationAttributes,
  invoice_serialAttributes,
  invoice_serialCreationAttributes,
  issued_credit_debit_noteAttributes,
  issued_credit_debit_noteCreationAttributes,
  paymentAttributes,
  paymentCreationAttributes,
  product_inventory_mappingAttributes,
  product_inventory_mappingCreationAttributes,
  purchaseAttributes,
  purchaseCreationAttributes,
  purchase_itemAttributes,
  purchase_itemCreationAttributes,
  purchase_product_invoice_item_mappingAttributes,
  purchase_product_invoice_item_mappingCreationAttributes,
  purchase_serialAttributes,
  purchase_serialCreationAttributes,
  received_credit_debit_noteAttributes,
  received_credit_debit_noteCreationAttributes,
  sale_fscheme_invoice_finance_mappingAttributes,
  sale_fscheme_invoice_finance_mappingCreationAttributes,
  sale_product_invoice_item_mappingAttributes,
  sale_product_invoice_item_mappingCreationAttributes,
  salesmanAttributes,
  salesmanCreationAttributes,
  salesman_mappingAttributes,
  salesman_mappingCreationAttributes,
  sub_categoryAttributes,
  sub_categoryCreationAttributes,
  sub_category_mappingAttributes,
  sub_category_mappingCreationAttributes,
  tax_categoryAttributes,
  tax_categoryCreationAttributes,
  tax_category_mappingAttributes,
  tax_category_mappingCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const account = _account.initModel(sequelize);
  const address = _address.initModel(sequelize);
  const bank = _bank.initModel(sequelize);
  const bank_mapping = _bank_mapping.initModel(sequelize);
  const branch = _branch.initModel(sequelize);
  const branch_mapping = _branch_mapping.initModel(sequelize);
  const category = _category.initModel(sequelize);
  const category_mapping = _category_mapping.initModel(sequelize);
  const company = _company.initModel(sequelize);
  const company_mapping = _company_mapping.initModel(sequelize);
  const contact = _contact.initModel(sequelize);
  const contact_account_mapping = _contact_account_mapping.initModel(sequelize);
  const finance_company = _finance_company.initModel(sequelize);
  const finance_company_mapping = _finance_company_mapping.initModel(sequelize);
  const inventory = _inventory.initModel(sequelize);
  const invoice = _invoice.initModel(sequelize);
  const invoice_finance = _invoice_finance.initModel(sequelize);
  const invoice_item = _invoice_item.initModel(sequelize);
  const invoice_serial = _invoice_serial.initModel(sequelize);
  const issued_credit_debit_note = _issued_credit_debit_note.initModel(sequelize);
  const payment = _payment.initModel(sequelize);
  const product_inventory_mapping = _product_inventory_mapping.initModel(sequelize);
  const purchase = _purchase.initModel(sequelize);
  const purchase_item = _purchase_item.initModel(sequelize);
  const purchase_product_invoice_item_mapping = _purchase_product_invoice_item_mapping.initModel(sequelize);
  const purchase_serial = _purchase_serial.initModel(sequelize);
  const received_credit_debit_note = _received_credit_debit_note.initModel(sequelize);
  const sale_fscheme_invoice_finance_mapping = _sale_fscheme_invoice_finance_mapping.initModel(sequelize);
  const sale_product_invoice_item_mapping = _sale_product_invoice_item_mapping.initModel(sequelize);
  const salesman = _salesman.initModel(sequelize);
  const salesman_mapping = _salesman_mapping.initModel(sequelize);
  const sub_category = _sub_category.initModel(sequelize);
  const sub_category_mapping = _sub_category_mapping.initModel(sequelize);
  const tax_category = _tax_category.initModel(sequelize);
  const tax_category_mapping = _tax_category_mapping.initModel(sequelize);

  invoice.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(invoice, { as: "invoices", foreignKey: "account_id"});
  invoice.belongsTo(account, { as: "dispatch_account", foreignKey: "dispatch_account_id"});
  account.hasMany(invoice, { as: "dispatch_account_invoices", foreignKey: "dispatch_account_id"});
  invoice.belongsTo(account, { as: "invoice_finance_account", foreignKey: "invoice_finance_account_id"});
  account.hasMany(invoice, { as: "invoice_finance_account_invoices", foreignKey: "invoice_finance_account_id"});
  issued_credit_debit_note.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(issued_credit_debit_note, { as: "issued_credit_debit_notes", foreignKey: "account_id"});
  payment.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(payment, { as: "payments", foreignKey: "account_id"});
  purchase.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(purchase, { as: "purchases", foreignKey: "account_id"});
  received_credit_debit_note.belongsTo(account, { as: "account", foreignKey: "account_id"});
  account.hasMany(received_credit_debit_note, { as: "received_credit_debit_notes", foreignKey: "account_id"});
  account.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(account, { as: "accounts", foreignKey: "address_id"});
  payment.belongsTo(bank, { as: "bank", foreignKey: "bank_id"});
  bank.hasMany(payment, { as: "payments", foreignKey: "bank_id"});
  invoice.belongsTo(branch, { as: "branch", foreignKey: "branch_id"});
  branch.hasMany(invoice, { as: "invoices", foreignKey: "branch_id"});
  issued_credit_debit_note.belongsTo(branch, { as: "branch", foreignKey: "branch_id"});
  branch.hasMany(issued_credit_debit_note, { as: "issued_credit_debit_notes", foreignKey: "branch_id"});
  purchase.belongsTo(branch, { as: "branch", foreignKey: "branch_id"});
  branch.hasMany(purchase, { as: "purchases", foreignKey: "branch_id"});
  received_credit_debit_note.belongsTo(branch, { as: "branch", foreignKey: "branch_id"});
  branch.hasMany(received_credit_debit_note, { as: "received_credit_debit_notes", foreignKey: "branch_id"});
  inventory.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(inventory, { as: "inventories", foreignKey: "category_id"});
  inventory.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(inventory, { as: "inventories", foreignKey: "company_id"});
  issued_credit_debit_note.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(issued_credit_debit_note, { as: "issued_credit_debit_notes", foreignKey: "company_id"});
  received_credit_debit_note.belongsTo(company, { as: "company", foreignKey: "company_id"});
  company.hasMany(received_credit_debit_note, { as: "received_credit_debit_notes", foreignKey: "company_id"});
  account.belongsTo(contact, { as: "contact", foreignKey: "contact_id"});
  contact.hasMany(account, { as: "accounts", foreignKey: "contact_id"});
  invoice_finance.belongsTo(finance_company, { as: "finance_company", foreignKey: "finance_company_id"});
  finance_company.hasMany(invoice_finance, { as: "invoice_finances", foreignKey: "finance_company_id"});
  invoice_item.belongsTo(inventory, { as: "inventory", foreignKey: "inventory_id"});
  inventory.hasMany(invoice_item, { as: "invoice_items", foreignKey: "inventory_id"});
  purchase_item.belongsTo(inventory, { as: "inventory", foreignKey: "inventory_id"});
  inventory.hasMany(purchase_item, { as: "purchase_items", foreignKey: "inventory_id"});
  invoice_item.belongsTo(invoice, { as: "invoice", foreignKey: "invoice_id"});
  invoice.hasMany(invoice_item, { as: "invoice_items", foreignKey: "invoice_id"});
  issued_credit_debit_note.belongsTo(invoice, { as: "invoice", foreignKey: "invoice_id"});
  invoice.hasMany(issued_credit_debit_note, { as: "issued_credit_debit_notes", foreignKey: "invoice_id"});
  invoice.belongsTo(invoice_finance, { as: "invoice_finance", foreignKey: "invoice_finance_id"});
  invoice_finance.hasMany(invoice, { as: "invoices", foreignKey: "invoice_finance_id"});
  invoice_serial.belongsTo(invoice_item, { as: "invoice_item", foreignKey: "invoice_item_id"});
  invoice_item.hasMany(invoice_serial, { as: "invoice_serials", foreignKey: "invoice_item_id"});
  purchase_item.belongsTo(purchase, { as: "purchase", foreignKey: "purchase_id"});
  purchase.hasMany(purchase_item, { as: "purchase_items", foreignKey: "purchase_id"});
  received_credit_debit_note.belongsTo(purchase, { as: "purchase", foreignKey: "purchase_id"});
  purchase.hasMany(received_credit_debit_note, { as: "received_credit_debit_notes", foreignKey: "purchase_id"});
  purchase_serial.belongsTo(purchase_item, { as: "purchase_item", foreignKey: "purchase_item_id"});
  purchase_item.hasMany(purchase_serial, { as: "purchase_serials", foreignKey: "purchase_item_id"});
  invoice.belongsTo(salesman, { as: "salesman", foreignKey: "salesman_id"});
  salesman.hasMany(invoice, { as: "invoices", foreignKey: "salesman_id"});
  inventory.belongsTo(sub_category, { as: "sub_category", foreignKey: "sub_category_id"});
  sub_category.hasMany(inventory, { as: "inventories", foreignKey: "sub_category_id"});
  inventory.belongsTo(tax_category, { as: "tax_category", foreignKey: "tax_category_id"});
  tax_category.hasMany(inventory, { as: "inventories", foreignKey: "tax_category_id"});
  issued_credit_debit_note.belongsTo(tax_category, { as: "tax_category", foreignKey: "tax_category_id"});
  tax_category.hasMany(issued_credit_debit_note, { as: "issued_credit_debit_notes", foreignKey: "tax_category_id"});
  received_credit_debit_note.belongsTo(tax_category, { as: "tax_category", foreignKey: "tax_category_id"});
  tax_category.hasMany(received_credit_debit_note, { as: "received_credit_debit_notes", foreignKey: "tax_category_id"});

  return {
    account: account,
    address: address,
    bank: bank,
    bank_mapping: bank_mapping,
    branch: branch,
    branch_mapping: branch_mapping,
    category: category,
    category_mapping: category_mapping,
    company: company,
    company_mapping: company_mapping,
    contact: contact,
    contact_account_mapping: contact_account_mapping,
    finance_company: finance_company,
    finance_company_mapping: finance_company_mapping,
    inventory: inventory,
    invoice: invoice,
    invoice_finance: invoice_finance,
    invoice_item: invoice_item,
    invoice_serial: invoice_serial,
    issued_credit_debit_note: issued_credit_debit_note,
    payment: payment,
    product_inventory_mapping: product_inventory_mapping,
    purchase: purchase,
    purchase_item: purchase_item,
    purchase_product_invoice_item_mapping: purchase_product_invoice_item_mapping,
    purchase_serial: purchase_serial,
    received_credit_debit_note: received_credit_debit_note,
    sale_fscheme_invoice_finance_mapping: sale_fscheme_invoice_finance_mapping,
    sale_product_invoice_item_mapping: sale_product_invoice_item_mapping,
    salesman: salesman,
    salesman_mapping: salesman_mapping,
    sub_category: sub_category,
    sub_category_mapping: sub_category_mapping,
    tax_category: tax_category,
    tax_category_mapping: tax_category_mapping,
  };
}
