import React from "react";
import "./Modal.css";
export default function Modal(props) {
  function closeHandler() {
    return props.onClose();
  }
  return (
    <div className="modal" onClick={closeHandler}>
      <div className="modal-main">
        <div className="modal-title">
          <h1>מה לעשות?</h1>
        </div>
        <div className="modal-content">{props.text}</div>
        <button type="button" onClick={closeHandler}>
          <h2>כן</h2>
        </button>
      </div>
    </div>
  );
}
