const express = require("express");
const Price = require("../model/Price");

const router = express.Router();

router.get("/", (res) => {
  res.send("Current Price Routre!");
});

router.post("/today", async (req, res) => {
  const price = new Price({
    name: req.body.name,
    keralawp: req.body.keralawp,
    keralarp: req.body.keralarp,
    outkeralawp: req.body.outkeralawp,
    outkeralarp: req.body.outkeralarp,
  });
  try {
    const savePrice = await price.save();
    res.status(200);
    console.log("Success\n" + res.body);
    res.send(`Request Successfull... ${savePrice._id}`);
  } catch (err) {
    console.log(err);
    res.status(400);
    res.send("An error popped up... ");
  }
});

module.exports = router;
