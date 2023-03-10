import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface company_mappingAttributes {
  idcompany?: number;
  id?: string;
}

export type company_mappingPk = "id";
export type company_mappingId = company_mapping[company_mappingPk];
export type company_mappingOptionalAttributes = "idcompany" | "id";
export type company_mappingCreationAttributes = Optional<company_mappingAttributes, company_mappingOptionalAttributes>;

export class company_mapping extends Model<company_mappingAttributes, company_mappingCreationAttributes> implements company_mappingAttributes {
  idcompany?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof company_mapping {
    return company_mapping.init({
    idcompany: {
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
    tableName: 'company_mapping',
    timestamps: false
  });
  }
}
