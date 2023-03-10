import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';

export interface contactAttributes {
  id: string;
  name: string;
  mobile?: string;
  phone?: string;
  email?: string;
}

export type contactPk = "id";
export type contactId = contact[contactPk];
export type contactOptionalAttributes = "mobile" | "phone" | "email";
export type contactCreationAttributes = Optional<contactAttributes, contactOptionalAttributes>;

export class contact extends Model<contactAttributes, contactCreationAttributes> implements contactAttributes {
  id!: string;
  name!: string;
  mobile?: string;
  phone?: string;
  email?: string;

  // contact hasMany account via contact_id
  accounts!: account[];
  getAccounts!: Sequelize.HasManyGetAssociationsMixin<account>;
  setAccounts!: Sequelize.HasManySetAssociationsMixin<account, accountId>;
  addAccount!: Sequelize.HasManyAddAssociationMixin<account, accountId>;
  addAccounts!: Sequelize.HasManyAddAssociationsMixin<account, accountId>;
  createAccount!: Sequelize.HasManyCreateAssociationMixin<account>;
  removeAccount!: Sequelize.HasManyRemoveAssociationMixin<account, accountId>;
  removeAccounts!: Sequelize.HasManyRemoveAssociationsMixin<account, accountId>;
  hasAccount!: Sequelize.HasManyHasAssociationMixin<account, accountId>;
  hasAccounts!: Sequelize.HasManyHasAssociationsMixin<account, accountId>;
  countAccounts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof contact {
    return contact.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'contact',
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
