import React, {Component} from 'react';
// import MainCounterApp from './components/CounterApp/MainCounterApp';
// import MainTodoApp from './components/TodoApp/MainTodoApp';
import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import WrapperCounter from './components/CounterApp/WrapperCounter';
// import TodoWrapper from './components/TodoApp/TodoWrapper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImagePickers from './ImagePicker/ImagePickers';
import PermissionSession from './ImagePicker/Permission';
import ImagePicker2 from './ImagePicker/ImagePicker2.tsx';

// const Tab = createBottomTabNavigator();

// const counterApp = {
//   title: 'Counter',
//   tabBarIcon : () => {

//   }
// };

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator screenOptions={{headerShown: false}}>
//           <Tab.Screen name="CounterApp" component={WrapperCounter} />
//           <Tab.Screen name="MainTodoApp" component={TodoWrapper} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

const stack = createNativeStackNavigator();

export default class App2 extends Component {
  render() {
    return (
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="permissionScreen">
          <stack.Screen name="permissionScreen" component={PermissionSession} />
          <stack.Screen name="CameraScreen" component={ImagePickers} />
          <stack.Screen name="CameraScreen2" component={ImagePicker2} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}
