import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface salesman_mappingAttributes {
  idsalesman?: number;
  id?: string;
}

export type salesman_mappingPk = "id";
export type salesman_mappingId = salesman_mapping[salesman_mappingPk];
export type salesman_mappingOptionalAttributes = "idsalesman" | "id";
export type salesman_mappingCreationAttributes = Optional<salesman_mappingAttributes, salesman_mappingOptionalAttributes>;

export class salesman_mapping extends Model<salesman_mappingAttributes, salesman_mappingCreationAttributes> implements salesman_mappingAttributes {
  idsalesman?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof salesman_mapping {
    return salesman_mapping.init({
    idsalesman: {
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
    tableName: 'salesman_mapping',
    timestamps: false
  });
  }
}
