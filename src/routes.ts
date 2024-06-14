import express from "express";
import { TransactionPayload } from "./types/TransactionPayload.js";
import { handleTransaction } from "./handleTransaction.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the server!");
});

router.post("/transaction", async (req, res) => {
  const transactionPayload = req.body as TransactionPayload;
  const result = await handleTransaction(transactionPayload);
  console.log(result);
  res.json(result)
});

export default router;