import React from "react";
import { Card } from "@material-ui/core";
import Headder from "./Appbar";

function TomatoDetail(props) {
  return (
    <div>
      <Headder />
      <Card style={{ height: "50vh" }}>
        <p>
          Akshaya: It is a variety released from College of Horticulture,
          Vellanikkara of KAU. It is suitable for rain shelter cultivation. It
          is high yielding indeterminate tomato variety. It has flat round
          medium sized fruits with corrugated fruit surface full stop the
          average fruit weight is 59 gram and yield is 40 t/ha rain shelter and
          32 tone/ha in open field.{" "}
        </p>
        <div></div>
        <p>
          Anagha it is a variety released from KUA,Vellanikkara. The variety is
          resistant to bacterial wilt disease.The variety is resistant to fruit
          cracking, and tolerance to leaf curl and mosaic. Fruits are reddish
          round without green shoulder. Average fruit weight is 45 g and average
          yield is 30 t/ha.
        </p>
        <div></div>
        <p>
          {" "}
          Manulekshmi : It is a variety released from ARS Mannuthy. The variety
          gas largest fruit size among the tomato and the resistant bacterial
          wilt. It has attractive oval shaped fruits. Lighth Green Man immature
          turning to uniform dark red on ripening. Average fruit size is 52-55
          gram. The potential yield is 35 tone/ha.
        </p>
        <div></div>
        <p>
          {" "}
          Manuprabha: It is a variety released from ARS Mannuthy. The variety
          has round fruit. The variety is resistant to bacterial wilt.
        </p>
        <div></div>
        <p>
          Mukthi: It is a variety released from College of Horticulture,
          vellanikkara of KAU. The variety is resistant to bacterial wilt
          disease. The duration is 95-100. Fruits are round, slightly flat at
          the ends, medium sized and light greenish in colour. Average yield is
          43.5 t/ha.
        </p>
        <div></div>
        <p>
          {" "}
          Sakthi: It is a variety released from College of Horticulture,
          Vellanikara of KAU. The variety is resistant to bacterial wilt
          disease. The duration is 115-120. Fruits are round, slightly flat at
          the ends and medium-sized. Fruit cracking is noticed on maturity. The
          average yield is 32 tone/ha.
        </p>
        <div></div>
        <p>
          {" "}
          Vellayani vijai: It is Variety released from College of Agriculture,
          Vellayani of KAU. The variety is resistant to bacterial wilt disease.
          37.3
        </p>
      </Card>
    </div>
  );
}

export default TomatoDetail;
