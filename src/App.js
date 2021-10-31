import "./App.css";
import React, { useState, useContext } from "react";
import Home from "./components/Home/Home";
import store from "./components/Store/Store";
import { observer } from "mobx-react";
import Bar from "./components/Bar/Bar";
import Footer from "./components/Footer/Footer";
const App = observer(() => {
  return (
    <React.Fragment>
      <Bar />
      <div className="App">
        <div className="app___container">
          <Home />
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
});

export default App;
