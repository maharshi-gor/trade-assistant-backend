import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface product_inventory_mappingAttributes {
  idproduct?: number;
  id?: string;
}

export type product_inventory_mappingPk = "id";
export type product_inventory_mappingId = product_inventory_mapping[product_inventory_mappingPk];
export type product_inventory_mappingOptionalAttributes = "idproduct" | "id";
export type product_inventory_mappingCreationAttributes = Optional<product_inventory_mappingAttributes, product_inventory_mappingOptionalAttributes>;

export class product_inventory_mapping extends Model<product_inventory_mappingAttributes, product_inventory_mappingCreationAttributes> implements product_inventory_mappingAttributes {
  idproduct?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof product_inventory_mapping {
    return product_inventory_mapping.init({
    idproduct: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'product_inventory_mapping',
    timestamps: false
  });
  }
}
