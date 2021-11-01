import "./App.css";
import React, { useState, useContext, useEffect } from "react";
import store from "./components/Store/Store";
import { observer } from "mobx-react";
import Bar from "./components/Bar/Bar";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Shoes from "./components/Shoes/Shoes";
import TShirt from "./components/TShirt/TShirt";
import Pants from "./components/Pants/Pants";
import Success from "./components/Success/Success";
import Status from "./components/Status/Status";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./components/Modal/Moda";

const App = observer(() => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    if (store.cookie == true) {
      console.log("cookies found");
      setModal(true);
    }
  }, [store.cookie]);
  const cookieHandler = (val) => {
    //if the user pressed yes we should remove the cookies and close the modal pop up .
    if (val == "yes") {
      //clear cookies.
      localStorage.clear();
      store.clearAll(); //this will clear all the data into same session.
      setModal(false); //this will close the modal
    } else {
      setModal(false);
    }
  };
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
                  <div className="home____status">
                    <div className="app___title">
                      <h2>Dress application</h2>
                    </div>
                    <div className="app___modal">
                      {modal === true ? (
                        <div>
                          <Modal
                            text="ברוך הבא שוב, נמצא במערכת כי בחרת מוצרים האם אתה רוצה להיתעלם מהשינויים?"
                            onModalOpenCookie={cookieHandler}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <h2>
                      סטטוס לבוש <Status />
                    </h2>
                  </div>
                  <div className="home____buttons">
                    <Link to="/Shoes">
                      <Button title="נעליים" />
                    </Link>
                    <Link to="/Pants">
                      <Button title="מכנסיים" />
                    </Link>
                    <Link to="/TShirt">
                      <Button title="חולצות" />
                    </Link>
                  </div>
                  {store.name && store.shirtName && store.pantName ? (
                    <div className="home___success">
                      <Link to="/Success">
                        <Button title="סיום" />
                      </Link>
                    </div>
                  ) : (
                    <div className="home___pending">
                      <h2>
                        <Button title="סיום" status="true" />
                      </h2>
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
