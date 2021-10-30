import React from "react";
import "./Button.css";
export default function Button(props) {
  return (
    <div className="btn___title">
      <button>{props.title}</button>
    </div>
  );
}
