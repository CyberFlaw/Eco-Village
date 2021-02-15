import React from "react";
import { Card } from "@material-ui/core";
import Headder from "../Components/Appbar";

function CropDetails() {
  return (
    <div>
      <Headder />
      <Card>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: 32 }}>Tomato</p>
          <a href="/crop/Tomato/Planting"> Planting Operation</a>
          <a href="/crop/Tomato/Detail">Variety Detail</a>
          <a href="/crop/Tomato/Fertilizer">Fertilizer Information</a>
        </div>
      </Card>
    </div>
  );
}

export default CropDetails;
