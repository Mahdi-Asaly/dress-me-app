import React from "react";
import store from "../Store/Store";
import { observer } from "mobx-react";
import ItemList from "../ItemList/ItemList";
const Pants = () => {
  return (
    <div className="main__shoes">
      <div className="shoes___title">
        <h2>בחירת חולצה</h2>
      </div>
      <div className="shoes___amount">
        נמצאו {store.getPants().length} פרטים לרשותך
      </div>
      <div className="shoes___container">
        <ItemList items={store.getPants()} />
      </div>
    </div>
  );
};
export default observer(Pants);
