import React from "react";

import Headders from "../Components/Appbar";
import Img from "../assets/2.png";

function CurrentPrice() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Headders />
      <div
        style={{
          height: "90vh",
          width: "100%",
          marginTop: 20,
          overflow: "hidden",
        }}
      >
        <table>
          <tr>
            <th>Vegutabale/Fruit</th>
            <th>Kerala WP</th>
            <th>Kerala RP</th>
            <th>Out of Kerala WP</th>
            <th>Out of Kerala RP</th>
          </tr>
          <tr>
            <th>Beetroot</th>
            <th>-</th>
            <th>-</th>
            <th>25</th>
            <th>35</th>
          </tr>
          <tr>
            <th>Cucumber</th>
            <th>20</th>
            <th>30</th>
            <th>16</th>
            <th>25</th>
          </tr>
          <tr>
            <th>Cabbage</th>
            <th>-</th>
            <th>-</th>
            <th>20</th>
            <th>30</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default CurrentPrice;
