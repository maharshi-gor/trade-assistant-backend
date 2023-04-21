import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { invoice_item, invoice_itemId } from './invoice_item';

export interface invoice_serialAttributes {
  product_no: number;
  invoice_item_id: string;
  serial_no?: string;
}

export type invoice_serialPk = "product_no" | "invoice_item_id";
export type invoice_serialId = invoice_serial[invoice_serialPk];
export type invoice_serialOptionalAttributes = "serial_no";
export type invoice_serialCreationAttributes = Optional<invoice_serialAttributes, invoice_serialOptionalAttributes>;

export class invoice_serial extends Model<invoice_serialAttributes, invoice_serialCreationAttributes> implements invoice_serialAttributes {
  product_no!: number;
  invoice_item_id!: string;
  serial_no?: string;

  // invoice_serial belongsTo invoice_item via invoice_item_id
  invoice_item!: invoice_item;
  getInvoice_item!: Sequelize.BelongsToGetAssociationMixin<invoice_item>;
  setInvoice_item!: Sequelize.BelongsToSetAssociationMixin<invoice_item, invoice_itemId>;
  createInvoice_item!: Sequelize.BelongsToCreateAssociationMixin<invoice_item>;

  static initModel(sequelize: Sequelize.Sequelize): typeof invoice_serial {
    return invoice_serial.init({
    product_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    invoice_item_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'invoice_item',
        key: 'id'
      }
    },
    serial_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'invoice_serial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_no" },
          { name: "invoice_item_id" },
        ]
      },
      {
        name: "invoice_item_id",
        using: "BTREE",
        fields: [
          { name: "invoice_item_id" },
        ]
      },
    ]
  });
  }
}
