import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';
import type { invoice, invoiceId } from './invoice';
import type { invoice_serial, invoice_serialId } from './invoice_serial';

export interface invoice_itemAttributes {
  id: string;
  quantity: number;
  base_rate: number;
  discount_percentage?: number;
  discount_amount?: number;
  horizontal_rate: number;
  state_tax_percentage: number;
  central_tax_percentage: number;
  extra_tax_percentage?: number;
  state_tax_amount: number;
  central_tax_amount: number;
  extra_tax_amount?: number;
  delivery_charge?: number;
  final_amount: number;
  note?: string;
  invoice_id: string;
  inventory_id: string;
}

export type invoice_itemPk = "id";
export type invoice_itemId = invoice_item[invoice_itemPk];
export type invoice_itemOptionalAttributes = "discount_percentage" | "discount_amount" | "extra_tax_percentage" | "extra_tax_amount" | "delivery_charge" | "note";
export type invoice_itemCreationAttributes = Optional<invoice_itemAttributes, invoice_itemOptionalAttributes>;

export class invoice_item extends Model<invoice_itemAttributes, invoice_itemCreationAttributes> implements invoice_itemAttributes {
  id!: string;
  quantity!: number;
  base_rate!: number;
  discount_percentage?: number;
  discount_amount?: number;
  horizontal_rate!: number;
  state_tax_percentage!: number;
  central_tax_percentage!: number;
  extra_tax_percentage?: number;
  state_tax_amount!: number;
  central_tax_amount!: number;
  extra_tax_amount?: number;
  delivery_charge?: number;
  final_amount!: number;
  note?: string;
  invoice_id!: string;
  inventory_id!: string;

  // invoice_item belongsTo inventory via inventory_id
  inventory!: inventory;
  getInventory!: Sequelize.BelongsToGetAssociationMixin<inventory>;
  setInventory!: Sequelize.BelongsToSetAssociationMixin<inventory, inventoryId>;
  createInventory!: Sequelize.BelongsToCreateAssociationMixin<inventory>;
  // invoice_item belongsTo invoice via invoice_id
  invoice!: invoice;
  getInvoice!: Sequelize.BelongsToGetAssociationMixin<invoice>;
  setInvoice!: Sequelize.BelongsToSetAssociationMixin<invoice, invoiceId>;
  createInvoice!: Sequelize.BelongsToCreateAssociationMixin<invoice>;
  // invoice_item hasMany invoice_serial via invoice_item_id
  invoice_serials!: invoice_serial[];
  getInvoice_serials!: Sequelize.HasManyGetAssociationsMixin<invoice_serial>;
  setInvoice_serials!: Sequelize.HasManySetAssociationsMixin<invoice_serial, invoice_serialId>;
  addInvoice_serial!: Sequelize.HasManyAddAssociationMixin<invoice_serial, invoice_serialId>;
  addInvoice_serials!: Sequelize.HasManyAddAssociationsMixin<invoice_serial, invoice_serialId>;
  createInvoice_serial!: Sequelize.HasManyCreateAssociationMixin<invoice_serial>;
  removeInvoice_serial!: Sequelize.HasManyRemoveAssociationMixin<invoice_serial, invoice_serialId>;
  removeInvoice_serials!: Sequelize.HasManyRemoveAssociationsMixin<invoice_serial, invoice_serialId>;
  hasInvoice_serial!: Sequelize.HasManyHasAssociationMixin<invoice_serial, invoice_serialId>;
  hasInvoice_serials!: Sequelize.HasManyHasAssociationsMixin<invoice_serial, invoice_serialId>;
  countInvoice_serials!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof invoice_item {
    return invoice_item.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    base_rate: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    discount_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    discount_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    horizontal_rate: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    state_tax_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    central_tax_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    extra_tax_percentage: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    state_tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    central_tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    extra_tax_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    delivery_charge: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    final_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    invoice_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'invoice',
        key: 'id'
      }
    },
    inventory_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'inventory',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'invoice_item',
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
        name: "inventory_id",
        using: "BTREE",
        fields: [
          { name: "inventory_id" },
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
