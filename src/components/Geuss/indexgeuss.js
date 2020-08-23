import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
// components
import Menuclient from "./navbar/navbargeuss";
import Salonssearch from "./saloncontainer/saloncontainer";
import Saloninvits from "./salonssection/hairsalon";
import Footer from "../footer/footer";
import Salonscarosel from "./carosel/carosel_salons";
import "../../css/indexgeuss.css";

export class Indexgeuss extends Component {
  render() {
    return (
      <div>
        <Menuclient />
        <Switch>
          <Route path="/">
            <Salonssearch />

            <Saloninvits />
            <Salonscarosel />
          </Route>
          <Route path="/aboutus">
            <Menuclient />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Indexgeuss);

/*  
<Saloninvits />
        <Signupclient />
        <Login />
        <Caroselsalons />
        <Signupprof />
        
        */
