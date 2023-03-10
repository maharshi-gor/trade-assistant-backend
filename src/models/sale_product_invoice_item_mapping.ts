import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sale_product_invoice_item_mappingAttributes {
  id?: string;
  idsale_product?: number;
  year?: string;
}

export type sale_product_invoice_item_mappingPk = "id";
export type sale_product_invoice_item_mappingId = sale_product_invoice_item_mapping[sale_product_invoice_item_mappingPk];
export type sale_product_invoice_item_mappingOptionalAttributes = "id" | "idsale_product" | "year";
export type sale_product_invoice_item_mappingCreationAttributes = Optional<sale_product_invoice_item_mappingAttributes, sale_product_invoice_item_mappingOptionalAttributes>;

export class sale_product_invoice_item_mapping extends Model<sale_product_invoice_item_mappingAttributes, sale_product_invoice_item_mappingCreationAttributes> implements sale_product_invoice_item_mappingAttributes {
  id?: string;
  idsale_product?: number;
  year?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sale_product_invoice_item_mapping {
    return sale_product_invoice_item_mapping.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      primaryKey: true
    },
    idsale_product: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sale_product_invoice_item_mapping',
    timestamps: false
  });
  }
}
