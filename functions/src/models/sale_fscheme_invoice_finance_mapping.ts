import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface sale_fscheme_invoice_finance_mappingAttributes {
  id?: string;
  billno?: number;
  gpcode?: number;
  year?: string;
}

export type sale_fscheme_invoice_finance_mappingPk = "id";
export type sale_fscheme_invoice_finance_mappingId = sale_fscheme_invoice_finance_mapping[sale_fscheme_invoice_finance_mappingPk];
export type sale_fscheme_invoice_finance_mappingOptionalAttributes = "id" | "billno" | "gpcode" | "year";
export type sale_fscheme_invoice_finance_mappingCreationAttributes = Optional<sale_fscheme_invoice_finance_mappingAttributes, sale_fscheme_invoice_finance_mappingOptionalAttributes>;

export class sale_fscheme_invoice_finance_mapping extends Model<sale_fscheme_invoice_finance_mappingAttributes, sale_fscheme_invoice_finance_mappingCreationAttributes> implements sale_fscheme_invoice_finance_mappingAttributes {
  id?: string;
  billno?: number;
  gpcode?: number;
  year?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof sale_fscheme_invoice_finance_mapping {
    return sale_fscheme_invoice_finance_mapping.init({
    id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      primaryKey: true
    },
    billno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gpcode: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sale_fscheme_invoice_finance_mapping',
    timestamps: false
  });
  }
}
