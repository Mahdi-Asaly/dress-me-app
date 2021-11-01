import React from "react";
import "./Button.css";
export default function Button(props) {
  //styling the component depends on the user choose
  function handleClick(e) {
    if (props.type === "colorsClass") {
      props.itemColor(props.title);
      e.target.style.backgroundColor = "green";
    } else if (props.type === "sizeHandle") {
      onSizeClick(e);
    }
  }
  function onSizeClick(e) {
    props.onSizeClick(e.target.textContent);
  }
  return (
    <div className="btn___title">
      <button
        className={`button-32 ${props.type}`}
        style={{ backgroundColor: `${props.title}` }}
        role="button"
        onClick={handleClick}
        disabled={props.status}
      >
        {props.title}
      </button>
    </div>
  );
}
