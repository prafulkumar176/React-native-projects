/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import PhoneAuth from './Auth/PhoneAuth';
// import ImagePickers from './ImagePicker/ImagePickers';
// import Permission from './ImagePicker/Permission';
import {name as appName} from './app.json';
// import PermissionSession from './ImagePicker/Permission';
// import ImagePickers from './ImagePicker/ImagePickers';
import App from './App';
import App2 from './App2';

AppRegistry.registerComponent(appName, () => App2);
