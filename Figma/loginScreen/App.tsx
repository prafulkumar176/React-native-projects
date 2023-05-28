import React, {Component} from 'react';
import {View} from 'react-native';
// import LoginScreen from './components/login';
import Shoes from './components/shoes';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <LoginScreen /> */}
        <Shoes />
      </View>
    );
  }
}
