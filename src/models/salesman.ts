import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { invoice, invoiceId } from './invoice';

export interface salesmanAttributes {
  id: string;
  name: string;
  contact?: string;
}

export type salesmanPk = "id";
export type salesmanId = salesman[salesmanPk];
export type salesmanOptionalAttributes = "contact";
export type salesmanCreationAttributes = Optional<salesmanAttributes, salesmanOptionalAttributes>;

export class salesman extends Model<salesmanAttributes, salesmanCreationAttributes> implements salesmanAttributes {
  id!: string;
  name!: string;
  contact?: string;

  // salesman hasMany invoice via salesman_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof salesman {
    return salesman.init({
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
    tableName: 'salesman',
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
