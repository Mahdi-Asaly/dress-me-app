import React from "react";
import Button from "../Button/Button";
import Store from "../Store/Store";

export default function Home() {
  return (
    <div>
      <h2>Home page</h2>
      <div className="form___steps">
        Till now you've accomplished {Store.getSteps()} steps
      </div>
      <Button title={"Shoes"} />
      <Button title={"Pants"} />
      <Button title={"TShirt"} />
    </div>
  );
}
