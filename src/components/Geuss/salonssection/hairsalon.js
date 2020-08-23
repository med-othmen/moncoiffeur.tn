import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBBtn,
} from "mdbreact";
export class hairsalon extends Component {
  render() {
    return (
      <MDBContainer>
        <h1>Pourquoi avoir un compte sur moncoiffeur</h1>
        <MDBRow>
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://image.freepik.com/vecteurs-libre/scene-salon-beaute-coiffeur-client_276875-25.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center " pattern={1}>
                <div>
                  <MDBBtn color="danger">Inscrivez votre salon</MDBBtn>
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>{" "}
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://image.freepik.com/vecteurs-libre/prise-rendez-vous-calendrier_23-2148575068.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center " pattern={1}>
                <div>
                  <MDBBtn color="danger">Inscrivez votre salon</MDBBtn>
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>{" "}
          <MDBCol md="4">
            <MDBView>
              <img
                src="https://image.freepik.com/photos-gratuite/signe-qui-dit-ouvrir-cafe-restaurant-accroche-porte-entree-apres-quarantaine-ouverture-entreprise_192729-293.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center " pattern={1}>
                <div>
                  <MDBBtn color="danger">Inscrivez votre salon</MDBBtn>
                </div>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="bg3">
            <h3>Chercher votre salon préférer</h3>
            <p className="text-justify">
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
              purus sit amet
            </p>
          </MDBCol>
          <MDBCol md="4" className="bg4">
            <h3>Organiser votre emploi de travail</h3>
            <p className="text-justify">
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
              purus sit amet
            </p>
          </MDBCol>
          <MDBCol md="4" className="b">
            <h3>Trouvez une salon ouvert</h3>
            <p className="text-justify">
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
              purus sit amet
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(hairsalon);

/*
  <MDBView>
              <img
                src="https://www.idgraphique.fr/asset/tmp/slide/habillage-facade-magasin-coiffeur-enseigne-680.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" pattern={3}>
                <p className="white-text">Inscrivez vous vite </p>
                <div>
                  <MDBBtn>sfjdhfjd</MDBBtn>
                </div>
              </MDBMask>
            </MDBView>



             <MDBCol md="4" className="bg5">
            <MDBView>
              <img
                src="https://image.freepik.com/photos-gratuite/homme-elegant-assis-dans-salon-coiffure_1157-20487.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" pattern={3}>
                <p className="white-text">Chercher un salon </p>
              </MDBMask>
            </MDBView>
          </MDBCol>

           src="https://image.freepik.com/vecteurs-libre/coiffeur-au-loft-barbershop-illustration-vie-ville-hipster_76597-160.jpg"

           https://image.freepik.com/vecteurs-libre/ensemble-icones-coiffure-hommes_1284-14388.jpg
            */
