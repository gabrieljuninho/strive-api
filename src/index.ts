import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

const app: Application = express();

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: Number = Number(process.env.PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
