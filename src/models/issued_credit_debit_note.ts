import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';
import type { branch, branchId } from './branch';
import type { company, companyId } from './company';
import type { invoice, invoiceId } from './invoice';
import type { tax_category, tax_categoryId } from './tax_category';

export interface issued_credit_debit_noteAttributes {
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
  invoice_id: string;
}

export type issued_credit_debit_notePk = "id";
export type issued_credit_debit_noteId = issued_credit_debit_note[issued_credit_debit_notePk];
export type issued_credit_debit_noteOptionalAttributes = "amount" | "date" | "note";
export type issued_credit_debit_noteCreationAttributes = Optional<issued_credit_debit_noteAttributes, issued_credit_debit_noteOptionalAttributes>;

export class issued_credit_debit_note extends Model<issued_credit_debit_noteAttributes, issued_credit_debit_noteCreationAttributes> implements issued_credit_debit_noteAttributes {
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
  invoice_id!: string;

  // issued_credit_debit_note belongsTo account via account_id
  account!: account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // issued_credit_debit_note belongsTo branch via branch_id
  branch!: branch;
  getBranch!: Sequelize.BelongsToGetAssociationMixin<branch>;
  setBranch!: Sequelize.BelongsToSetAssociationMixin<branch, branchId>;
  createBranch!: Sequelize.BelongsToCreateAssociationMixin<branch>;
  // issued_credit_debit_note belongsTo company via company_id
  company!: company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<company, companyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<company>;
  // issued_credit_debit_note belongsTo invoice via invoice_id
  invoice!: invoice;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<invoice>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<invoice, invoiceId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<invoice>;
  // issued_credit_debit_note belongsTo tax_category via tax_category_id
  tax_category!: tax_category;
  getTax_category!: Sequelize.BelongsToGetAssociationMixin<tax_category>;
  setTax_category!: Sequelize.BelongsToSetAssociationMixin<tax_category, tax_categoryId>;
  createTax_category!: Sequelize.BelongsToCreateAssociationMixin<tax_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof issued_credit_debit_note {
    return issued_credit_debit_note.init({
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
    invoice_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'invoice',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'issued_credit_debit_note',
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
        name: "invoice_id",
        using: "BTREE",
        fields: [
          { name: "invoice_id" },
        ]
      },
    ]
  });
  }
}
