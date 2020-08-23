import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBLink,
} from "mdbreact";
import { Link } from "react-router-dom";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <MDBNavbar
          color="peach-gradient"
          dark
          expand="md"
          className="fixed-topa"
        >
          <MDBNavbarBrand>
            <Link to="/client">
              <strong className="white-text">MONCOIFFEUR.TN</strong>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="lg" fab icon="facebook" />
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="lg" fab icon="instagram" />
                </MDBNavLink>
              </MDBNavItem>{" "}
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="lg" fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBLink to="/client/listofsalons" className="mt-2" link>
                  <MDBIcon size="lg" icon="home" />
                  &nbsp;&nbsp; Chercher une salon
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/client/meetings" link className="mt-2">
                  <MDBIcon size="lg" icon="calendar-week" />
                  &nbsp;&nbsp; Mes rendez-vous
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/client/profil" link className="mt-2">
                  <strong>
                    {" "}
                    {this.props.Client.firstname}&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  </strong>
                  <MDBIcon size="lg" icon="user-circle" />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </MDBLink>
              </MDBNavItem>{" "}
              <MDBNavItem>
                <MDBLink to="/" link className="mt-2">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <MDBIcon size="lg" icon="sign-out-alt" />
                </MDBLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default NavbarPage;
