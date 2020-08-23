import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="peach-gradient" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Moncoiffeur</h5>
            <p>Trouver votre coiffeur le plus proche de vous </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Menu</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Qui est nous ? ? ?</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        &copy; {new Date().getFullYear()} Copyright: SIMPLON TUNIS
        <MDBContainer fluid>
          <div>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon size="lg" fab icon="facebook" />
            </MDBNavLink>

            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon size="lg" fab icon="instagram" />
            </MDBNavLink>

            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon size="lg" fab icon="twitter" />
            </MDBNavLink>
          </div>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
