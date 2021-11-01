import React from "react";
import Dropdown from "react-dropdown";
import store from "../Store/Store";
import { observer } from "mobx-react";
import ItemList from "../ItemList/ItemList";

const TShirt = () => {
  function onSelect(e) {
    store.setShirtName(e.value);
    store.setShirtId(e.value.split(";")[0]);
    console.log(store.shirtName);
    console.log(store.shirtId);
  }
  return (
    <div className="main__shoes">
      <div className="shoes___title">
        <h2>בחירת חולצה</h2>
      </div>
      <div className="shoes___amount">
        נמצאו {store.getTShirts().length} פרטים לרשותך
      </div>
      <div className="shoes___container">
        <div className="shoes____dropsdown">
          <Dropdown
            options={[...store.getShirtsByName()]}
            onChange={onSelect}
            placeholder="אנא בחר מוצר"
          />
        </div>
        <div className="shoes____container">
          {!store.shirtName == "" ? (
            <div>
              <ItemList
                type={"shirts"}
                id={store.shirtId}
                item={store.shirtName}
                items={store.data}
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};
export default observer(TShirt);
