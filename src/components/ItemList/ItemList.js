import React, { useState } from "react";
import "./ItemList.css";
import Button from "../Button/Button";
import store from "../Store/Store";
import Modal from "../Modal/Moda";
import { observer } from "mobx-react";
const ItemList = (props) => {
  const [append, setAppend] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const handleColors = (value) => {
    switch (props.type) {
      case "shoes":
        store.setColor(value);
        setAppend(true);
        break;
      case "shirts":
        store.setShirtColor(value);
        setAppend(true);
        break;
      case "pants":
        store.setPantColor(value);
        setAppend(true);
        break;
      default:
    }
  };

  function sizeHandler(value) {
    switch (props.type) {
      case "shoes":
        setPopUp(true);
        store.setSize(value);
        break;
      case "shirts":
        store.setShirtSize(value);
        setPopUp(true);
        break;
      case "pants":
        setPopUp(true);
        store.setPantSize(value);
        break;
      default:
    }
  }

  function modalHandler(e) {
    setPopUp(false);
    store.setSteps(3);
  }

  return (
    <div className="item___container">
      {popUp == true ? (
        <Modal
          text={"האם אתה רוצה להוסיף את הפריט לרשימה"}
          onClose={modalHandler}
        />
      ) : (
        <div></div>
      )}
      {store.getItemById(props.id).map((x) => (
        <div className="item___colors">
          <h1>{x.id}</h1>
          <h1>{x.type}</h1>
          <h1>{x.brand}</h1>
          <h2>אנא בחר צבע</h2>
          {x.colors.map((color) => (
            <Button
              title={color}
              type={"colorsClass"}
              itemColor={handleColors}
            />
          ))}
          {append === true ? (
            <div>
              אנא בחר מידה
              {x.sizes.map((size) => (
                <Button
                  title={size}
                  type={"sizeHandle"}
                  onSizeClick={sizeHandler}
                />
              ))}
            </div>
          ) : (
            <div> </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default observer(ItemList);
