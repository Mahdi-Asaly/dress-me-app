import React from "react";
import store from "../Store/Store";
import "./Shoes.css";
import ItemList from "../ItemList/ItemList";
import { observer } from "mobx-react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Shoes = () => {
  function onSelect(e) {
    store.setName(e.value);
    store.setId(e.value.split(";")[0]);
  }
  return (
    <div className="main__shoes">
      <div className="shoes___title">
        <h2>בחירת נעליים</h2>
      </div>
      <div className="shoes___amount">
        נמצאו {store.getShoes().length} פרטים לרשותך
      </div>
      <div className="shoes___container">
        <div className="shoes____dropsdown">
          <Dropdown
            options={[...store.getShoesByName()]}
            onChange={onSelect}
            placeholder="אנא בחר מוצר"
          />
        </div>
        <div className="shoes____container">
          {!store.name == "" ? (
            <div>
              <ItemList id={store.id} item={store.name} items={store.data} />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default observer(Shoes);
