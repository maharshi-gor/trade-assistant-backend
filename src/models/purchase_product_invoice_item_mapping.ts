import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface purchase_product_invoice_item_mappingAttributes {
  id?: string;
  idpurchase_product?: number;
  year?: string;
}

export type purchase_product_invoice_item_mappingPk = "id";
export type purchase_product_invoice_item_mappingId = purchase_product_invoice_item_mapping[purchase_product_invoice_item_mappingPk];
export type purchase_product_invoice_item_mappingOptionalAttributes = "id" | "idpurchase_product" | "year";
export type purchase_product_invoice_item_mappingCreationAttributes = Optional<purchase_product_invoice_item_mappingAttributes, purchase_product_invoice_item_mappingOptionalAttributes>;

export class purchase_product_invoice_item_mapping extends Model<purchase_product_invoice_item_mappingAttributes, purchase_product_invoice_item_mappingCreationAttributes> implements purchase_product_invoice_item_mappingAttributes {
  id?: string;
  idpurchase_product?: number;
  year?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof purchase_product_invoice_item_mapping {
    return purchase_product_invoice_item_mapping.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      primaryKey: true
    },
    idpurchase_product: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'purchase_product_invoice_item_mapping',
    timestamps: false
  });
  }
}
