import { makeAutoObservable } from "mobx";

class Store {
  data = []; //all the data which received from the API.
  id;
  type;
  name;
  color;
  size;
  brand;
  steps = 0;
  constructor() {
    console.log("constructor");
    makeAutoObservable(this);
  }

  setType = (type) => {
    this.type = type;
  };
  setName = (name) => {
    this.name = name;
  };
  setBrand = (brand) => {
    this.brand = brand;
  };
  setColor = (color) => {
    this.color = color;
  };
  setId = (id) => {
    this.id = id;
  };
  getShoes() {
    return this.data.filter((x) => x.type === "shoes");
  }
  setData(data) {
    this.data = data;
  }
}

const store = new Store();
fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms")
  .then((response) => response.json())
  .then((data) => {
    store.setData(data.results);
  });
export default store;
