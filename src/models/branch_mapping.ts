import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface branch_mappingAttributes {
  idbranch?: number;
  id?: string;
}

export type branch_mappingPk = "id";
export type branch_mappingId = branch_mapping[branch_mappingPk];
export type branch_mappingOptionalAttributes = "idbranch" | "id";
export type branch_mappingCreationAttributes = Optional<branch_mappingAttributes, branch_mappingOptionalAttributes>;

export class branch_mapping extends Model<branch_mappingAttributes, branch_mappingCreationAttributes> implements branch_mappingAttributes {
  idbranch?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof branch_mapping {
    return branch_mapping.init({
    idbranch: {
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
    tableName: 'branch_mapping',
    timestamps: false
  });
  }
}
