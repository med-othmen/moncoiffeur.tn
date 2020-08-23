import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

// components
import Footer from "../footer/footer";
import Navbar from "./Navbar/Navbarpro";
import Home from "./home/Home";
import SalonPreview from "./salonContainer/salonPreview";
import Listofsalons from "../client/listofsalons/listsalons";
import Profil from "./profil/profilpro";
import Meetinglist from "./rendez-vous/meetingslist";
import { GetoneProFromDB } from "../../actions/salonAction";

const ProID = localStorage.getItem("userid");
export class IndexPro extends Component {
  state = {
    User: this.props.CurrentUser,
  };
  componentDidMount() {
    this.props.getUserinfos(ProID);
  }

  render() {
    return (
      <div>
        <Navbar Pro={this.props.CurrentUser} />

        <Route exact path="/pro">
          <Home Pro={this.props.CurrentUser} />
        </Route>
        <Route path="/pro/listofsalons">
          <Listofsalons Pro={this.props.CurrentUser} />
        </Route>
        <Route path="/pro/monsalon">
          <SalonPreview ProID={ProID} />
        </Route>
        <Route path="/pro/profil">
          <Profil Pro={this.props.CurrentUser} />
        </Route>
        <Route path="/pro/meetings">
          <Meetinglist Pro={this.props.CurrentUser} />
        </Route>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ CurrentUser: state.CorruntUSer });

const mapDispatchToProps = (dispatch) => ({
  getUserinfos: (userid) => dispatch(GetoneProFromDB(userid)),
});
export default connect(mapStateToProps, mapDispatchToProps)(IndexPro);
