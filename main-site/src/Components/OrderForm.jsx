import React, { useState } from "react";
import { Card, TextField, Button, makeStyles } from "@material-ui/core";
// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import ShopImage from "../assets/shop.jpg";

function OrderForm() {
  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

  // const [startDate, setStartDate] = useState(new Date());

  const classes = useStyles();
  return (
    <Card
      style={{
        height: "80%",
        width: "75%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontFamily: "comic-sans", fontSize: 36, fontWeight: 500 }}>
        Pre-Order Page
      </h2>

      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "spaced-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          id="standard-basic"
          label="Product Name"
          style={{ marginBottom: 10 }}
        />
        <TextField
          id="standard-basic"
          label="Quantity"
          type="number"
          style={{ marginBottom: 10 }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Starting Price"
            type="number"
            style={{ marginRight: 7.5, width: "45%" }}
          />
          <TextField
            id="standard-basic"
            label="Maximum Price"
            type="number"
            style={{ marginLeft: 7.5, width: "45%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3 style={{ fontWeight: 500, fontSize: 16, margin: 15 }}>
            Estimated harvest
          </h3>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </div>
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          style={{ width: "80%" }}
        />
        <Button variant="contained" color="secondary" style={{ margin: 20 }}>
          Submit
        </Button>
      </div>
    </Card>
  );
}

export default OrderForm;
