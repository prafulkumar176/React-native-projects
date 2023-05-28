import React, {Component} from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import {Provider} from 'react-redux';

// import SplashScreen from './CartComponent/SplashSCreen';

// import store from './components/Redux/Store/store';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import bottomTab from './CartComponent/bottomTab';
// import BottomTab from './CartComponent/bottomTab';
import PhoneSignIn from './Auth/PhoneAuth';

// const Tab = createBottomTabNavigator();
// const stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <NavigationContainer>
      //     <stack.Navigator screenOptions={{headerShown: false}}>
      //       <stack.Screen name="splashscreen" component={SplashScreen} />
      //       <stack.Screen name="BottomTab" component={BottomTab} />
      //     </stack.Navigator>
      //   </NavigationContainer>
      // </Provider>
      <PhoneSignIn />
    );
  }
}
