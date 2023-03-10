import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';

export interface addressAttributes {
  id: string;
  add1?: string;
  add2?: string;
  add3?: string;
  dist?: string;
  pin?: string;
  state_code?: string;
  state?: string;
  country?: string;
}

export type addressPk = "id";
export type addressId = address[addressPk];
export type addressOptionalAttributes = "add1" | "add2" | "add3" | "dist" | "pin" | "state_code" | "state" | "country";
export type addressCreationAttributes = Optional<addressAttributes, addressOptionalAttributes>;

export class address extends Model<addressAttributes, addressCreationAttributes> implements addressAttributes {
  id!: string;
  add1?: string;
  add2?: string;
  add3?: string;
  dist?: string;
  pin?: string;
  state_code?: string;
  state?: string;
  country?: string;

  // address hasMany account via address_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof address {
    return address.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    add1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    add2: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    add3: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    dist: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    state_code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'address',
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
