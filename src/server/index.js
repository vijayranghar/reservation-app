const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const postRoute = require("./routes/posts");

const app = express();

app.use(cors());

//parse incoming request.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/post", postRoute);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("connected to db");
  }
);

console.log(mongoose.connection.readyState);

app.get("*", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(process.env.PORT || 8888, () => {
  console.log(`server listening on port ${process.env.PORT || 8888}`);
});
