import { makeAutoObservable } from "mobx";
import { toJS } from "mobx";

class Store {
  data = []; //all the data which received from the API.
  id = "";
  type = "";
  name = "";
  color = "";
  size = "";
  brand = "";
  steps = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setSteps = (value) => {
    this.steps = value;
  };
  setSize = (size) => {
    this.size = size;
  };
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
  getPants() {
    return this.data.filter((x) => x.type === "pants");
  }
  getTShirts() {
    return this.data.filter((x) => x.type === "shirt");
  }
  getShoesByName() {
    const _shoes = this.getShoes();
    const names = _shoes.map((x) => {
      return x.id + ";" + x.name;
    });
    return names;
  }
  setData(data) {
    this.data = data;
  }
  getItemById(id) {
    const _data = toJS(this.data);
    const parsedData = JSON.parse(JSON.stringify(_data));
    return parsedData.filter((x) => x.id == id);
  }
}

const store = new Store();
fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms")
  .then((response) => response.json())
  .then((data) => {
    store.setData(data.results);
  });
export default store;
