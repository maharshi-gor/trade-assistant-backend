import { Router } from "express";
import util from "../../services/util/util";
import { UtilType } from "../../dto/util/util-dto";

const router = Router();

router.route("/:utilType/:id").get(async (req, res) => {
  res.send(
    await util.fetchUtil(req.params.utilType as UtilType, req.params.id)
  );
});

export default router;
