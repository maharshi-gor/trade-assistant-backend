import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { inventory, inventoryId } from './inventory';
import type { issued_credit_debit_note, issued_credit_debit_noteId } from './issued_credit_debit_note';
import type { received_credit_debit_note, received_credit_debit_noteId } from './received_credit_debit_note';

export interface companyAttributes {
  id: string;
  name: string;
  contact?: string;
}

export type companyPk = "id";
export type companyId = company[companyPk];
export type companyOptionalAttributes = "contact";
export type companyCreationAttributes = Optional<companyAttributes, companyOptionalAttributes>;

export class company extends Model<companyAttributes, companyCreationAttributes> implements companyAttributes {
  id!: string;
  name!: string;
  contact?: string;

  // company hasMany inventory via company_id
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
  // company hasMany issued_credit_debit_note via company_id
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
  // company hasMany received_credit_debit_note via company_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof company {
    return company.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company',
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
