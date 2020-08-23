import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { updateSaloninDB } from "../../../actions/salonAction";

export class profilclient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.Pro.name,
      gender: this.props.Pro.gender,
      street: this.props.Pro.street,
      city: this.props.Pro.city,
      email: this.props.Pro.email,
      password: this.props.Pro.password,
      description: this.props.Pro.description,
    };
    this.updateprofil = this.updateprofil.bind(this);
  }

  updateprofil() {
    this.props.updatePro(this.props.Pro._id, this.state);
  }
  render() {
    return (
      <MDBContainer className="mt-3">
        <MDBRow>
          <div>
            {" "}
            <h1>Mon profil</h1>
          </div>
        </MDBRow>
        <hr></hr>

        <form onSubmit={this.updateprofil}>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Nom de salon</label>
              <input
                type="text"
                className="form-control"
                name="state"
                defaultValue={this.props.Pro.name}
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Genre de client</label>
              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ gender: e.target.value })}
              >
                <option value={this.props.Pro.gender} selected disabled hidden>
                  {this.props.Pro.gender}
                </option>
                <option value="Homme/Femme">Homme/Femme</option>
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Adresse e-mail</label>
              <input
                type="mail"
                className="form-control"
                name="email"
                required
                onChange={(e) => this.setState({ email: e.target.value })}
                defaultValue={this.props.Pro.email}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Numéro télephone</label>
              <input
                type="phone"
                className="form-control"
                name="phone"
                defaultValue={this.props.Pro.phone}
                required
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Adresse Rue</label>
              <input
                type="text"
                className="form-control"
                name="street"
                defaultValue={this.props.Pro.street}
                required
                onChange={(e) => this.setState({ street: e.target.value })}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">
                Adresse ville &nbsp;&nbsp;&nbsp;&nbsp;
              </label>

              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ city: e.target.value })}
              >
                <option value={this.props.Pro.city} selected disabled hidden>
                  {this.props.Pro.city}
                </option>
                <option value="Tunis">Tunis</option>
                <option value="Sousse">Sousse</option>
                <option value="Gabes">Gabes</option>
              </select>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                name="new-password"
                required
                defaultValue={this.props.Pro.password}
                autoComplete
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </MDBCol>
            <MDBCol md="6" className="mb-3">
              <label className="grey-text">Confirmer mot de passe</label>
              <input
                type="password"
                className="form-control"
                name="new-password"
                required
                autocomplete
                defaultValue={this.props.Pro.password}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <label htmlFor="exampleFormControlTextarea1">
              Description de votre salon
            </label>
            <textarea
              className="form-control"
              rows="3"
              required
              onChange={(e) => this.setState({ description: e.target.value })}
              defaultValue={this.props.Pro.description}
            />
          </MDBRow>
          <MDBRow>
            <MDBCol size="3">
              <div className="flex-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                  className="rounded float-left"
                  alt="aligment"
                />
              </div>
              <div className="custom-file ">
                <input type="file" className="custom-file-input" />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                ></label>
              </div>
            </MDBCol>
            <MDBCol size="3">
              <div className="flex-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                  className="rounded float-left"
                  alt="aligment"
                />
              </div>
              <div className="custom-file ">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                ></label>
              </div>
            </MDBCol>{" "}
            <MDBCol size="3">
              <div className="flex-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                  className="rounded float-left"
                  alt="aligment"
                />
              </div>
              <div className="custom-file ">
                <input
                  type="file"
                  className="custom-file-input"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label
                  className="custom-file-label"
                  htmlFor="inputGroupFile01"
                ></label>
              </div>
            </MDBCol>{" "}
            <MDBCol size="3">
              <div className="flex-center">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                  className="rounded float-left"
                  alt="aligment"
                />
              </div>
              <div className="custom-file ">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label"></label>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12" className="mt-5">
              <div className="mt-5 float-right">
                <MDBBtn color="dark">Annuler</MDBBtn>
                <MDBBtn color="dark" type="submit">
                  Sauvegarder
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  CurrentUser: state.CorruntUSer,
});

const mapDispatchToProps = {
  updatePro: (id, Salon) => updateSaloninDB(id, Salon),
};

export default connect(mapStateToProps, mapDispatchToProps)(profilclient);
