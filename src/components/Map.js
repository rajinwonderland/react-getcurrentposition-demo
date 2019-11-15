import React, { Component } from "react";
import MapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmFqaW53b25kZXJsYW5kIiwiYSI6ImNqeDByZDZlYjAyMXEzeXFwcmQ4dW5hNXcifQ.Tla-MQqdd3Bs8pbra2No2g"; // Set your mapbox token here

// const geolocateStyle = {
//   position: "absolute",
//   top: 0,
//   left: 0
// };

export default class Map extends Component {
  state = {
    viewport: {
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      zoom: 3,
      bearing: 0,
      pitch: 0
    }
  };

  static defaultProps = {
    latitude: 37.8,
    longitude: 96
  };

  _onViewportChange = viewport => this.setState({ viewport });
  render() {
    const { viewport } = this.state;
    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      />
    );
  }
}
