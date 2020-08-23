import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
const mapStyles = {
  width: "70%",
  height: "70%",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "YOUR_GOOGLE_API_KEY_GOES_HERE",
})(MapContainer);
