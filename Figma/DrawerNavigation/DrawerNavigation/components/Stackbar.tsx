import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import Notification from './Notification';
import Settings from './Settings';
import Empty from './Empty';
import MainPage from './MainPage';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default class Stackbar extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen name="Tab" component={Home} />
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Empty" component={Empty} />
      </Stack.Navigator>
    );
  }
}
