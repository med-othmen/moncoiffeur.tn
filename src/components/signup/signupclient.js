import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { addclienttoDB } from "../../actions/clientAction";
import Modalconfirmation from "../comfirmationModals/signupalert";
export class Signup extends Component {
  constructor(props) {
    super(props);

    this.saveClient = this.saveClient.bind(this);
  }

  saveClient(event) {
    this.props.addclient(this.state);
    event.preventDefault();
  }
  render() {
    return (
      <MDBContainer>
        <MDBRow className="mt-2 bg">
          <MDBCol md="6">
            <div className="mt-5">
              <h1>Créer mon compte</h1>
              <form onSubmit={this.saveClient}>
                <MDBRow>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Prénom</label>
                    <input
                      type="text"
                      className="form-control"
                      name="state"
                      required
                      onChange={(e) =>
                        this.setState({ firstname: e.target.value })
                      }
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Nom</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      required
                      onChange={(e) =>
                        this.setState({ lastname: e.target.value })
                      }
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Adresse rue</label>
                    <input
                      type="mail"
                      className="form-control"
                      name="state"
                      required
                      onChange={(e) =>
                        this.setState({ street: e.target.value })
                      }
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Ville</label>
                    <select
                      className="browser-default custom-select"
                      required
                      onChange={(e) => this.setState({ city: e.target.value })}
                    >
                      <option></option>
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
                      required
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Numéro télephone</label>
                    <input
                      type="phone"
                      className="form-control"
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
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label className="grey-text">Confirmer mot de passe</label>
                    <input
                      type="password"
                      className="form-control"
                      name="zip"
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="6" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Votre sexe
                    </label>
                    <select
                      className="browser-default custom-select"
                      required
                      onChange={(e) =>
                        this.setState({ gender: e.target.value })
                      }
                    >
                      <option></option>
                      <option value="Femme">Femme</option>
                      <option value="Homme">Homme</option>
                    </select>
                  </MDBCol>
                  <MDBCol md="6" className="mb-3">
                    <label
                      htmlFor="defaultFormRegisterPasswordEx4"
                      className="grey-text"
                    >
                      Age
                    </label>
                    <select
                      className="browser-default custom-select"
                      required
                      onChange={(e) => this.setState({ age: e.target.value })}
                    >
                      <option></option>
                      <option value="25">25</option>
                      <option value="27">27</option>
                    </select>
                  </MDBCol>
                </MDBRow>
                <div className="mt-5 float-right">
                  <MDBBtn color="dark">Annuler</MDBBtn>
                  <MDBBtn color="orange" type="submit">
                    Créer mon compte
                  </MDBBtn>
                </div>
              </form>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <img
              className="img-fluid mt-5"
              src="https://image.freepik.com/vecteurs-libre/heureux-coiffeurs-debout-chaises_179970-1875.jpg"
              alt=""
            />
          </MDBCol>
        </MDBRow>
        <Modalconfirmation />
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addclient: (client) => dispatch(addclienttoDB(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
