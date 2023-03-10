import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';
import type { issued_credit_debit_note, issued_credit_debit_noteId } from './issued_credit_debit_note';
import type { received_credit_debit_note, received_credit_debit_noteId } from './received_credit_debit_note';

export interface tax_categoryAttributes {
  id: string;
  value: number;
  central: number;
  state: number;
}

export type tax_categoryPk = "id";
export type tax_categoryId = tax_category[tax_categoryPk];
export type tax_categoryCreationAttributes = tax_categoryAttributes;

export class tax_category extends Model<tax_categoryAttributes, tax_categoryCreationAttributes> implements tax_categoryAttributes {
  id!: string;
  value!: number;
  central!: number;
  state!: number;

  // tax_category hasMany inventory via tax_category_id
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
  // tax_category hasMany issued_credit_debit_note via tax_category_id
  issued_credit_debit_notes!: issued_credit_debit_note[];
  getIssued_credit_debit_notes!: Sequelize.HasManyGetAssociationsMixin<issued_credit_debit_note>;
  setIssued_credit_debit_notes!: Sequelize.HasManySetAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  addIssued_credit_debit_note!: Sequelize.HasManyAddAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  addIssued_credit_debit_notes!: Sequelize.HasManyAddAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  createIssued_credit_debit_note!: Sequelize.HasManyCreateAssociationMixin<issued_credit_debit_note>;
  removeIssued_credit_debit_note!: Sequelize.HasManyRemoveAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  removeIssued_credit_debit_notes!: Sequelize.HasManyRemoveAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  hasIssued_credit_debit_note!: Sequelize.HasManyHasAssociationMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  hasIssued_credit_debit_notes!: Sequelize.HasManyHasAssociationsMixin<issued_credit_debit_note, issued_credit_debit_noteId>;
  countIssued_credit_debit_notes!: Sequelize.HasManyCountAssociationsMixin;
  // tax_category hasMany received_credit_debit_note via tax_category_id
  received_credit_debit_notes!: received_credit_debit_note[];
  getReceived_credit_debit_notes!: Sequelize.HasManyGetAssociationsMixin<received_credit_debit_note>;
  setReceived_credit_debit_notes!: Sequelize.HasManySetAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  addReceived_credit_debit_note!: Sequelize.HasManyAddAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  addReceived_credit_debit_notes!: Sequelize.HasManyAddAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  createReceived_credit_debit_note!: Sequelize.HasManyCreateAssociationMixin<received_credit_debit_note>;
  removeReceived_credit_debit_note!: Sequelize.HasManyRemoveAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  removeReceived_credit_debit_notes!: Sequelize.HasManyRemoveAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  hasReceived_credit_debit_note!: Sequelize.HasManyHasAssociationMixin<received_credit_debit_note, received_credit_debit_noteId>;
  hasReceived_credit_debit_notes!: Sequelize.HasManyHasAssociationsMixin<received_credit_debit_note, received_credit_debit_noteId>;
  countReceived_credit_debit_notes!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tax_category {
    return tax_category.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    central: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    state: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tax_category',
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
