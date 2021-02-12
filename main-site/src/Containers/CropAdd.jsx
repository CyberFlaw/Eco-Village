import React from "react";
import { Fab } from "@material-ui/core";
import Headder from "../Components/Appbar";

function CropAdd() {
  return (
    <div>
      <Headder />
      <div style={{ height: "93vh", width: "100%" }}>
        <Fab
          color="secondary"
          aria-label="add"
          style={{ position: "fixed", bottom: 60, right: 50 }}
        >
          <i
            class="fa fa-plus"
            aria-hidden="true"
            style={{ fontWeight: 500 }}
          ></i>
        </Fab>
      </div>
    </div>
  );
}

export default CropAdd;
