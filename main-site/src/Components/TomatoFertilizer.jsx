import React from "react";
import { Card } from "@material-ui/core";
import Headder from "./Appbar";

function TomatoFertilizer(props) {
  return (
    <div>
      <Headder />
      <Card>
        <p>
          The nutrient recommendation for Tomato is 70:40:25kg NPK/ha. The
          quantity of straight fertilizers to get the above dose is worked out
          for a cent. The fertilisers dose needed is 608 gram urea, 888 gram
          rock phosphate and 167 gram Muriate of Potash respectively for a cent.
          The fertilisers have to be applied in split doses. The first dose has
          to be applied at the time of planting. The urea, Rock phosphate,
          Muriate of Potash needed at this time is 303 gram, 888 gram and 83
          gram respectively for a cent. The second dose has to be apply in 20-30
          days after planting and the dosage is 151 gram urea, 83.5 gram Muriate
          of Potash respectively for a cent. The third dose has to be applied at
          2 months after planting. The fertilizer dose is 151 gram urea. Live or
          dolomite at 1-3 kg per cent has to be applied in acid soils two weeks
          ahead of fertilizer application. Organic manure @ 90 kg/cent is
          recommended at planting time. To get the details for an acca you need
          to multiply the values with 100.
        </p>
      </Card>
    </div>
  );
}

export default TomatoFertilizer;
