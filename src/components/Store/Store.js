import React from "react";
import { makeAutoObservable } from "mobx";

class Store {
  data = [];
  steps = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setData = (data) => {
    this.data = data;
  };
  getSteps() {
    return this.steps;
  }
  getShoes() {
    return this.data.filter((x) => x.type === "shoes");
  }
}

export default new Store();
