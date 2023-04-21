import { Router } from "express";

const router = Router();

import account from "./authenticated/account";

router.use("/account", account);

export default router;
