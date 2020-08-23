import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

export class home extends Component {
  render() {
    return (
      <MDBContainer className="bg">
        <MDBRow>
          <MDBCol size="6" className="mt-5 font-weight-bold">
            {this.props.Client.firstname}

            <h1>Binevenue dans votre espace personnel :</h1>
            <div className="ml-5">
              <h3>
                <strong>
                  <MDBIcon icon="search" />
                  &nbsp;&nbsp; &nbsp;&nbsp;
                </strong>
                Trouvez votre sallon de béauté préférer
              </h3>
              <h3>
                <strong>
                  <MDBIcon far icon="address-book" />
                  &nbsp;&nbsp; &nbsp;&nbsp;
                </strong>
                Reservez votre millieur prestation
              </h3>
              <h3>
                <strong>
                  <MDBIcon icon="check" />
                  &nbsp;&nbsp; &nbsp;&nbsp;
                </strong>
                Suivi votre réservation
              </h3>
              <h3>
                <strong>
                  <MDBIcon icon="trophy" />
                  &nbsp;&nbsp; &nbsp;&nbsp;
                </strong>
                Ganger le temps de chercher
              </h3>
            </div>
            <Link to="/client/listofsalons">
              <MDBBtn color="orange" outline className="mt-5">
                Voitre notre catégorie de salons de beauté
              </MDBBtn>
            </Link>
          </MDBCol>
          <MDBCol size="6" className="mt-3">
            <MDBRow>
              <img
                className="img-fluid"
                src="https://image.freepik.com/vecteurs-libre/homme-se-coupe-cheveux-dans-salon-coiffure-illustration-vie-ville-hipster_76597-179.jpg"
                alt=""
              />
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(home);
