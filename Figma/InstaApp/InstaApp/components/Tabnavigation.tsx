/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import HomeScreen1 from './HomeScreen1';
// import Loginscreen from './Loginscreen';

import Search from './Search';
import Explore from './Explore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default class Tabnavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            // height: 40,
            paddingHorizontal: 5,
            paddingTop: 0,
            height: 55,
            paddingBottom: 8,
            backgroundColor: '#000000',

            borderTopWidth: 0,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Explore') {
              iconName = 'search';
            } else iconName = 'md-library-outline';
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: '#CDE7BE',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen1}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Library"
          component={Search}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }
}
