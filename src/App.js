import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// components
import Indexgeuss from "./components/Geuss/indexgeuss";
import Login from "./components/login/loginclient";
import Indexclient from "./components/client/IndexClient";
import Signupclient from "./components/signup/signupclient";
import Narbargeuss from "./components/Geuss/navbar/navbargeuss";
import Signupprofesionnal from "./components/signup/signupprof";
import Navbargeuss from "./components/Geuss/navbar/navbargeuss";
import IndexPro from "./components/professional/IndexPro";
import Footer from "./components/footer/footer";
import Test from "./components/test";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Indexgeuss />
          </Route>
          <Route path="/login">
            <Navbargeuss />
            <Login />
            <Footer />
          </Route>
          <Route path="/signupclient">
            <Narbargeuss />
            <Signupclient />
            <Footer />
          </Route>
          <Route path="/signuppro">
            <Narbargeuss />
            <Signupprofesionnal />
          </Route>
          <Route path="/client/">
            <Indexclient />
          </Route>
          <Route path="/pro/">
            <IndexPro />
          </Route>
          <Route path="/admin/">
            <Indexclient />
          </Route>
          <Route path="/test/">
            <Test />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

/*
 <Route path="/client/">
            <Indexclient />
          </Route>
          */
