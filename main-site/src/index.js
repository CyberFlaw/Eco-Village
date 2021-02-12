import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route } from "react-router-dom";

import Preorder from "./Containers/Perorder";
import CropAdd from "./Containers/CropAdd";
import Login from "./Containers/Login";
import CurrentPrice from "./Containers/CurrentPrice";
import ContactUs from "./Containers/ContactUs";
import Video from "./Containers/Video";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/preorder" component={Preorder} />
      <Route exact path="/sellercart" component={CropAdd} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/prices/today" component={CurrentPrice} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/videos" component={Video} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
