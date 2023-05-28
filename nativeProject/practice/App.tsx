import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import React, {Component} from 'react';
import Profile from './components/profile';
import Settings from './components/settings';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Profile">
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'ProfilePage',
            }}
          />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
