import React from "react";
import Headder from "../Components/Appbar";
import OrderForm from "../Components/OrderForm";

import cover from "../assets/1.jpeg";

function Perorder() {
  return (
    <div>
      <Headder />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
          height: "93vh",
        }}
      >
        <OrderForm style={{ marginTop: 30 }} />
      </div>
    </div>
  );
}

export default Perorder;
