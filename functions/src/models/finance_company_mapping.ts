import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface finance_company_mappingAttributes {
  idfinancecompany?: number;
  id?: string;
}

export type finance_company_mappingPk = "id";
export type finance_company_mappingId = finance_company_mapping[finance_company_mappingPk];
export type finance_company_mappingOptionalAttributes = "idfinancecompany" | "id";
export type finance_company_mappingCreationAttributes = Optional<finance_company_mappingAttributes, finance_company_mappingOptionalAttributes>;

export class finance_company_mapping extends Model<finance_company_mappingAttributes, finance_company_mappingCreationAttributes> implements finance_company_mappingAttributes {
  idfinancecompany?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof finance_company_mapping {
    return finance_company_mapping.init({
    idfinancecompany: {
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
    tableName: 'finance_company_mapping',
    timestamps: false
  });
  }
}
