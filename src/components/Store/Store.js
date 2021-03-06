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
  cookie = false;
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
    this.fetchCookies();
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
  setSteps() {
    if (this.name != "") {
      this.steps += 1;
    } else if (this.pantName != "") {
      this.steps += 1;
    } else if (this.shirtName != "") {
      this.steps += 1;
    }
    return this.steps;
  }

  clearAll() {
    this.id = "";
    this.type = "";
    this.name = "";
    this.color = "";
    this.size = "";
    this.brand = "";
    this.steps = 0;
    //this.cookie = false;
    this.pantName = "";
    this.pantId = "";
    this.pantColor = "";
    this.pantSize = "";
    this.pantType = "";
    this.pantStep = 0;
    this.pantBrand = "";

    this.shirtName = "";
    this.shirtId = "";
    this.shirtColor = "";
    this.shirtSize = "";
    this.shirtType = "";
    this.shirtStep = 0;
    this.shirtBrand = "";
  }
  setData(data) {
    this.data = data;
  }
  getItemById(id) {
    const _data = toJS(this.data);
    const parsedData = JSON.parse(JSON.stringify(_data));
    return parsedData.filter((x) => x.id == id);
  }
  fetchCookies() {
    //shoes cookies
    if (localStorage.getItem("shoes_id")) {
      this.setId(localStorage.getItem("shoes_id"));
      this.cookie = true;
    }
    if (localStorage.getItem("shoes_name")) {
      this.setName(localStorage.getItem("shoes_name"));
      this.cookie = true;
    }
    if (localStorage.getItem("shoes_color")) {
      this.setColor(localStorage.getItem("shoes_color"));
      this.cookie = true;
    }
    if (localStorage.getItem("shoes_size")) {
      this.setSize(localStorage.getItem("shoes_size"));
      this.cookie = true;
    }
    //pants cookies
    if (localStorage.getItem("pants_id")) {
      this.setPantId(localStorage.getItem("pants_id"));
      this.cookie = true;
    }
    if (localStorage.getItem("pants_name")) {
      this.setPantName(localStorage.getItem("pants_name"));
      this.cookie = true;
    }
    if (localStorage.getItem("pants_color")) {
      this.setPantColor(localStorage.getItem("pants_color"));
      this.cookie = true;
    }
    if (localStorage.getItem("pants_size")) {
      this.setPantSize(localStorage.getItem("pants_size"));
      this.cookie = true;
    }
    //shirts cookies
    if (localStorage.getItem("shirts_id")) {
      this.setShirtId(localStorage.getItem("shirts_id"));
      this.cookie = true;
    }
    if (localStorage.getItem("shirts_name")) {
      this.setShirtName(localStorage.getItem("shirts_name"));
      this.cookie = true;
    }
    if (localStorage.getItem("shirts_color")) {
      this.setShirtColor(localStorage.getItem("shirts_color"));
      this.cookie = true;
    }
    if (localStorage.getItem("shirts_size")) {
      this.setShirtSize(localStorage.getItem("shirts_size"));
      this.cookie = true;
    }
  }
}

const store = new Store();
fetch("http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms")
  .then((response) => response.json())
  .then((data) => {
    store.setData(data.results);
  });
export default store;
