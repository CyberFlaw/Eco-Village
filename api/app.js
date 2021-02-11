const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

const registerRoute = require("./routes/farmerauth");

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(`Something went wrong... ${err}`);
    } else {
      console.log("Connected to Farmer Database...");
    }
  }
);

app.use(express.json());

app.use("/auth", registerRoute);

app.get("/", (req, res) => {
  res.send("Api on your service...");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`An error occoured: ${err}`);
  } else {
    console.log(`Database connection started on port ${PORT}...`);
  }
});
