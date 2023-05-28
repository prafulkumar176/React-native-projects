import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Login from './src/component/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/component/Home';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <View>
      //   <Text>
      //     <Login />
      //   </Text>
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
