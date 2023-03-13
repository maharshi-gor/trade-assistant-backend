import { Request, Router } from "express";
import CustomRequest from "../../base/CustomRequest";
import AccountDto from "../../dto/account/account-dto";
import account from "../../services/account/account";

const router = Router();

router.route("/:accountId").get((req, res) => {
  res.send(`get accountId: ${req.params.accountId}`);
});

router.route("/").post(async (req: CustomRequest<AccountDto>, res) => {
  res.send(await account.saveAccount(req.body));
});

export default router;
