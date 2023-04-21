import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';
import type { purchase, purchaseId } from './purchase';
import type { purchase_serial, purchase_serialId } from './purchase_serial';

export interface purchase_itemAttributes {
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
  purchase_id: string;
  inventory_id: string;
}

export type purchase_itemPk = "id";
export type purchase_itemId = purchase_item[purchase_itemPk];
export type purchase_itemOptionalAttributes = "discount_percentage" | "discount_amount" | "extra_tax_percentage" | "extra_tax_amount" | "delivery_charge" | "note";
export type purchase_itemCreationAttributes = Optional<purchase_itemAttributes, purchase_itemOptionalAttributes>;

export class purchase_item extends Model<purchase_itemAttributes, purchase_itemCreationAttributes> implements purchase_itemAttributes {
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
  purchase_id!: string;
  inventory_id!: string;

  // purchase_item belongsTo inventory via inventory_id
  inventory!: inventory;
  getInventory!: Sequelize.BelongsToGetAssociationMixin<inventory>;
  setInventory!: Sequelize.BelongsToSetAssociationMixin<inventory, inventoryId>;
  createInventory!: Sequelize.BelongsToCreateAssociationMixin<inventory>;
  // purchase_item belongsTo purchase via purchase_id
  purchase!: purchase;
  getPurchase!: Sequelize.BelongsToGetAssociationMixin<purchase>;
  setPurchase!: Sequelize.BelongsToSetAssociationMixin<purchase, purchaseId>;
  createPurchase!: Sequelize.BelongsToCreateAssociationMixin<purchase>;
  // purchase_item hasMany purchase_serial via purchase_item_id
  purchase_serials!: purchase_serial[];
  getPurchase_serials!: Sequelize.HasManyGetAssociationsMixin<purchase_serial>;
  setPurchase_serials!: Sequelize.HasManySetAssociationsMixin<purchase_serial, purchase_serialId>;
  addPurchase_serial!: Sequelize.HasManyAddAssociationMixin<purchase_serial, purchase_serialId>;
  addPurchase_serials!: Sequelize.HasManyAddAssociationsMixin<purchase_serial, purchase_serialId>;
  createPurchase_serial!: Sequelize.HasManyCreateAssociationMixin<purchase_serial>;
  removePurchase_serial!: Sequelize.HasManyRemoveAssociationMixin<purchase_serial, purchase_serialId>;
  removePurchase_serials!: Sequelize.HasManyRemoveAssociationsMixin<purchase_serial, purchase_serialId>;
  hasPurchase_serial!: Sequelize.HasManyHasAssociationMixin<purchase_serial, purchase_serialId>;
  hasPurchase_serials!: Sequelize.HasManyHasAssociationsMixin<purchase_serial, purchase_serialId>;
  countPurchase_serials!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof purchase_item {
    return purchase_item.init({
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
    purchase_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'purchase',
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
    tableName: 'purchase_item',
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
        name: "purchase_id",
        using: "BTREE",
        fields: [
          { name: "purchase_id" },
        ]
      },
    ]
  });
  }
}
