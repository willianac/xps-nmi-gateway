import express from "express";
import { TransactionPayload } from "./types/TransactionPayload.js";
import { handleTransaction } from "./handleTransaction.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from the server!");
});

router.post("/transaction", async (req, res) => {
  try {
    const transactionPayload = req.body as TransactionPayload;
    const result = await handleTransaction(transactionPayload);
    
    if(result.response === "1") {
      return res.status(200).json({
        code: result.response,
        text: result.responsetext
      })
    }

    if(result.response === "2") {
      return res.status(400).send({
        code: result.response,
        text: result.responsetext
      });
    }

    if(result.response === "3") {
      throw new Error("Error in transaction data or system error")
    }
  } catch (error) {
    if(error instanceof Error) {
      console.log(error.message)
      return res.status(500).send(error.message)
    }
    res.status(500).send("UNEXPECTED ERROR")
  }
});

export default router;