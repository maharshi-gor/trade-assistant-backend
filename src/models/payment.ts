import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { account, accountId } from './account';
import type { bank, bankId } from './bank';

export interface paymentAttributes {
  id: string;
  voucher_no: number;
  type: string;
  cheque_no?: string;
  dd_no?: string;
  amount?: number;
  date?: string;
  bank_id: string;
  account_id: string;
}

export type paymentPk = "id";
export type paymentId = payment[paymentPk];
export type paymentOptionalAttributes = "cheque_no" | "dd_no" | "amount" | "date";
export type paymentCreationAttributes = Optional<paymentAttributes, paymentOptionalAttributes>;

export class payment extends Model<paymentAttributes, paymentCreationAttributes> implements paymentAttributes {
  id!: string;
  voucher_no!: number;
  type!: string;
  cheque_no?: string;
  dd_no?: string;
  amount?: number;
  date?: string;
  bank_id!: string;
  account_id!: string;

  // payment belongsTo account via account_id
  account!: account;
  getAccount!: Sequelize.BelongsToGetAssociationMixin<account>;
  setAccount!: Sequelize.BelongsToSetAssociationMixin<account, accountId>;
  createAccount!: Sequelize.BelongsToCreateAssociationMixin<account>;
  // payment belongsTo bank via bank_id
  bank!: bank;
  getBank!: Sequelize.BelongsToGetAssociationMixin<bank>;
  setBank!: Sequelize.BelongsToSetAssociationMixin<bank, bankId>;
  createBank!: Sequelize.BelongsToCreateAssociationMixin<bank>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment {
    return payment.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    voucher_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    cheque_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dd_no: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    bank_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'bank',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'account',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'payment',
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
        name: "account_id",
        using: "BTREE",
        fields: [
          { name: "account_id" },
        ]
      },
      {
        name: "bank_id",
        using: "BTREE",
        fields: [
          { name: "bank_id" },
        ]
      },
    ]
  });
  }
}
