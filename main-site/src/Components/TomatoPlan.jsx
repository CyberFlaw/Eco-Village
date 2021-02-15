import React from "react";
import { Card } from "@material-ui/core";
import Headder from "./Appbar";

function TomatoPlan(props) {
  return (
    <div>
      <Headder />
      <Card>
        <p>
          Tomato is propagated through seed the recommended seed rate is 160
          gram/acre. The best season for planting is October-November. The land
          is prepared well by thorough ploughing or digging. Line or dolomite
          @1-3kg/cent has to be applied depending on soil acidity. This should
          be followed by adding organic manure @ 90 kg/cent. The planting is
          done in raised beds during rainy season and in trenches during summer
          season. the recommended spacing is 60cm × 60 cm. Seeds are sown in
          nursery and one month old seedlings are transplanted to the main
          field. Transplanted seedlings are given temporary shade for three to
          four days during hot days. Apply recommended basal dose of fertilizers
          at the time of planting. A time lag of 10 days should be given between
          application of lime and fertilizers
        </p>
      </Card>
    </div>
  );
}

export default TomatoPlan;
