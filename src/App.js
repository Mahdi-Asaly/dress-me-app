import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import { observer } from "mobx-react";

const App = observer(() => {
  //fetching the data once by using useEffect.
  //this function only executed once!
  //so we don't need to fetch the data again and again!
  useEffect(async function () {
    await fetch(
      "http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms"
    )
      .then((response) => response.json())
      .then((data) => {
        Store.setData(data.results);
      });
  }, []);

  return (
    <div className="App">
      <Home />

      {Store.data.map((x) => (
        <div>
          <h2>{x.id}</h2>
          <h2>{x.type}</h2>
          <h2>{x.name}</h2>
          <h2>
            Color:
            {x.colors.map((x) => (
              <div>{x}</div>
            ))}
          </h2>
          <h2>
            Sizes:
            {x.sizes.map((x) => (
              <div>{x}</div>
            ))}
          </h2>
          <h2>Brand:</h2>
          <h2>{x.brand}</h2>
        </div>
      ))}
      {/*   #Dress Component#
             Choosing Shoes
             Choosing Shoes 
             Choosing Pants 
             Choosing T-Shirt 
      */}
      {/* Success Page */}
    </div>
  );
});

export default App;
