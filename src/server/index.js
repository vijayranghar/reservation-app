const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express("");

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});

app.get("*", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(process.env.PORT || 8888, () => {
  console.log(`server listening on port ${process.env.PORT || 8888}`);
});
