import React, { useState } from "react";
import "./ItemList.css";
import Button from "../Button/Button";
import store from "../Store/Store";
import Modal from "../Modal/Moda";
import { observer } from "mobx-react";

const ItemList = (props) => {
  const [append, setAppend] = useState(false);
  const [popUp, setPopUp] = useState(false);

  //this function stores the value of colors and stores the result to the cookies.
  const handleColors = (value) => {
    switch (props.type) {
      case "shoes":
        store.setColor(value);
        localStorage.setItem("shoes_color", value);
        setAppend(true);
        break;
      case "shirts":
        store.setShirtColor(value);
        localStorage.setItem("shirts_color", value);
        setAppend(true);
        break;
      case "pants":
        store.setPantColor(value);
        localStorage.setItem("pants_color", value);
        setAppend(true);
        break;
      default:
    }
  };
  //this function stores the value of sizes and stores the result to the cookies.
  function sizeHandler(value) {
    switch (props.type) {
      case "shoes":
        setPopUp(true);
        localStorage.setItem("shoes_size", value);
        store.setSize(value);
        break;
      case "shirts":
        store.setShirtSize(value);
        localStorage.setItem("shirts_size", value);
        setPopUp(true);
        break;
      case "pants":
        setPopUp(true);
        store.setPantSize(value);
        localStorage.setItem("pants_size", value);
        break;
      default:
    }
  }
  //modal handler to close the popup and store the steps done by the user
  function modalHandler(e) {
    setPopUp(false);
    store.setSteps();
    window.location.href = "/";
  }
  function closeHandler(e) {
    setPopUp(false);
  }
  return (
    <div className="item___container">
      <div className="shoes___image">
        <div className="left">
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
          onModalClose={closeHandler}
        />
      ) : (
        <div></div>
      )}
      {store.getItemById(props.id).map((x) => (
        <div key={x.id} className="item___append___container">
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
                key={Math.random()}
                title={color}
                type={"colorsClass"}
                itemColor={handleColors}
              />
            ))}
          </div>

          {append === true ? (
            <div>
              <h2 id="size___selection">אנא בחר מידה</h2>
              <div className="item___sizes">
                {x.sizes.map((size) => (
                  <Button
                    key={Math.random()}
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
