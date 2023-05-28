import React, {Component} from 'react';
import {Text, View} from 'react-native';

interface numberfield {
  count: number;
}
export default class Profile extends Component<numberfield> {
  state: numberfield = {
    count: 25,
  };
  render() {
    return (
      <View>
        <Text> Profile page{this.state.count}</Text>
      </View>
    );
  }
}
