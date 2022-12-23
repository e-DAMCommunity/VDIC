import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import env from "dotenv";
import mongodbConnection from "./mongoDB/mongoConnect.js";
import mongoose from "mongoose";
import userRouters from "./routes/auth.js";
const app = express();
env.config();
const port = process.env.PORT;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", userRouters);
app.use(cors());
mongoose.set("strictQuery", false);
mongodbConnection();
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
