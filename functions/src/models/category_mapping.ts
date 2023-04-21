import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface category_mappingAttributes {
  idcategory?: number;
  id?: string;
}

export type category_mappingPk = "id";
export type category_mappingId = category_mapping[category_mappingPk];
export type category_mappingOptionalAttributes = "idcategory" | "id";
export type category_mappingCreationAttributes = Optional<category_mappingAttributes, category_mappingOptionalAttributes>;

export class category_mapping extends Model<category_mappingAttributes, category_mappingCreationAttributes> implements category_mappingAttributes {
  idcategory?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof category_mapping {
    return category_mapping.init({
    idcategory: {
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
    tableName: 'category_mapping',
    timestamps: false
  });
  }
}
