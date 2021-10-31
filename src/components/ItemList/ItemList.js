import React, { useState } from "react";
import "./ItemList.css";
import Button from "../Button/Button";
import store from "../Store/Store";

export default function ItemList(props) {
  const [append, setAppend] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const handleColors = (value) => {
    console.log("handling colors" + value);
    setAppend(true);
  };
  function sizeHandler(value) {
    store.setSize(value);
    //now you should open popup.
  }
  return (
    <div className="items___content">
      <div className="item___container">
        <div className="item___colors___container">
          {store.getItemById(props.id).map((x) => (
            <div className="item___colors">
              <h1>{x.brand} </h1>
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
      </div>
    </div>
  );
}
