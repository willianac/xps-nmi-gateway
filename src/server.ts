import "dotenv/config";
import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 3000
const HOST = process.env.HOST ?? 'localhost';

app.get('/', (req, res) => {
  res.send(`Hello from the server runnin on port ${PORT} and host ${HOST}`)
});

app.get("/test", (req, res) => {
  res.send("Respondendo com sucesso")
})

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});