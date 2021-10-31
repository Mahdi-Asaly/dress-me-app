import React from "react";
import Button from "../Button/Button";
import Store from "../Store/Store";
import "./Home.css";
import Shoes from "../Shoes/Shoes";
import TShirt from "../TShirt/TShirt";
import Pants from "../Pants/Pants";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Home() {
  return (
    <Router>
      <div className="home____container">
        <Link to="/Shoes">
          {" "}
          <Button title="Shoes">Shoes</Button>
        </Link>
        <Link to="/Pants">
          {" "}
          <Button title="Pants">Pants</Button>
        </Link>
        <Link to="/TShirt">
          {" "}
          <Button title="Pants">TShirt</Button>
        </Link>
        <hr />
        <Switch>
          <Route path="/Shoes">
            <Shoes />
          </Route>
          <Route exact path="/Pants">
            <Pants />
          </Route>
          <Route exact path="/TShirt">
            <TShirt />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
