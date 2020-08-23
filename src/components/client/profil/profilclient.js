import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { updateClientinDB } from "../../../actions/clientAction";
import Axios from "axios";
var initialArray = Array.apply(null, new Array(70));

export class profilclient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: this.props.Client.firstname,
      lastname: this.props.Client.lastname,
      email: this.props.Client.email,
      phone: this.props.Client.phone,
      password: this.props.Client.password,
      age: this.props.Client.age,
      gender: this.props.Client.gender,
      street: this.props.Client.street,
      city: this.props.Client.city,
      avatar: this.props.Client.avatar,
    };
    this.saveClient = this.saveClient.bind(this);
  }
  componentDidMount() {
    console.log(this.props.Client);
  }
  saveClient() {
    this.props.updateclient(this.props.Client._id, this.state);
  }

  render() {
    console.log(this.props.Client);

    return (
      <MDBContainer className=" mt-3">
        <MDBRow>
          <h1>Mon profil</h1>
        </MDBRow>
        <hr></hr>
        <form onSubmit={this.saveClient}>
          <MDBRow>
            <MDBCol xl="4" md="4" className="mb-3 text-center">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
                className="img-fluid z-depth-4 rounded-circle"
                alt=""
              />
              <div className="input-group mt-5">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    onChange={(e) => this.handelchangephoto(e)}
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="inputGroupFile01"
                  >
                    Changer ma photo
                  </label>
                </div>
              </div>
              <MDBRow>
                <MDBBtn onClick={() => this.onFileUpload()}>Changer</MDBBtn>
              </MDBRow>
            </MDBCol>
            <MDBCol size="8">
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label className="grey-text">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    required
                    defaultValue={this.props.Client.firstname}
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="zip"
                    required
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                    defaultValue={this.props.Client.lastname}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Adresse mail
                  </label>
                  <input
                    type="mail"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="state"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                    defaultValue={this.props.Client.email}
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Numéro télephone
                  </label>
                  <input
                    type="phone"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="zip"
                    required
                    onChange={(e) => this.setState({ phone: e.target.value })}
                    defaultValue={this.props.Client.phone}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    required
                    defaultValue={this.props.Client.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label className="grey-text">Confirmer mot de passe</label>
                  <input
                    defaultValue={this.props.Client.password}
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
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
                    Adresse rue
                  </label>
                  <input
                    type="text"
                    id="defaultFormRegisterPasswordEx4"
                    className="form-control"
                    name="state"
                    required
                    defaultValue={this.props.Client.street}
                    onChange={(e) => this.setState({ street: e.target.value })}
                  />
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Ville&nbsp;&nbsp;&nbsp;&nbsp;
                  </label>

                  <select
                    className="browser-default custom-select"
                    onChange={(e) => this.setState({ city: e.target.value })}
                  >
                    <option value={this.state.city} selected disabled hidden>
                      {this.props.Client.city}
                    </option>

                    <option value="Zarzis">Zarzis</option>
                    <option value="Djerba">Djerba</option>
                  </select>
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
                    onChange={(e) => this.setState({ gender: e.target.value })}
                    defaultValue={this.props.Client.gender}
                  >
                    <option value="" selected disabled hidden>
                      {this.props.Client.gender}
                    </option>
                    <option value="Femme">Femme</option>
                    <option value="Homme">Homme</option>
                  </select>
                </MDBCol>
                <MDBCol md="6" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterPasswordEx4"
                    className="grey-text"
                  >
                    Votre age
                  </label>

                  <select
                    className="browser-default custom-select"
                    onChange={(e) => this.setState({ age: e.target.value })}
                    value={this.state.age}
                  >
                    {" "}
                    <option
                      value={this.props.Client.age}
                      selected
                      disabled
                      hidden
                    >
                      {this.props.Client.age}
                    </option>
                    {initialArray.map((el, index) => (
                      <option value={index}>{index} </option>
                    ))}
                  </select>
                </MDBCol>
              </MDBRow>
              <div className="mt-5 float-right">
                <MDBBtn color="brown lighten-5">Annuler</MDBBtn>
                <MDBBtn color="deep-orange lighten-5" type="submit">
                  Sauvegarder
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>{" "}
        </form>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  CurrentUser: state.CorruntUSer,
});

const mapDispatchToProps = {
  updateclient: (id, client) => updateClientinDB(id, client),
};

export default connect(mapStateToProps, mapDispatchToProps)(profilclient);

/*


handelchangephoto(event) {
  this.setState({ avatar: event.target.files[0] });
}
onFileUpload = (event) => {
  // Create an object of formData
  const formData = new FormData();
  // Update the formData object
  formData.append("myFile", this.state.avatar, this.state.avatar.name);
  console.log(this.state.avatar);
  Axios.post("http://localhost:4000/client/upload", this.state.avatar);
};

*/
