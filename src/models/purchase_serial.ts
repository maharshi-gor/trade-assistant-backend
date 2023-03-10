import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { purchase_item, purchase_itemId } from './purchase_item';

export interface purchase_serialAttributes {
  product_no: number;
  purchase_item_id: string;
  serial_no?: string;
}

export type purchase_serialPk = "product_no" | "purchase_item_id";
export type purchase_serialId = purchase_serial[purchase_serialPk];
export type purchase_serialOptionalAttributes = "serial_no";
export type purchase_serialCreationAttributes = Optional<purchase_serialAttributes, purchase_serialOptionalAttributes>;

export class purchase_serial extends Model<purchase_serialAttributes, purchase_serialCreationAttributes> implements purchase_serialAttributes {
  product_no!: number;
  purchase_item_id!: string;
  serial_no?: string;

  // purchase_serial belongsTo purchase_item via purchase_item_id
  purchase_item!: purchase_item;
  getPurchase_item!: Sequelize.BelongsToGetAssociationMixin<purchase_item>;
  setPurchase_item!: Sequelize.BelongsToSetAssociationMixin<purchase_item, purchase_itemId>;
  createPurchase_item!: Sequelize.BelongsToCreateAssociationMixin<purchase_item>;

  static initModel(sequelize: Sequelize.Sequelize): typeof purchase_serial {
    return purchase_serial.init({
    product_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    purchase_item_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'purchase_item',
        key: 'id'
      }
    },
    serial_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'purchase_serial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_no" },
          { name: "purchase_item_id" },
        ]
      },
      {
        name: "purchase_item_id",
        using: "BTREE",
        fields: [
          { name: "purchase_item_id" },
        ]
      },
    ]
  });
  }
}
