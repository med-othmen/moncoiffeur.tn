import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { addsalontoDB } from "../../actions/salonAction";

export class signup extends Component {
  constructor(props) {
    super(props);
    this.saveSalon = this.saveSalon.bind(this);
  }

  saveSalon(event) {
    event.preventDefault();
    this.props.addsalon(this.state);
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow className="mt-2 bg">
          <MDBCol md="6">
            <img
              className="img-fluid mt-5 mb-5 "
              src="https://image.freepik.com/vecteurs-libre/illustration-fond-coiffeur_1284-20645.jpg"
              alt=""
            />
            <p>
              While it may not be obvious to everyone, there are a number of
              reasons creating random paragraphs can be useful. A few examples
              of how some people use this generator are listed in the following
              paragraphs.
            </p>
            <h1> votre emploi de temps de travail </h1>
          </MDBCol>
          <MDBCol md="6">
            <div className="mt-5">
              <h1>Créer mon compte</h1>
              <form onSubmit={this.saveSalon}>
                <MDBRow>
                  <MDBCol md="4" className="mb-3">
                    <label className="grey-text">Nom de salon</label>
                    <input
                      type="text"
                      autocomplete
                      className="form-control"
                      name="state"
                      required
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </MDBCol>
                  <MDBCol md="4" className="mb-3">
                    <label className="grey-text">Adresse Rue</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      autocomplete
                      required
                      onChange={(e) =>
                        this.setState({ street: e.target.value })
                      }
                    />
                  </MDBCol>
                  <MDBCol md="4" className="mb-3">
                    <label className="grey-text">Ville</label>
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => this.setState({ city: e.target.value })}
                    >
                      <option>Bizerte</option>
                      <option value="Tunis">Tunis</option>
                      <option value="Sousse">Sousse</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Adresse mail</label>
                    <input
                      type="mail"
                      className="form-control"
                      autocomplete
                      name="state"
                      required
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Numéro télephone</label>
                    <input
                      type="phone"
                      className="form-control"
                      autocomplete
                      name="zip"
                      required
                      onChange={(e) => this.setState({ phone: e.target.value })}
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Mot de passe</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required
                      autocomplete
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Confirmer mot de passe</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <div className="mt-5 float-right">
                  <MDBBtn color="primary">Annuler</MDBBtn>
                  <MDBBtn color="danger" type="submit">
                    Créer mon compte
                  </MDBBtn>
                </div>
              </form>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addsalon: (salon) => dispatch(addsalontoDB(salon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(signup);
