import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { category, categoryId } from './category';
import type { company, companyId } from './company';
import type { invoice_item, invoice_itemId } from './invoice_item';
import type { purchase_item, purchase_itemId } from './purchase_item';
import type { sub_category, sub_categoryId } from './sub_category';
import type { tax_category, tax_categoryId } from './tax_category';

export interface inventoryAttributes {
  id: string;
  name: string;
  hsn_code?: string;
  stock?: number;
  company_id: string;
  category_id?: string;
  sub_category_id?: string;
  tax_category_id: string;
}

export type inventoryPk = "id";
export type inventoryId = inventory[inventoryPk];
export type inventoryOptionalAttributes = "hsn_code" | "stock" | "category_id" | "sub_category_id";
export type inventoryCreationAttributes = Optional<inventoryAttributes, inventoryOptionalAttributes>;

export class inventory extends Model<inventoryAttributes, inventoryCreationAttributes> implements inventoryAttributes {
  id!: string;
  name!: string;
  hsn_code?: string;
  stock?: number;
  company_id!: string;
  category_id?: string;
  sub_category_id?: string;
  tax_category_id!: string;

  // inventory belongsTo category via category_id
  category!: category;
  getCategory!: Sequelize.BelongsToGetAssociationMixin<category>;
  setCategory!: Sequelize.BelongsToSetAssociationMixin<category, categoryId>;
  createCategory!: Sequelize.BelongsToCreateAssociationMixin<category>;
  // inventory belongsTo company via company_id
  company!: company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<company, companyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<company>;
  // inventory hasMany invoice_item via inventory_id
  invoice_items!: invoice_item[];
  getInvoice_items!: Sequelize.HasManyGetAssociationsMixin<invoice_item>;
  setInvoice_items!: Sequelize.HasManySetAssociationsMixin<invoice_item, invoice_itemId>;
  addInvoice_item!: Sequelize.HasManyAddAssociationMixin<invoice_item, invoice_itemId>;
  addInvoice_items!: Sequelize.HasManyAddAssociationsMixin<invoice_item, invoice_itemId>;
  createInvoice_item!: Sequelize.HasManyCreateAssociationMixin<invoice_item>;
  removeInvoice_item!: Sequelize.HasManyRemoveAssociationMixin<invoice_item, invoice_itemId>;
  removeInvoice_items!: Sequelize.HasManyRemoveAssociationsMixin<invoice_item, invoice_itemId>;
  hasInvoice_item!: Sequelize.HasManyHasAssociationMixin<invoice_item, invoice_itemId>;
  hasInvoice_items!: Sequelize.HasManyHasAssociationsMixin<invoice_item, invoice_itemId>;
  countInvoice_items!: Sequelize.HasManyCountAssociationsMixin;
  // inventory hasMany purchase_item via inventory_id
  purchase_items!: purchase_item[];
  getPurchase_items!: Sequelize.HasManyGetAssociationsMixin<purchase_item>;
  setPurchase_items!: Sequelize.HasManySetAssociationsMixin<purchase_item, purchase_itemId>;
  addPurchase_item!: Sequelize.HasManyAddAssociationMixin<purchase_item, purchase_itemId>;
  addPurchase_items!: Sequelize.HasManyAddAssociationsMixin<purchase_item, purchase_itemId>;
  createPurchase_item!: Sequelize.HasManyCreateAssociationMixin<purchase_item>;
  removePurchase_item!: Sequelize.HasManyRemoveAssociationMixin<purchase_item, purchase_itemId>;
  removePurchase_items!: Sequelize.HasManyRemoveAssociationsMixin<purchase_item, purchase_itemId>;
  hasPurchase_item!: Sequelize.HasManyHasAssociationMixin<purchase_item, purchase_itemId>;
  hasPurchase_items!: Sequelize.HasManyHasAssociationsMixin<purchase_item, purchase_itemId>;
  countPurchase_items!: Sequelize.HasManyCountAssociationsMixin;
  // inventory belongsTo sub_category via sub_category_id
  sub_category!: sub_category;
  getSub_category!: Sequelize.BelongsToGetAssociationMixin<sub_category>;
  setSub_category!: Sequelize.BelongsToSetAssociationMixin<sub_category, sub_categoryId>;
  createSub_category!: Sequelize.BelongsToCreateAssociationMixin<sub_category>;
  // inventory belongsTo tax_category via tax_category_id
  tax_category!: tax_category;
  getTax_category!: Sequelize.BelongsToGetAssociationMixin<tax_category>;
  setTax_category!: Sequelize.BelongsToSetAssociationMixin<tax_category, tax_categoryId>;
  createTax_category!: Sequelize.BelongsToCreateAssociationMixin<tax_category>;

  static initModel(sequelize: Sequelize.Sequelize): typeof inventory {
    return inventory.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    hsn_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    company_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    category_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    sub_category_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'sub_category',
        key: 'id'
      }
    },
    tax_category_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'tax_category',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'inventory',
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
        name: "company_id",
        using: "BTREE",
        fields: [
          { name: "company_id" },
        ]
      },
      {
        name: "category_id",
        using: "BTREE",
        fields: [
          { name: "category_id" },
        ]
      },
      {
        name: "sub_category_id",
        using: "BTREE",
        fields: [
          { name: "sub_category_id" },
        ]
      },
      {
        name: "tax_category_id",
        using: "BTREE",
        fields: [
          { name: "tax_category_id" },
        ]
      },
    ]
  });
  }
}
