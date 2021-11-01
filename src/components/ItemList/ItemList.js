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
    store.setSteps();
  }

  return (
    <div className="item___container">
      <div className="shoes___image">
        <div class="left">
          <img
            src={"https://www.dropbox.com/s/e928cht0h5crcn4/shoe.png?raw=1"}
            alt="Logo"
          />
        </div>
      </div>
      {popUp == true ? (
        <Modal
          text={"האם אתה רוצה להוסיף את הפריט לרשימה"}
          onClose={modalHandler}
        />
      ) : (
        <div></div>
      )}
      {store.getItemById(props.id).map((x) => (
        <div className="item___append___container">
          <div className="item___brand">
            <h1>מותג</h1>
            <h2>{x.brand}</h2>
          </div>
          <div className="brand___name">
            <h1>שם המוצר</h1>
            <h2>{x.name}</h2>
          </div>
          <hr></hr>
          <h2 id="color___selection">אנא בחר צבע</h2>
          <div className="item___colors">
            {x.colors.map((color) => (
              <Button
                title={color}
                type={"colorsClass"}
                itemColor={handleColors}
              />
            ))}
          </div>

          {append === true ? (
            <div>
              אנא בחר מידה
              <div className="item___sizes">
                {x.sizes.map((size) => (
                  <Button
                    title={size}
                    type={"sizeHandle"}
                    onSizeClick={sizeHandler}
                  />
                ))}
              </div>
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
