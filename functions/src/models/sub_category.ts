import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';

export interface sub_categoryAttributes {
  id: string;
  name: string;
}

export type sub_categoryPk = "id";
export type sub_categoryId = sub_category[sub_categoryPk];
export type sub_categoryCreationAttributes = sub_categoryAttributes;

export class sub_category extends Model<sub_categoryAttributes, sub_categoryCreationAttributes> implements sub_categoryAttributes {
  id!: string;
  name!: string;

  // sub_category hasMany inventory via sub_category_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof sub_category {
    return sub_category.init({
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
    tableName: 'sub_category',
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
