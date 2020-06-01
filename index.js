const express = require("express");
const app = express();
const authRoute = require("./routes/auth");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.use(express.json());
app.use("/api/user", authRoute);

app.listen(4000, () => {
  console.log("Server up and running!");
});
