const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express("");

mongoose.connect(
  "mongodb+srv://vijay:vijays9991@reservation-app.usi4n.mongodb.net/reservation-app?retryWrites=true&w=majority",
  () => {
    console.log("connected to db");
  }
);
app.get("*", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(process.env.PORT || 8888, () => {
  console.log(`server listening on port ${process.env.PORT || 8888}`);
});
