export type TransactionPayload = {
  amount: number;
  first_name: string;
  last_name: string;
  address1: string;
  country: string
  state: string
  city: string
  zip: string
  type: "sale" | "auth" | "credit" | "validate" | "offline"
  payment_token: string
}