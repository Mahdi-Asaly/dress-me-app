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

  pantName = "";
  pantId = "";
  pantColor = "";
  pantSize = "";
  pantType = "";
  pantStep = 0;
  pantBrand = "";

  shirtName = "";
  shirtId = "";
  shirtColor = "";
  shirtSize = "";
  shirtType = "";
  shirtStep = 0;
  shirtBrand = "";

  constructor() {
    makeAutoObservable(this);
  }
  ///////shirt///////

  setShirtSize = (size) => {
    this.shirtSize = size;
  };
  setShirtType = (type) => {
    this.shirtType = type;
  };
  setShirtName = (name) => {
    this.shirtName = name;
  };
  setShirtBrand = (brand) => {
    this.shirtBrand = brand;
  };
  setShirtColor = (color) => {
    this.shirtColor = color;
  };
  setShirtId = (id) => {
    this.shirtId = id;
  };

  ///////pants///////

  setPantSize = (size) => {
    this.pantSize = size;
  };
  setPantType = (type) => {
    this.pantType = type;
  };
  setPantName = (name) => {
    this.pantName = name;
  };
  setPantBrand = (brand) => {
    this.brand = brand;
  };
  setPantColor = (color) => {
    this.pantColor = color;
  };
  setPantId = (id) => {
    this.pantId = id;
  };

  ///////Shoes///////

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
  getShirtsByName() {
    const _shirts = this.getTShirts();
    const names = _shirts.map((x) => {
      return x.id + ";" + x.name;
    });
    return names;
  }
  getPantsByName() {
    const _pants = this.getPants();
    const names = _pants.map((x) => {
      return x.id + ";" + x.name;
    });
    return names;
  }
  getSteps() {
    let counter = 0;
    if (this.name != "") {
      counter += 1;
    } else if (this.pantName != "") {
      counter += 1;
    } else if (this.shirtName != "") {
      counter += 1;
    }
    this.steps = counter;
    return this.steps;
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
