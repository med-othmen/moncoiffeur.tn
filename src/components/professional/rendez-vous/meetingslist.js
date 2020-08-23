import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import DayPicker from "react-day-picker";
import { getallMeetsfromDB } from "../../../actions/meetAction";
import {
  GetoneProFromDB,
  getAllSalonsFromApi,
} from "../../../actions/salonAction";

import Fullcalendar from "../../fullcalendar/Calendar";
export class meetingslist extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }
  componentDidMount() {
    this.props.getallsalons();
    this.props.getallmeets();
  }
  handleDayClick(day) {
    console.log(day.toLocaleDateString());

    this.setState({ selectedDay: day });
  }
  render() {
    return (
      <MDBContainer className="bg">
        <div className="mt-3">
          <h1>Mes rendez-vous</h1>
        </div>
        <hr></hr>
        <MDBRow>
          <MDBCol size="8">
            {" "}
            <MDBCol size="6">
              <MDBTable>
                <MDBTableHead>
                  <tr>
                    <th></th>
                    <th>Salon</th>
                    <th>Heure</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Supprimer</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {this.props.meets
                    .filter((el) =>
                      this.state.selectedDay === undefined
                        ? el
                        : el.date ===
                          this.state.selectedDay.toLocaleDateString()
                    )
                    .map((el) => (
                      <tr>
                        <td>1</td>
                        <td>
                          {this.props.salons
                            .filter((sl) => sl._id === el.proID)
                            .map((pr) => (
                              <strong>{pr.name}</strong>
                            ))}
                        </td>
                        <td>{el.time}</td>
                        <td>{el.date}</td>
                        <td>{el.status}</td>
                        <td>
                          <MDBBtn flat color="danger">
                            Annuller
                          </MDBBtn>
                        </td>
                      </tr>
                    ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCol>
          </MDBCol>
          <MDBCol size="4 r">
            <div>
              <DayPicker onDayClick={this.handleDayClick} />
              {this.state.selectedDay ? (
                <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
              ) : (
                <p>Please select a day.</p>
              )}
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  meets: state.meets,
  salons: state.salons,
});

const mapDispatchToProps = (dispatch) => ({
  getallsalons: () => dispatch(getAllSalonsFromApi()),
  getallmeets: () => dispatch(getallMeetsfromDB()),
});

export default connect(mapStateToProps, mapDispatchToProps)(meetingslist);

/*

{this.props.salons
                    .filter((sl) => sl._id === el.proID)
                    .map((pr) => (
                      <strong>{pr.name} eee</strong>
                    ))}


                     {this.props.meets.map((el) => (
                    <tr>
                      <td>1</td>
                      <td>
                        {this.props.salons
                          .filter((sl) => sl._id === el.proID)
                          .map((pr) => (
                            <strong>{pr.name}</strong>
                          ))}
                      </td>
                      <td>{el.time}</td>
                      <td>
                        {el.day}/{el.month}/{el.year}{" "}
                      </td>
                      <td>{el.status}</td>
                      <td>
                        <MDBBtn flat color="danger">
                          Annuller
                        </MDBBtn>
                      </td>
                    </tr>
                  ))}
                    */
