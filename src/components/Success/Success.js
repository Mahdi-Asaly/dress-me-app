import { observer } from "mobx-react";
import React from "react";
import "./Success.css";
import store from "../Store/Store";
const Success = () => {
  return (
    <div className="success___container">
      {store.shirtName && store.pantName && store.name ? (
        <div>
          <h2>Success Page!</h2>
        </div>
      ) : (
        <div className="error___404">
          <h2>ERROR: 404</h2>
          <h3>This can not be accessed.</h3>
        </div>
      )}
    </div>
  );
};

export default observer(Success);
