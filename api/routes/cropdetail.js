const express = require("express");
const CropDetail = require("../model/CropDetails");

const router = express.Router();

router.get("/", (res) => {
    res.send("Crop Detail Routre!");
  });

  router.post("/shop", async (req, res) => {
      // if (error) {
      //   res.status(400);
      //   res.send(error);
      // } else {
        
        const cropdetail = new CropDetail({
          productname:req.body.productname,
          quantity: req.body.quantity,
          startingprice: req.body.startingprice,
          endingprice: req.body.endingprice,
          description: req.body.description,
          image: req.body.image
        });
        try {
          const saveCrop = await cropdetail.save();
          res.status(200);
          console.log("Success\n" + res.body);
          res.send(`Request Successfull... ${saveCrop._id}`);
        } catch (err) {
          console.log(err);
          res.status(400);
          res.send("An error popped up... ");
        }
       
  });
  
module.exports = router;
  

