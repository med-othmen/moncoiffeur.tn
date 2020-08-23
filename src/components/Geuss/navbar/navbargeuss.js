import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBNavLink,
  MDBLink,
} from "mdbreact";
import { Link } from "react-router-dom";

class Navbargeuss extends Component {
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
          className="fixed-topd  "
        >
          <MDBNavbarBrand>
            <Link to="/">
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
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon size="lg" fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBLink to="/signuppro" link className="mt-2">
                  <MDBIcon size="lg" icon="plus-circle" />
                  &nbsp;&nbsp; Ajouter Mon salon
                </MDBLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBLink to="/login" link className="mt-2">
                  <MDBIcon size="lg" icon="user-circle" />
                  <strong> &nbsp;&nbsp; Se connecter</strong>
                </MDBLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default Navbargeuss;
