import { Button } from "@material-ui/core";
import React from "react";
import Headder from "../Components/Appbar";

function ContactUs() {
  return (
    <div>
      <Headder />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height: "50vh",
        }}
      >
        <h3
          style={{
            fontWeight: 300,
            fontSize: 36,
            fontFamily: "comic-sans",
            marginLeft: 30,
            alignSelf: "center",
          }}
        >
          For more detailed equires give us a call.
        </h3>
        <Button variant="contained" color="secondary">
          Call Us
        </Button>
      </div>
    </div>
  );
}

export default ContactUs;
