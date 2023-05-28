/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Settings extends Component {
  render() {
    return (
      <View>
        <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          Settings
        </Text>
      </View>
    );
  }
}
