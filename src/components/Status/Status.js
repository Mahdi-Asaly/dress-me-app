import { observer } from "mobx-react";
import React from "react";
import "./Status.css";
import store from "../Store/Store";
const Status = () => {
  //calculate sets(Pants) choosen by the user
  const pantsCalc = () => {
    let pants = 0;
    if (store.pantName.split() != "") {
      pants += 1;
    }

    if (store.pantSize.split() != "") {
      pants += 1;
    }
    if (store.pantColor.split() != "") {
      pants += 1;
    }
    return pants + "/3";
  };

  //calculate sets(Shirts) choosen by the user
  const shirtsCalc = () => {
    let shirts = 0;
    if (store.shirtName.split() != "") {
      shirts += 1;
    }
    if (store.shirtSize.split() != "") {
      shirts += 1;
    }
    if (store.shirtColor.split() != "") {
      shirts += 1;
    }
    return shirts + "/3";
  };

  //calculate sets(Shoes) choosen by the user
  const shoesCalc = () => {
    let shoes = 0;
    if (store.name.split() != "") {
      shoes += 1;
    }
    if (store.color.split() != "") {
      shoes += 1;
    }
    if (store.size.split() != "") {
      shoes += 1;
    }

    return shoes + "/3";
  };
  return (
    <div className="status____container">
      <div className="status___shoes">{shoesCalc()} נעליים</div>
      <div className="status___pants">{pantsCalc()} מכנסיים</div>
      <div className="status___shirts"> {shirtsCalc()} חולצות</div>
    </div>
  );
};

export default observer(Status);
