import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { address, addressId } from './address';
import type { contact, contactId } from './contact';
import type { invoice, invoiceId } from './invoice';
import type { issued_credit_debit_note, issued_credit_debit_noteId } from './issued_credit_debit_note';
import type { payment, paymentId } from './payment';
import type { purchase, purchaseId } from './purchase';
import type { received_credit_debit_note, received_credit_debit_noteId } from './received_credit_debit_note';

export interface accountAttributes {
  id: string;
  type: string;
  opening_balance?: number;
  gstin?: string;
  address_id: string;
  contact_id: string;
}

export type accountPk = "id";
export type accountId = account[accountPk];
export type accountOptionalAttributes = "opening_balance" | "gstin";
export type accountCreationAttributes = Optional<accountAttributes, accountOptionalAttributes>;

export class account extends Model<accountAttributes, accountCreationAttributes> implements accountAttributes {
  id!: string;
  type!: string;
  opening_balance?: number;
  gstin?: string;
  address_id!: string;
  contact_id!: string;

  // account hasMany invoice via account_id
  invoices!: invoice[];
  getInvoices!: Sequelize.HasManyGetAssociationsMixin<invoice>;
  setInvoices!: Sequelize.HasManySetAssociationsMixin<invoice, invoiceId>;
  addInvoice!: Sequelize.HasManyAddAssociationMixin<invoice, invoiceId>;
  addInvoices!: Sequelize.HasManyAddAssociationsMixin<invoice, invoiceId>;
  createInvoice!: Sequelize.HasManyCreateAssociationMixin<invoice>;
  removeInvoice!: Sequelize.HasManyRemoveAssociationMixin<invoice, invoiceId>;
  removeInvoices!: Sequelize.HasManyRemoveAssociationsMixin<invoice, invoiceId>;
  hasInvoice!: Sequelize.HasManyHasAssociationMixin<invoice, invoiceId>;
  hasInvoices!: Sequelize.HasManyHasAssociationsMixin<invoice, invoiceId>;
  countInvoices!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany invoice via dispatch_account_id
  dispatch_account_invoices!: invoice[];
  getDispatch_account_invoices!: Sequelize.HasManyGetAssociationsMixin<invoice>;
  setDispatch_account_invoices!: Sequelize.HasManySetAssociationsMixin<invoice, invoiceId>;
  addDispatch_account_invoice!: Sequelize.HasManyAddAssociationMixin<invoice, invoiceId>;
  addDispatch_account_invoices!: Sequelize.HasManyAddAssociationsMixin<invoice, invoiceId>;
  createDispatch_account_invoice!: Sequelize.HasManyCreateAssociationMixin<invoice>;
  removeDispatch_account_invoice!: Sequelize.HasManyRemoveAssociationMixin<invoice, invoiceId>;
  removeDispatch_account_invoices!: Sequelize.HasManyRemoveAssociationsMixin<invoice, invoiceId>;
  hasDispatch_account_invoice!: Sequelize.HasManyHasAssociationMixin<invoice, invoiceId>;
  hasDispatch_account_invoices!: Sequelize.HasManyHasAssociationsMixin<invoice, invoiceId>;
  countDispatch_account_invoices!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany invoice via invoice_finance_account_id
  invoice_finance_account_invoices!: invoice[];
  getInvoice_finance_account_invoices!: Sequelize.HasManyGetAssociationsMixin<invoice>;
  setInvoice_finance_account_invoices!: Sequelize.HasManySetAssociationsMixin<invoice, invoiceId>;
  addInvoice_finance_account_invoice!: Sequelize.HasManyAddAssociationMixin<invoice, invoiceId>;
  addInvoice_finance_account_invoices!: Sequelize.HasManyAddAssociationsMixin<invoice, invoiceId>;
  createInvoice_finance_account_invoice!: Sequelize.HasManyCreateAssociationMixin<invoice>;
  removeInvoice_finance_account_invoice!: Sequelize.HasManyRemoveAssociationMixin<invoice, invoiceId>;
  removeInvoice_finance_account_invoices!: Sequelize.HasManyRemoveAssociationsMixin<invoice, invoiceId>;
  hasInvoice_finance_account_invoice!: Sequelize.HasManyHasAssociationMixin<invoice, invoiceId>;
  hasInvoice_finance_account_invoices!: Sequelize.HasManyHasAssociationsMixin<invoice, invoiceId>;
  countInvoice_finance_account_invoices!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany issued_credit_debit_note via account_id
  issued_credit_debit_notes!: issued_credit_debit_note[];
  getIssued_credit_debit_notes!: Sequelize.HasManyGetAssociationsMixin<issued_credit_debit_note>;
  setIssued_credit_debit_notes!: Sequelize.HasManySetAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  addIssued_credit_debit_note!: Sequelize.HasManyAddAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  addIssued_credit_debit_notes!: Sequelize.HasManyAddAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  createIssued_credit_debit_note!: Sequelize.HasManyCreateAssociationMixin<issued_credit_debit_note>;
  removeIssued_credit_debit_note!: Sequelize.HasManyRemoveAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  removeIssued_credit_debit_notes!: Sequelize.HasManyRemoveAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  hasIssued_credit_debit_note!: Sequelize.HasManyHasAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  hasIssued_credit_debit_notes!: Sequelize.HasManyHasAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  countIssued_credit_debit_notes!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany payment via account_id
  payments!: payment[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payment>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payment, paymentId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payment, paymentId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payment, paymentId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payment>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payment, paymentId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payment, paymentId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payment, paymentId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payment, paymentId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany purchase via account_id
  purchases!: purchase[];
  getPurchases!: Sequelize.HasManyGetAssociationsMixin<purchase>;
  setPurchases!: Sequelize.HasManySetAssociationsMixin<purchase, purchaseId>;
  addPurchase!: Sequelize.HasManyAddAssociationMixin<purchase, purchaseId>;
  addPurchases!: Sequelize.HasManyAddAssociationsMixin<purchase, purchaseId>;
  createPurchase!: Sequelize.HasManyCreateAssociationMixin<purchase>;
  removePurchase!: Sequelize.HasManyRemoveAssociationMixin<purchase, purchaseId>;
  removePurchases!: Sequelize.HasManyRemoveAssociationsMixin<purchase, purchaseId>;
  hasPurchase!: Sequelize.HasManyHasAssociationMixin<purchase, purchaseId>;
  hasPurchases!: Sequelize.HasManyHasAssociationsMixin<purchase, purchaseId>;
  countPurchases!: Sequelize.HasManyCountAssociationsMixin;
  // account hasMany received_credit_debit_note via account_id
  received_credit_debit_notes!: received_credit_debit_note[];
  getReceived_credit_debit_notes!: Sequelize.HasManyGetAssociationsMixin<received_credit_debit_note>;
  setReceived_credit_debit_notes!: Sequelize.HasManySetAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  addReceived_credit_debit_note!: Sequelize.HasManyAddAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  addReceived_credit_debit_notes!: Sequelize.HasManyAddAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  createReceived_credit_debit_note!: Sequelize.HasManyCreateAssociationMixin<received_credit_debit_note>;
  removeReceived_credit_debit_note!: Sequelize.HasManyRemoveAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  removeReceived_credit_debit_notes!: Sequelize.HasManyRemoveAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  hasReceived_credit_debit_note!: Sequelize.HasManyHasAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  hasReceived_credit_debit_notes!: Sequelize.HasManyHasAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  countReceived_credit_debit_notes!: Sequelize.HasManyCountAssociationsMixin;
  // account belongsTo address via address_id
  address!: address;
  getAddress!: Sequelize.BelongsToGetAssociationMixin<address>;
  setAddress!: Sequelize.BelongsToSetAssociationMixin<address, addressId>;
  createAddress!: Sequelize.BelongsToCreateAssociationMixin<address>;
  // account belongsTo contact via contact_id
  contact!: contact;
  getContact!: Sequelize.BelongsToGetAssociationMixin<contact>;
  setContact!: Sequelize.BelongsToSetAssociationMixin<contact, contactId>;
  createContact!: Sequelize.BelongsToCreateAssociationMixin<contact>;

  static initModel(sequelize: Sequelize.Sequelize): typeof account {
    return account.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    opening_balance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    gstin: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    address_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'address',
        key: 'id'
      }
    },
    contact_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'contact',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "address_id",
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "contact_id",
        using: "BTREE",
        fields: [
          { name: "contact_id" },
        ]
      },
    ]
  });
  }
}
