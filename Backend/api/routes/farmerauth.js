const express = require("express");
const Farmer = require("../model/Farmer");

const router = express.Router();

router.get("/", (res) => {
    res.send("Farmer Auth Routre!");
  });

  router.post("/register", async (req, res) => {
    const checkAccountDuplication = await Farmer.findOne({ email: req.body.email});
  
    if (checkAccountDuplication) return res.send("The email already exist...");
    else {
  
      // if (error) {
      //   res.status(400);
      //   res.send(error);
      // } else {
        
        const farmer = new Farmer({
          name: req.body.name,
          email: req.body.email,
          phonenumber: req.body.phonenumber,
          age: req.body.age,
          gender: req.body.gender,
          farmerlocation: req.body.farmerlocation,
          feildlocation: req.body.feildlocation,
          aadharnumber:req.body.aadharnumber,
          password: req.body.password,
        });
        try {
          const saveFarmer = await farmer.save();
          res.status(200);
          console.log("Success\n" + res.body);
          res.send(`Request Successfull... ${saveFarmer._id}`);
        } catch (err) {
          console.log(err);
          res.status(400);
          res.send("An error popped up... ");
        }
      
    }
  });
  
module.exports = router;
  

