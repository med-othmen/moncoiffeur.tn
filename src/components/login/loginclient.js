import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Login } from "../../actions/authentification";
export class Signin extends Component {
  constructor(props) {
    super(props);
    this.Login = this.Login.bind(this);
  }

  Login(event) {
    event.preventDefault();
    this.props.Loginwithtoken(this.state);
  }

  render() {
    return (
      <div>
        <MDBContainer className="bg">
          <MDBRow className="mt-5">
            <MDBCol md="6">
              <div className="mt-5 float-center">
                <h1>Se connecter</h1>
                <form onSubmit={this.Login}>
                  <MDBRow>
                    <MDBCol md="12" className="mb-3">
                      <label className="grey-text">Adresse email</label>
                      <input
                        type="mail"
                        className="form-control"
                        required
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mb-3">
                      <label className="grey-text">Mot de passe</label>
                      <input
                        type="password"
                        className="form-control"
                        required
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mt-2 float-right">
                    <div>
                      <MDBBtn color="dark">Annuler</MDBBtn>
                      <MDBBtn color="danger" type="submit">
                        Connecter
                      </MDBBtn>
                      <div className="mt-5">
                        <p className="font-big grey-text d-flex justify-content-end">
                          Vous n'avez pas un compte ?
                          <Link to="/signupclient">
                            <span className="red-text ml-1">
                              Créer un compte
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </MDBRow>
                </form>
              </div>
            </MDBCol>

            <MDBCol md="6">
              <img
                className="img-fluid"
                src="https://image.freepik.com/vecteurs-libre/illustration-concept-coiffeur_114360-1565.jpg"
                alt=""
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  Loginwithtoken: (userdata) => dispatch(Login(userdata)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
