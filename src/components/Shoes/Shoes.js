import React from "react";
import store from "../Store/Store";
import { observer } from "mobx-react";
const Shoes = () => {
  return (
    <div className="main__shoes">
      <h2>--Shoes Page--</h2>
      <div>{store.getShoes().length}</div>
      {store.getShoes().map((x) => x.name)}
      {/* {Store.getData().map((x) => x.name)} */}
    </div>
  );
};
export default observer(Shoes);
