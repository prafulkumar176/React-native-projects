/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontSize: 36,
            fontWeight: '400',
            color: 'black',
            marginTop: 350,
          }}>
          Iqrv
        </Text>
      </View>
    );
  }
}
