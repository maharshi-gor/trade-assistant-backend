import { Router } from "express";

const router = Router();

import account from "./authenticated/account";
import util from "./authenticated/util";

router.use("/account", account);
router.use("/util", util);

export default router;
