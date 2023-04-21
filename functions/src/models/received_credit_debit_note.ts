import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';
import type { branch, branchId } from './branch';
import type { company, companyId } from './company';
import type { purchase, purchaseId } from './purchase';
import type { tax_category, tax_categoryId } from './tax_category';

export interface received_credit_debit_noteAttributes {
  id: string;
  voucher_no: number;
  type: string;
  amount?: number;
  date?: string;
  note?: string;
  account_id: string;
  company_id: string;
  tax_category_id: string;
  branch_id: string;
  purchase_id: string;
}

export type received_credit_debit_notePk = "id";
export type received_credit_debit_noteId = received_credit_debit_note[received_credit_debit_notePk];
export type received_credit_debit_noteOptionalAttributes = "amount" | "date" | "note";
export type received_credit_debit_noteCreationAttributes = Optional<received_credit_debit_noteAttributes, received_credit_debit_noteOptionalAttributes>;

export class received_credit_debit_note extends Model<received_credit_debit_noteAttributes, received_credit_debit_noteCreationAttributes> implements received_credit_debit_noteAttributes {
  id!: string;
  voucher_no!: number;
  type!: string;
  amount?: number;
  date?: string;
  note?: string;
  account_id!: string;
  company_id!: string;
  tax_category_id!: string;
  branch_id!: string;
  purchase_id!: string;

  // received_credit_debit_note belongsTo account via account_id
  account!: account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // received_credit_debit_note belongsTo branch via branch_id
  branch!: branch;
  getBranch!: Sequelize.BelongsToGetAssociationMixin<branch>;
  setBranch!: Sequelize.BelongsToSetAssociationMixin<branch, branchId>;
  createBranch!: Sequelize.BelongsToCreateAssociationMixin<branch>;
  // received_credit_debit_note belongsTo company via company_id
  company!: company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<company, companyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<company>;
  // received_credit_debit_note belongsTo purchase via purchase_id
  purchase!: purchase;
  getPurchase!: Sequelize.BelongsToGetAssociationMixin<purchase>;
  setPurchase!: Sequelize.BelongsToSetAssociationMixin<purchase, purchaseId>;
  createPurchase!: Sequelize.BelongsToCreateAssociationMixin<purchase>;
  // received_credit_debit_note belongsTo tax_category via tax_category_id
  tax_category!: tax_category;
  getTax_category!: Sequelize.BelongsToGetAssociationMixin<tax_category>;
  setTax_category!: Sequelize.BelongsToSetAssociationMixin<tax_category, tax_categoryId>;
  createTax_category!: Sequelize.BelongsToCreateAssociationMixin<tax_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof received_credit_debit_note {
    return received_credit_debit_note.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    voucher_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(95),
      allowNull: true
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'account',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    tax_category_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'tax_category',
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
    purchase_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'purchase',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'received_credit_debit_note',
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
        name: "company_id",
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "tax_category_id",
        using: "BTREE",
        fields: [
          { name: "tax_category_id" },
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
        name: "purchase_id",
        using: "BTREE",
        fields: [
          { name: "purchase_id" },
        ]
      },
    ]
  });
  }
}
