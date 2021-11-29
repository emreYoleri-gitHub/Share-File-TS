import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./config/db";

dotenv.config();

ConnectDB();

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
