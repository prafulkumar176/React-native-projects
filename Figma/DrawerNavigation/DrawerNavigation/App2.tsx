import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import HomeTabs from './components2/HomeTab';
import EmptyScreen from './components2/Empty';

const Stack = createNativeStackNavigator();

export default class App2 extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Profile" component={EmptyScreen} />
          <Stack.Screen name="Settings" component={EmptyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
