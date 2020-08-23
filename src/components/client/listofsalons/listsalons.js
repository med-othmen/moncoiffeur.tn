import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSalonsFromApi } from "../../../actions/salonAction";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBContainer,
} from "mdbreact";

export class Indexclient extends Component {
  componentDidMount() {
    this.props.getallsalons();
  }
  render() {
    return (
      <MDBContainer>
        <div className="mt-3">
          <h1>Trouver une salon </h1>
        </div>
        <hr></hr>
        <MDBRow>
          <MDBCol size="4">
            <MDBInput label="Nom de salon" outline />
          </MDBCol>

          <MDBCol size="4">
            <select className="browser-default custom-select mt-4">
              <option>Ville</option>
              <option value="1">Tunis</option>
              <option value="2">Ariana</option>
              <option value="3">Ben arouss</option>
            </select>
          </MDBCol>
          <MDBCol size="4">
            <select className="browser-default custom-select mt-4">
              <option>Genre de salon</option>
              <option value="1">Homme</option>
              <option value="2">Femme</option>
            </select>
          </MDBCol>
        </MDBRow>
        <hr></hr>
        <div className="d-flex align-content-start flex-wrap  mt-5 ">
          {this.props.salons.map((el) => (
            <div style={{ maxWidth: "12rem" }} className="ml-5 mb-5">
              <MDBCard>
                <MDBCardImage
                  className="img-fluid"
                  src="https://image.freepik.com/vecteurs-libre/logo-salon-coiffure-fond-sombre_23-2148420009.jpg"
                  waves
                />
                <MDBCardBody>
                  <MDBCardTitle>{el.name}</MDBCardTitle>
                  <MDBCardText>
                    {el.street},{el.city}
                  </MDBCardText>
                  <MDBCardText>{el.phone}</MDBCardText>

                  <MDBBtn color="dark">Réservez</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))}
        </div>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  salons: state.salons,
});

const mapDispatchToProps = (dispatch) => ({
  getallsalons: () => dispatch(getAllSalonsFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Indexclient);
