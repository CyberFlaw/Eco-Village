const monoose = require("mongoose");

const dataModel = monoose.Schema({
  name: {
    type: String,
    max: 50,
  },
  keralawp: {
    type: Number,
  },
  keralarp: {
    type: Number,
  },
  outkeralawp: {
    type: Number,
  },
  outkeralarp: {
    type: Number,
  },
});

module.exports = monoose.model("PriceModel", dataModel);
