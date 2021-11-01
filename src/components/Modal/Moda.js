import React from "react";
import "./Modal.css";
export default function Modal(props) {
  function ModalHandler() {
    return props.onClose();
  }
  function closeHandler() {
    return props.onModalClose();
  }

  return (
    <div className="modal">
      <div className="modal-main">
        <div className="modal-title">
          <h1>מה לעשות?</h1>
        </div>
        <div className="modal-content">{props.text}</div>
        <div className="action___handler">
          <div className="button___handler">
            <button type="button" onClick={ModalHandler}>
              <h2>כן</h2>
            </button>
            <button type="button" onClick={closeHandler}>
              <h2>לא</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
