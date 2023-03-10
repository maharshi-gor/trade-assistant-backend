import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { invoice, invoiceId } from './invoice';
import type { issued_credit_debit_note, issued_credit_debit_noteId } from './issued_credit_debit_note';
import type { purchase, purchaseId } from './purchase';
import type { received_credit_debit_note, received_credit_debit_noteId } from './received_credit_debit_note';

export interface branchAttributes {
  id: string;
  name: string;
  code: string;
}

export type branchPk = "id";
export type branchId = branch[branchPk];
export type branchCreationAttributes = branchAttributes;

export class branch extends Model<branchAttributes, branchCreationAttributes> implements branchAttributes {
  id!: string;
  name!: string;
  code!: string;

  // branch hasMany invoice via branch_id
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
  // branch hasMany issued_credit_debit_note via branch_id
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
  // branch hasMany purchase via branch_id
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
  // branch hasMany received_credit_debit_note via branch_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof branch {
    return branch.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "name"
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "code"
    }
  }, {
    sequelize,
    tableName: 'branch',
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
        name: "name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
