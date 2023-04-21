import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';
import type { branch, branchId } from './branch';
import type { invoice_finance, invoice_financeId } from './invoice_finance';
import type { invoice_item, invoice_itemId } from './invoice_item';
import type { issued_credit_debit_note, issued_credit_debit_noteId } from './issued_credit_debit_note';
import type { salesman, salesmanId } from './salesman';

export interface invoiceAttributes {
  id: string;
  bill_no: number;
  original_print?: number;
  challan_no?: string;
  date?: string;
  under_exchange?: number;
  transport_details?: string;
  lr_no?: string;
  round_off?: number;
  note?: string;
  trade_type?: string;
  status?: string;
  year: string;
  account_id: string;
  salesman_id: string;
  branch_id: string;
  dispatch_account_id?: string;
  invoice_finance_id?: string;
  invoice_finance_account_id?: string;
}

export type invoicePk = "id";
export type invoiceId = invoice[invoicePk];
export type invoiceOptionalAttributes = "original_print" | "challan_no" | "date" | "under_exchange" | "transport_details" | "lr_no" | "round_off" | "note" | "trade_type" | "status" | "dispatch_account_id" | "invoice_finance_id" | "invoice_finance_account_id";
export type invoiceCreationAttributes = Optional<invoiceAttributes, invoiceOptionalAttributes>;

export class invoice extends Model<invoiceAttributes, invoiceCreationAttributes> implements invoiceAttributes {
  id!: string;
  bill_no!: number;
  original_print?: number;
  challan_no?: string;
  date?: string;
  under_exchange?: number;
  transport_details?: string;
  lr_no?: string;
  round_off?: number;
  note?: string;
  trade_type?: string;
  status?: string;
  year!: string;
  account_id!: string;
  salesman_id!: string;
  branch_id!: string;
  dispatch_account_id?: string;
  invoice_finance_id?: string;
  invoice_finance_account_id?: string;

  // invoice belongsTo account via account_id
  account!: account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // invoice belongsTo account via dispatch_account_id
  dispatch_account!: account;
  getDispatch_account!: Sequelize.BelongsToGetAssociationMixin<account>;
  setDispatch_account!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createDispatch_account!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // invoice belongsTo account via invoice_finance_account_id
  invoice_finance_account!: account;
  getInvoice_finance_account!: Sequelize.BelongsToGetAssociationMixin<account>;
  setInvoice_finance_account!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createInvoice_finance_account!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // invoice belongsTo branch via branch_id
  branch!: branch;
  getBranch!: Sequelize.BelongsToGetAssociationMixin<branch>;
  setBranch!: Sequelize.BelongsToSetAssociationMixin<branch, branchId>;
  createBranch!: Sequelize.BelongsToCreateAssociationMixin<branch>;
  // invoice hasMany invoice_item via invoice_id
  invoice_items!: invoice_item[];
  getInvoice_items!: Sequelize.HasManyGetAssociationsMixin<invoice_item>;
  setInvoice_items!: Sequelize.HasManySetAssociationsMixin<invoice_item, invoice_itemId>;
  addInvoice_item!: Sequelize.HasManyAddAssociationMixin<invoice_item, invoice_itemId>;
  addInvoice_items!: Sequelize.HasManyAddAssociationsMixin<invoice_item, invoice_itemId>;
  createInvoice_item!: Sequelize.HasManyCreateAssociationMixin<invoice_item>;
  removeInvoice_item!: Sequelize.HasManyRemoveAssociationMixin<invoice_item, invoice_itemId>;
  removeInvoice_items!: Sequelize.HasManyRemoveAssociationsMixin<invoice_item, invoice_itemId>;
  hasInvoice_item!: Sequelize.HasManyHasAssociationMixin<invoice_item, invoice_itemId>;
  hasInvoice_items!: Sequelize.HasManyHasAssociationsMixin<invoice_item, invoice_itemId>;
  countInvoice_items!: Sequelize.HasManyCountAssociationsMixin;
  // invoice hasMany issued_credit_debit_note via invoice_id
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
  // invoice belongsTo invoice_finance via invoice_finance_id
  invoice_finance!: invoice_finance;
  getInvoice_finance!: Sequelize.BelongsToGetAssociationMixin<invoice_finance>;
  setInvoice_finance!: Sequelize.BelongsToSetAssociationMixin<invoice_finance, invoice_financeId>;
  createInvoice_finance!: Sequelize.BelongsToCreateAssociationMixin<invoice_finance>;
  // invoice belongsTo salesman via salesman_id
  salesman!: salesman;
  getSalesman!: Sequelize.BelongsToGetAssociationMixin<salesman>;
  setSalesman!: Sequelize.BelongsToSetAssociationMixin<salesman, salesmanId>;
  createSalesman!: Sequelize.BelongsToCreateAssociationMixin<salesman>;

  static initModel(sequelize: Sequelize.Sequelize): typeof invoice {
    return invoice.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    bill_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    original_print: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    challan_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    under_exchange: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    transport_details: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lr_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    round_off: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    trade_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    salesman_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'salesman',
        key: 'id'
      }
    },
    branch_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'branch',
        key: 'id'
      }
    },
    dispatch_account_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    invoice_finance_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'invoice_finance',
        key: 'id'
      }
    },
    invoice_finance_account_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'account',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'invoice',
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
        name: "account_id",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "salesman_id",
        using: "BTREE",
        fields: [
          { name: "salesman_id" },
        ]
      },
      {
        name: "dispatch_account_id",
        using: "BTREE",
        fields: [
          { name: "dispatch_account_id" },
        ]
      },
      {
        name: "branch_id",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "invoice_finance_id",
        using: "BTREE",
        fields: [
          { name: "invoice_finance_id" },
        ]
      },
      {
        name: "invoice_finance_account_id",
        using: "BTREE",
        fields: [
          { name: "invoice_finance_account_id" },
        ]
      },
    ]
  });
  }
}
