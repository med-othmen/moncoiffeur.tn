import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// components
import Listsalon from "./listofsalons/listsalons";
import Navbarclient from "./navbar/menuclient";
import Footer from "../footer/footer";
import Meetinglist from "./rendez-vous/meetingslist";
import Profilclient from "./profil/profilclient";
import Home from "./home/homeclient";
import { GetoneclientFromDB } from "../../actions/clientAction";

const client = localStorage.getItem("userid");

export class Indexclient extends Component {
  componentDidMount() {
    this.props.getUserinfos(client);
  }
  render() {
    return (
      <div>
        <Navbarclient Client={this.props.CurrentUser} />
        <div>
          <Route exact path="/client">
            <Home Client={this.props.CurrentUser} />
          </Route>
          <Route path="/client/listofsalons">
            <Listsalon Client={this.props.CurrentUser} />
          </Route>
          <Route path="/client/meetings">
            <Meetinglist Client={this.props.CurrentUser} />
          </Route>
          <Route path="/client/profil">
            <Profilclient Client={this.props.CurrentUser} />
          </Route>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CurrentUser: state.CorruntUSer });

const mapDispatchToProps = (dispatch) => ({
  getUserinfos: (userid) => dispatch(GetoneclientFromDB(userid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Indexclient);
