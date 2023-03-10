import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sub_category_mappingAttributes {
  idsubcategory?: number;
  id?: string;
}

export type sub_category_mappingPk = "id";
export type sub_category_mappingId = sub_category_mapping[sub_category_mappingPk];
export type sub_category_mappingOptionalAttributes = "idsubcategory" | "id";
export type sub_category_mappingCreationAttributes = Optional<sub_category_mappingAttributes, sub_category_mappingOptionalAttributes>;

export class sub_category_mapping extends Model<sub_category_mappingAttributes, sub_category_mappingCreationAttributes> implements sub_category_mappingAttributes {
  idsubcategory?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sub_category_mapping {
    return sub_category_mapping.init({
    idsubcategory: {
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
    tableName: 'sub_category_mapping',
    timestamps: false
  });
  }
}
