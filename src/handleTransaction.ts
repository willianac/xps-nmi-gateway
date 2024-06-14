import fetch from "node-fetch";
import { TransactionPayload } from "./types/TransactionPayload.js";

export async function handleTransaction(payload: TransactionPayload) {
  try {
    const security_key = process.env.NMI_SECURITY_KEY
    const encodedParams = new URLSearchParams();

    encodedParams.set('amount', payload.amount.toString());
    encodedParams.set('security_key', security_key!)
    encodedParams.set('payment_token', payload.payment_token)
    encodedParams.set('type', 'sale');
    encodedParams.set('first_name', payload.first_name)
    
    const res = await fetch(process.env.NMI_API_URL as string, {
      headers: {
        accept: 'application/x-www-form-urlencoded',
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      body: encodedParams
    })
    const str = await res.text()
    console.log("STRING RESPONSE IS: ")
    console.log(str)
  } catch (error) {
    return error
  }
}