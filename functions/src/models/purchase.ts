import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';
import type { branch, branchId } from './branch';
import type { purchase_item, purchase_itemId } from './purchase_item';
import type { received_credit_debit_note, received_credit_debit_noteId } from './received_credit_debit_note';

export interface purchaseAttributes {
  id: string;
  bill_no: number;
  seller_invoice_id: string;
  date?: string;
  transport_details?: string;
  lr_no?: string;
  note?: string;
  trade_type?: string;
  status?: string;
  round_off?: number;
  tcs_it_percentage?: number;
  tcs_it_amount?: number;
  year: string;
  branch_id: string;
  account_id: string;
}

export type purchasePk = "id";
export type purchaseId = purchase[purchasePk];
export type purchaseOptionalAttributes = "date" | "transport_details" | "lr_no" | "note" | "trade_type" | "status" | "round_off" | "tcs_it_percentage" | "tcs_it_amount";
export type purchaseCreationAttributes = Optional<purchaseAttributes, purchaseOptionalAttributes>;

export class purchase extends Model<purchaseAttributes, purchaseCreationAttributes> implements purchaseAttributes {
  id!: string;
  bill_no!: number;
  seller_invoice_id!: string;
  date?: string;
  transport_details?: string;
  lr_no?: string;
  note?: string;
  trade_type?: string;
  status?: string;
  round_off?: number;
  tcs_it_percentage?: number;
  tcs_it_amount?: number;
  year!: string;
  branch_id!: string;
  account_id!: string;

  // purchase belongsTo account via account_id
  account!: account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // purchase belongsTo branch via branch_id
  branch!: branch;
  getBranch!: Sequelize.BelongsToGetAssociationMixin<branch>;
  setBranch!: Sequelize.BelongsToSetAssociationMixin<branch, branchId>;
  createBranch!: Sequelize.BelongsToCreateAssociationMixin<branch>;
  // purchase hasMany purchase_item via purchase_id
  purchase_items!: purchase_item[];
  getPurchase_items!: Sequelize.HasManyGetAssociationsMixin<purchase_item>;
  setPurchase_items!: Sequelize.HasManySetAssociationsMixin<purchase_item, purchase_itemId>;
  addPurchase_item!: Sequelize.HasManyAddAssociationMixin<purchase_item, purchase_itemId>;
  addPurchase_items!: Sequelize.HasManyAddAssociationsMixin<purchase_item, purchase_itemId>;
  createPurchase_item!: Sequelize.HasManyCreateAssociationMixin<purchase_item>;
  removePurchase_item!: Sequelize.HasManyRemoveAssociationMixin<purchase_item, purchase_itemId>;
  removePurchase_items!: Sequelize.HasManyRemoveAssociationsMixin<purchase_item, purchase_itemId>;
  hasPurchase_item!: Sequelize.HasManyHasAssociationMixin<purchase_item, purchase_itemId>;
  hasPurchase_items!: Sequelize.HasManyHasAssociationsMixin<purchase_item, purchase_itemId>;
  countPurchase_items!: Sequelize.HasManyCountAssociationsMixin;
  // purchase hasMany received_credit_debit_note via purchase_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof purchase {
    return purchase.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    bill_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seller_invoice_id: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
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
    round_off: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tcs_it_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    tcs_it_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'branch',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'account',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'purchase',
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
        name: "branch_id",
        using: "BTREE",
        fields: [
          { name: "branch_id" },
        ]
      },
      {
        name: "account_id",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
    ]
  });
  }
}
