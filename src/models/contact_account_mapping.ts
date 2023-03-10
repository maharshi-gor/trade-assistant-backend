import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface contact_account_mappingAttributes {
  idcontact?: number;
  id?: string;
}

export type contact_account_mappingPk = "id";
export type contact_account_mappingId = contact_account_mapping[contact_account_mappingPk];
export type contact_account_mappingOptionalAttributes = "idcontact" | "id";
export type contact_account_mappingCreationAttributes = Optional<contact_account_mappingAttributes, contact_account_mappingOptionalAttributes>;

export class contact_account_mapping extends Model<contact_account_mappingAttributes, contact_account_mappingCreationAttributes> implements contact_account_mappingAttributes {
  idcontact?: number;
  id?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof contact_account_mapping {
    return contact_account_mapping.init({
    idcontact: {
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
    tableName: 'contact_account_mapping',
    timestamps: false
  });
  }
}
