const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB connection secured !!!");
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();

const port = 1234;

app.listen(port, () => {
  console.log("The server is running !!!!");
});
