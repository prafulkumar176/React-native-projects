import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';

import Tabnavigation from './components/Tabnavigation';
import Loginscreen from './components/Loginscreen';
import SignUp from './components/SIgnUp';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={Loginscreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="HomeScreen"
            component={Tabnavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
