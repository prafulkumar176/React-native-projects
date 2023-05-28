import React, {Component} from 'react';

// import Drawer from './components/Drawer';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Notification from './components/Notification';
import Home from './components/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home2 from './components/MainPage';
import Stackbar from './components/Stackbar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

Ionicons;

const Drawer = createDrawerNavigator();

const handleIcon = {
  title: 'Home',
  drawerIcon: () => <Feather name="home" color="black" size={20} />,
};
const notification = {
  title: 'Notification',
  drawerIcon: () => <Ionicons name="notifications" color={'black'} size={20} />,
};

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: false,
              drawerType: 'front',
              lazy: false,
              drawerActiveTintColor: 'green',
              // drawerActiveBackgroundColor: 'pink',
              // drawerHideStatusBarOnOpen: true,
            }}>
            <Drawer.Screen
              name="Home"
              component={Stackbar}
              options={handleIcon}
            />
            <Drawer.Screen
              name="Notifications"
              component={Notification}
              // options={{headerShown: false}}
              options={notification}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
