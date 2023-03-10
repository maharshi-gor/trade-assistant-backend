import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';

export interface categoryAttributes {
  id: string;
  name: string;
}

export type categoryPk = "id";
export type categoryId = category[categoryPk];
export type categoryCreationAttributes = categoryAttributes;

export class category extends Model<categoryAttributes, categoryCreationAttributes> implements categoryAttributes {
  id!: string;
  name!: string;

  // category hasMany inventory via category_id
  inventories!: inventory[];
  getInventories!: Sequelize.HasManyGetAssociationsMixin<inventory>;
  setInventories!: Sequelize.HasManySetAssociationsMixin<inventory, inventoryId>;
  addInventory!: Sequelize.HasManyAddAssociationMixin<inventory, inventoryId>;
  addInventories!: Sequelize.HasManyAddAssociationsMixin<inventory, inventoryId>;
  createInventory!: Sequelize.HasManyCreateAssociationMixin<inventory>;
  removeInventory!: Sequelize.HasManyRemoveAssociationMixin<inventory, inventoryId>;
  removeInventories!: Sequelize.HasManyRemoveAssociationsMixin<inventory, inventoryId>;
  hasInventory!: Sequelize.HasManyHasAssociationMixin<inventory, inventoryId>;
  hasInventories!: Sequelize.HasManyHasAssociationsMixin<inventory, inventoryId>;
  countInventories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof category {
    return category.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'category',
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
