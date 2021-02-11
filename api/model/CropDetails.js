const monoose = require("mongoose");

const dataModel = monoose.Schema({
  productname: {
    type: String,
    max: 50,
  },
  quantity: {
      type: Number,
    },
    startingprice: {
        type: Number,
    },
    endingprice: {
        type: Number,
    },
    expectedharvest: { type: Date },

    image: {
        type: String,
    },
    description: {
      type: String,
      max: 225,
    },
});

module.exports = monoose.model("CropDetailModel", dataModel);
