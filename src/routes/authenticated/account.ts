import { Router } from "express";

const router = Router();

router.route("/:accountId").get((req, res) => {
  res.send(`get accountId: ${req.params.accountId}`);
});

export default router;
