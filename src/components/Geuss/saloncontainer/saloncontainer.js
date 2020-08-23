import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput } from "mdbreact";

export class saloncontainer extends Component {
  render() {
    return (
      <MDBContainer>
        <MDBRow className="bg">
          <MDBCol size="6" className="mt-5">
            <h1>Chercher une salon prés de chez vous !!!</h1>
            <MDBRow>
              <MDBCol size="4">
                <MDBInput label="Nom de salon" outline />
              </MDBCol>
              <MDBCol size="4">
                <MDBInput label="Ville" outline />
              </MDBCol>
              <MDBCol className="mt-3">
                <MDBBtn color="red lighten-5">Rechecher</MDBBtn>
              </MDBCol>
            </MDBRow>
            <div className="mt-5">
              <h4>Exemple</h4>
              <hr></hr>
              <p className="text-justify">
                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
                purus sit amet fermentum. Donec sed odio operae, eu vulputate
                felis rhoncus. Praeterea iter est quasdam res quas ex communi.
                At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi
                concilium totius Galliae in diem certam indicere. Cras mattis
                iudicium purus sit amet fermentum.
              </p>
            </div>
          </MDBCol>
          <MDBCol size="6">
            <img
              className="img-fluid mt-5"
              src="https://image.freepik.com/vecteurs-libre/salon-coiffure-isometrique_146998-3732.jpg"
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(saloncontainer);
