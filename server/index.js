import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import auth from "./auth/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/auth/", auth);

mongoose
  .connect(process.env.CONNECT_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the mongodb..."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, console.log("Listening to port " + port));
