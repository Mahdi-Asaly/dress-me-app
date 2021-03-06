import React from "react";
import store from "../Store/Store";
import { observer } from "mobx-react";
import ItemList from "../ItemList/ItemList";
import Select from "react-select";

const TShirt = () => {
  //in order to use the above react hook , we should convert the data to corresponding api. in order to view the list in Dropdown.
  let customOptions = store.data.map((x) => {
    return { value: x.id + ";" + x.name, label: x.name };
  });

  //on user select we store the result in the store as well as in the user cookies.
  function onSelect(e) {
    store.setShirtName(e.value);
    store.setShirtId(e.value.split(";")[0]);
    localStorage.setItem("shirts_name", e.value);
    localStorage.setItem("shirts_id", e.value.split(";")[0]);
  }
  return (
    <div className="main__shoes">
      <div className="shoes___title">
        <h2>בחירת חולצה</h2>
      </div>
      <div className="shoes___amount">
        נמצאו {store.getTShirts().length} פרטים לרשותך
      </div>
      <div className="shoes___main___container">
        <div className="shoes____dropsdown">
          <Select
            placeholder="אנא בחר מוצר"
            onChange={onSelect}
            options={customOptions}
          />
        </div>
        <div className="shoes____container">
          <div className="shoes____details">
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
    </div>
  );
};
export default observer(TShirt);
