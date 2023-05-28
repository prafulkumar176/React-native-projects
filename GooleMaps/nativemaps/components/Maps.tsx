import {Text, View} from 'react-native';
import React, {Component} from 'react';
import MapView from 'react-native-maps';

export class Maps extends Component {
  render() {
    return (
      <View>
        <Text>Maps</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

export default Maps;
