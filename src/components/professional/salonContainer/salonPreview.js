import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
  MDBLink,
  MDBCardImage,
} from "mdbreact";
import img from "../../../assets/mailingss.png";
import img2 from "../../../assets/location.png";
import { GetoneProFromDB } from "../../../actions/salonAction";
const ProID = localStorage.getItem("userid");

export class salonPreview extends Component {
  state = {
    User: this.props.CurrentUser,
  };
  componentDidMount() {
    this.props.getUserinfos(ProID);
    console.log("hantfel index");
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="8">
            <MDBRow className="mt-2">
              <MDBCol size="12">
                <h1 className="mt-5"> {this.props.CurrentUser.name} </h1>
                <hr></hr>
                <MDBRow className="text-center mt-5">
                  <MDBCol md="4">
                    <img
                      src={img}
                      className="img-fluid z-depth-0rounded-circle"
                      alt=""
                    />

                    <p className="mt-4">{this.props.CurrentUser.phone}</p>
                  </MDBCol>{" "}
                  <MDBCol md="4">
                    <img
                      src={img2}
                      className="img-fluid z-depth-0 rounded-circle"
                      alt=""
                    />{" "}
                    <p className="mt-4">{this.props.CurrentUser.street}</p>
                    <p className="mb-md-0">{this.props.CurrentUser.city}</p>
                  </MDBCol>
                  <MDBCol md="4">
                    <img
                      src={img}
                      className="img-fluid z-depth-0rounded-circle"
                      alt=""
                    />
                    <p className="mt-4">{this.props.CurrentUser.email}</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <p className="mt-5  text-justify ">
              {" "}
              {this.props.CurrentUser.description}{" "}
            </p>

            <MDBRow className="mt-5">
              {this.props.CurrentUser.imgs ? (
                this.props.CurrentUser.imgs.map((el) => (
                  <MDBCol lg="6" md="12" className="mb-4">
                    <MDBCardImage cascade className="img-fluid" src={el} />
                  </MDBCol>
                ))
              ) : (
                <div className="spinner-border text-danger" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              )}
            </MDBRow>
          </MDBCol>

          <MDBCol size="4" className="mb-3">
            <MDBLink
              to="/pro/meetings"
              link
              className="mt-5 black-text text-center"
            >
              <MDBIcon far icon="calendar-check" size="lg" /> &nbsp;&nbsp;
              <strong> Consulter mon calendrier</strong>
              <hr></hr>
            </MDBLink>
            <img
              src="https://www.click2map.com/sites/default/files/marker-gps-sm_0.png"
              className="img-fluid z-depth-1 mb-4 mt-5"
              alt=""
            />
            <hr></hr>
            <div className="d-flex">
              <h3>Horaires d'ouverture</h3>
              <MDBBtn size="sm" color="orange">
                <MDBIcon icon="pen" />
              </MDBBtn>
            </div>
            <MDBTable>
              <MDBTableHead color="peach-gradient" textWhite>
                <tr>
                  <th>Jour</th>
                  <th>Heure</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody></MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({ CurrentUser: state.CorruntUSer });

const mapDispatchToProps = (dispatch) => ({
  getUserinfos: (userid) => dispatch(GetoneProFromDB(userid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(salonPreview);
