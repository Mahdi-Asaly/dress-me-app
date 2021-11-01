import "./App.css";
import React, { useState, useContext } from "react";
import store from "./components/Store/Store";
import { observer } from "mobx-react";
import Bar from "./components/Bar/Bar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Shoes from "./components/Shoes/Shoes";
import TShirt from "./components/TShirt/TShirt";
import Pants from "./components/Pants/Pants";
import Success from "./components/Success/Success";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = observer(() => {
  return (
    <>
      <Router>
        <Switch>
          <div className="App">
            <div className="app___container">
              <div className="home____container">
                <Link to="/">
                  <Bar />
                </Link>
                <Route path="/" exact>
                  {/* HOME PAGE */}
                  <div className="home____sets">
                    <h2>Steps done till now: {store.steps}</h2>
                  </div>
                  <div className="home____buttons">
                    <Link to="/Shoes">
                      {" "}
                      <Button title="Shoes" />
                    </Link>
                    <Link to="/Pants">
                      {" "}
                      <Button title="Pants" />
                    </Link>
                    <Link to="/TShirt">
                      {" "}
                      <Button title="Shirt" />
                    </Link>
                  </div>
                  {store.steps === 3 ? (
                    <div className="home___success">
                      <Link to="/Success">
                        {" "}
                        <Button title="Sucess" />
                      </Link>
                    </div>
                  ) : (
                    <div className="home___pending">
                      <h2>Dress Status Not Finished Yet.</h2>
                    </div>
                  )}
                </Route>

                <Route path="/Shoes">
                  <Shoes />
                </Route>
                <Route exact path="/Pants">
                  <Pants />
                </Route>
                <Route exact path="/TShirt">
                  <TShirt />
                </Route>
                <Route exact path="/Success">
                  <Success />
                </Route>
              </div>
            </div>
            <Footer />
          </div>
        </Switch>
      </Router>
    </>
  );
});

export default App;
