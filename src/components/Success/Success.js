import { observer } from "mobx-react";
import React from "react";
import "./Success.css";
import store from "../Store/Store";
const Success = () => {
  return (
    <div className="success___container">
      {store.shirtName && store.pantName && store.name ? (
        <div class="container">
          <h2>תודה רבה על הקניה</h2>
          <div class="table">
            <div class="table-header">
              <div class="header__item">
                <a id="name" class="filter__link">
                  שם המוצר
                </a>
              </div>
              <div class="header__item">
                <a id="wins" class="filter__link filter__link--number">
                  צבע
                </a>
              </div>
              <div class="header__item">
                <a id="draws" class="filter__link filter__link--number">
                  מידה
                </a>
              </div>
            </div>
            <div class="table-content">
              <div class="table-row">
                <div class="table-data">{store.name}</div>
                <div class="table-data">{store.color}</div>
                <div class="table-data">{store.size}</div>
              </div>
              <div class="table-row">
                <div class="table-data">{store.shirtName}</div>
                <div class="table-data">{store.shirtColor}</div>
                <div class="table-data">{store.shirtSize}</div>
              </div>
              <div class="table-row">
                <div class="table-data">{store.pantName}</div>
                <div class="table-data">{store.pantColor}</div>
                <div class="table-data">{store.pantSize}</div>
              </div>
            </div>
          </div>
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
