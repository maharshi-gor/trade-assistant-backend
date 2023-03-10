import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { invoice_finance, invoice_financeId } from './invoice_finance';

export interface finance_companyAttributes {
  id: string;
  name: string;
  contact?: string;
}

export type finance_companyPk = "id";
export type finance_companyId = finance_company[finance_companyPk];
export type finance_companyOptionalAttributes = "contact";
export type finance_companyCreationAttributes = Optional<finance_companyAttributes, finance_companyOptionalAttributes>;

export class finance_company extends Model<finance_companyAttributes, finance_companyCreationAttributes> implements finance_companyAttributes {
  id!: string;
  name!: string;
  contact?: string;

  // finance_company hasMany invoice_finance via finance_company_id
  invoice_finances!: invoice_finance[];
  getInvoice_finances!: Sequelize.HasManyGetAssociationsMixin<invoice_finance>;
  setInvoice_finances!: Sequelize.HasManySetAssociationsMixin<invoice_finance, invoice_financeId>;
  addInvoice_finance!: Sequelize.HasManyAddAssociationMixin<invoice_finance, invoice_financeId>;
  addInvoice_finances!: Sequelize.HasManyAddAssociationsMixin<invoice_finance, invoice_financeId>;
  createInvoice_finance!: Sequelize.HasManyCreateAssociationMixin<invoice_finance>;
  removeInvoice_finance!: Sequelize.HasManyRemoveAssociationMixin<invoice_finance, invoice_financeId>;
  removeInvoice_finances!: Sequelize.HasManyRemoveAssociationsMixin<invoice_finance, invoice_financeId>;
  hasInvoice_finance!: Sequelize.HasManyHasAssociationMixin<invoice_finance, invoice_financeId>;
  hasInvoice_finances!: Sequelize.HasManyHasAssociationsMixin<invoice_finance, invoice_financeId>;
  countInvoice_finances!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof finance_company {
    return finance_company.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'finance_company',
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
    ]
  });
  }
}
