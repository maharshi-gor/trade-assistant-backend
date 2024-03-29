import { bank } from "../../models/bank";
import { branch } from "../../models/branch";
import { category } from "../../models/category";
import { sub_category } from "../../models/sub_category";
import { finance_company } from "../../models/finance_company";
import { company } from "../../models/company";
import { tax_category } from "../../models/tax_category";
import { UtilDto, UtilType } from "../../dto/util/util-dto";
import { populateObject } from "../../helper/object-handler";
import { Op } from "sequelize";
import { salesman } from "../../models/salesman";

const fetchUtil = async (utilType: UtilType, id: string): Promise<UtilDto> => {
  let result = {} as any;
  switch (utilType) {
    case UtilType.BANK: {
      result = await bank.findByPk(id);
      break;
    }
    case UtilType.BRANCH: {
      result = await branch.findByPk(id);
      break;
    }
    case UtilType.CATEGORY: {
      result = await category.findByPk(id);
      break;
    }
    case UtilType.SUB_CATEGORY: {
      result = await sub_category.findByPk(id);
      break;
    }
    case UtilType.FINANCIAL_SERVICE: {
      result = await finance_company.findByPk(id);
      break;
    }
    case UtilType.COMPANY: {
      result = await company.findByPk(id);
      break;
    }
    case UtilType.SALES_PERSON: {
      result = await salesman.findByPk(id);
      break;
    }
    case UtilType.TAX_DETAILS: {
      result = await tax_category.findByPk(id);
      break;
    }
  }
  result = populateObject(result.dataValues, UtilDto);
  result.type = utilType;
  return result;
};

const searchUtil = async (
  utilType: UtilType,
  value: string
): Promise<UtilDto[]> => {
  let result = [] as any;
  switch (utilType) {
    case UtilType.BANK: {
      result = await bank.findAll({
        attributes: ["id", "name"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.BRANCH: {
      result = await branch.findAll({
        attributes: ["id", "name", "code"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.CATEGORY: {
      result = await category.findAll({
        attributes: ["id", "name"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.SUB_CATEGORY: {
      result = await sub_category.findAll({
        attributes: ["id", "name"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.FINANCIAL_SERVICE: {
      result = await finance_company.findAll({
        attributes: ["id", "name", "contact"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.COMPANY: {
      result = await company.findAll({
        attributes: ["id", "name", "contact"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.SALES_PERSON: {
      result = await salesman.findAll({
        attributes: ["id", "name", "contact"],
        where: {
          name: {
            [Op.like]: `%${value}%`
          }
        },
        limit: 8
      });
      break;
    }
    case UtilType.TAX_DETAILS: {
      result = await tax_category.findAll();
      break;
    }
  }

  result = result.map((el: any) => populateObject(el.dataValues, UtilDto));

  return result;
};

export default {
  fetchUtil,
  searchUtil
};
