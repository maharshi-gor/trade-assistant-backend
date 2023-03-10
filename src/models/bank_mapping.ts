import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface bank_mappingAttributes {
  idbank?: number;
  id?: string;
}

export type bank_mappingPk = "id";
export type bank_mappingId = bank_mapping[bank_mappingPk];
export type bank_mappingOptionalAttributes = "idbank" | "id";
export type bank_mappingCreationAttributes = Optional<bank_mappingAttributes, bank_mappingOptionalAttributes>;

export class bank_mapping extends Model<bank_mappingAttributes, bank_mappingCreationAttributes> implements bank_mappingAttributes {
  idbank?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof bank_mapping {
    return bank_mapping.init({
    idbank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'bank_mapping',
    timestamps: false
  });
  }
}
