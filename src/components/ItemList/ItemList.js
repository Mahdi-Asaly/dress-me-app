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
    console.log("handling colors" + value);
    setAppend(true);
  };

  function sizeHandler(value) {
    store.setSize(value);
    setPopUp(true);
  }

  function modalHandler(e) {
    setPopUp(false);
    console.log("adding item..");
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
