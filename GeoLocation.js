import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

class GeolocationExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = Geolocation.watchPosition(
      (position) => {
        console.log('position', position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 1000, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    
    );
  }
}

export default GeolocationExample;