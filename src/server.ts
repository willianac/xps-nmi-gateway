import "dotenv/config";
import express from 'express';
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(express.json())
app.use(cors())
app.use(router)

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || 'localhost';

app.listen(Number(PORT), HOST, () => {
  console.log('Server started on port ' + PORT);
});