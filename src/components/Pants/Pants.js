import React from "react";
import store from "../Store/Store";
import { observer } from "mobx-react";
import ItemList from "../ItemList/ItemList";
import Dropdown from "react-dropdown";

const Pants = () => {
  function onSelect(e) {
    store.setPantName(e.value);
    store.setPantId(e.value.split(";")[0]);
  }
  return (
    <div className="main__shoes">
      <div className="shoes___title">
        <h2>בחירת מכנסיים</h2>
      </div>
      <div className="shoes___amount">
        נמצאו {store.getPants().length} פרטים לרשותך
      </div>
      <div className="shoes___main___container">
        <div className="shoes____dropsdown">
          <Dropdown
            options={[...store.getPantsByName()]}
            onChange={onSelect}
            placeholder="אנא בחר מוצר"
          />
        </div>
        <div className="shoes____container">
          <div className="shoes____details">
            {!store.pantName == "" ? (
              <div>
                <ItemList
                  type={"pants"}
                  id={store.pantId}
                  item={store.pantName}
                  items={store.data}
                />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(Pants);
