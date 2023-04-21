import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tax_category_mappingAttributes {
  idtaxcategory?: number;
  id?: string;
}

export type tax_category_mappingPk = "id";
export type tax_category_mappingId = tax_category_mapping[tax_category_mappingPk];
export type tax_category_mappingOptionalAttributes = "idtaxcategory" | "id";
export type tax_category_mappingCreationAttributes = Optional<tax_category_mappingAttributes, tax_category_mappingOptionalAttributes>;

export class tax_category_mapping extends Model<tax_category_mappingAttributes, tax_category_mappingCreationAttributes> implements tax_category_mappingAttributes {
  idtaxcategory?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof tax_category_mapping {
    return tax_category_mapping.init({
    idtaxcategory: {
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
    tableName: 'tax_category_mapping',
    timestamps: false
  });
  }
}
