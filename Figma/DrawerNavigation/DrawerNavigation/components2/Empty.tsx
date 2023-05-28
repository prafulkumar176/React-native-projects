import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class EmptyScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{color: 'black'}}> Empty </Text>
      </View>
    );
  }
}
