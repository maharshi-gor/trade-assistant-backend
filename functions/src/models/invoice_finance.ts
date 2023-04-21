import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { finance_company, finance_companyId } from './finance_company';
import type { invoice, invoiceId } from './invoice';

export interface invoice_financeAttributes {
  id: string;
  installment: number;
  down_payment: number;
  first_installment_date: string;
  no_of_emi: number;
  scheme: string;
  finance_company_id: string;
}

export type invoice_financePk = "id";
export type invoice_financeId = invoice_finance[invoice_financePk];
export type invoice_financeCreationAttributes = invoice_financeAttributes;

export class invoice_finance extends Model<invoice_financeAttributes, invoice_financeCreationAttributes> implements invoice_financeAttributes {
  id!: string;
  installment!: number;
  down_payment!: number;
  first_installment_date!: string;
  no_of_emi!: number;
  scheme!: string;
  finance_company_id!: string;

  // invoice_finance belongsTo finance_company via finance_company_id
  finance_company!: finance_company;
  getFinance_company!: Sequelize.BelongsToGetAssociationMixin<finance_company>;
  setFinance_company!: Sequelize.BelongsToSetAssociationMixin<finance_company, finance_companyId>;
  createFinance_company!: Sequelize.BelongsToCreateAssociationMixin<finance_company>;
  // invoice_finance hasMany invoice via invoice_finance_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof invoice_finance {
    return invoice_finance.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    installment: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    down_payment: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    first_installment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    no_of_emi: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scheme: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    finance_company_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'finance_company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'invoice_finance',
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
        name: "finance_company_id",
        using: "BTREE",
        fields: [
          { name: "finance_company_id" },
        ]
      },
    ]
  });
  }
}
