const monoose = require("mongoose");

const dataModel = monoose.Schema({
  name: {
    type: String,
    max: 50,
  },
  email: {
    type: String,
    max: 225,
  },
  phonenumber: {
    type: String,
    max: 10,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  farmerlocation: {
    type: String,
  },
  fieldlocation:{
      type:String,
  },
  aadharnumber: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = monoose.model("FarmerModel", dataModel);
