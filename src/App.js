import "./App.css";
import React, { useState, useContext } from "react";
import Home from "./components/Home/Home";
import store from "./components/Store/Store";
import { observer } from "mobx-react";

const App = observer(() => {
  return (
    <div className="App">
      <div className="app___title">Dress Me Application</div>
      {/* setNum */}

      <Home />
    </div>
  );
});

export default App;
