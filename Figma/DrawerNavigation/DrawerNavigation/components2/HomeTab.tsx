import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Home from './Home';
import EmptyScreen from './Empty';

const Tab = createBottomTabNavigator();

export default class HomeTabs extends Component {
  render() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Feed" component={EmptyScreen} />
        <Tab.Screen name="Notifications" component={EmptyScreen} />
      </Tab.Navigator>
    );
  }
}
