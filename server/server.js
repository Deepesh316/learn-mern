import express from "express";
import path from "path";
import { MongoClient } from "mongodb";
import compile from "./devBundle"; // needed only in dev mode
import template from "../template";

const CURRENT_WORKING_DIR = process.cwd();
const dbConnUrl =
  process.env.MONGO_DB_URI || "mongodb://localhost:27017/learnmern";
const app = express();
compile(app);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
app.get("/", (req, res) => {
  res.status(200).send(template());
});

MongoClient.connect(dbConnUrl, (err, db) => {
  console.log("Successfully connected to Mongodb server");
  // db.close();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
