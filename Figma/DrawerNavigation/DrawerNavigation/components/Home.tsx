/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import MainPage from './MainPage';
import Settings from './Settings';
import Feather from 'react-native-vector-icons/Feather';

interface IProps {
  navigation: any;
}

const Tab = createBottomTabNavigator();

const handleOptins = {
  title: 'Home',
  tabBarIcon: () => <Feather name="menu" color="black" size={24} />,
};
export default class Home extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <Tab.Navigator
        screenOptions={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({size, color}) => {
            return <Feather name="trash" color={color} size={size} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={MainPage} options={handleOptins} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarBadge: 25,
            tabBarBadgeStyle: {color: 'white', backgroundColor: 'red'},
          }}
        />
      </Tab.Navigator>
    );
  }
}
