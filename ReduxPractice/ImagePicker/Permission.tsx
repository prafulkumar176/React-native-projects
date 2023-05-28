import React, {Component} from 'react';
import {Linking} from 'react-native';
import {
  Alert,
  Button,
  PermissionsAndroid,
  // PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface IProps {
  navigation: any;
}
// import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if (granted === PermissionsAndroid.RESULTS.granted) {
//       console.log('You can use the camera');
//     } else {
//       console.log('Camera permission denied');
//     }
//   } catch (err) {
//     console.warn(err);
//   }PermissionsAndroid.PERMISSIONS.CAMERA,
//   {
// };

// const handleAcess = () => {
//   check(PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION)
//     .then(result => {
//       switch (result) {
//         case RESULTS.UNAVAILABLE:
//           console.log(
//             'This feature is not available (on this device / in this context)',
//           );
//           break;o
//         case RESULTS.DENIED:PERMISSIONSctions are possible');
//           break;
//         case RESULTS.GRANTED:
//           console.log('The permission is granted');
//           break;
//         case RESULTS.BLOCKED:
//           console.log('The permission is denied and not requestable anymore');
//           break;
//       }
//     })
//     .catch(error => {
//       console.log(error.message, 'error');
//     });o
// };

// const location = () => {
//   request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {
//    return ()
//   });
// };

// const requestPermission = async () => {
//   try {
//     const grant = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.CAMERA,
//       {
//         title: 'Cool Photo App Camera Permission',
//         message:
//           'Cool Photo App needs access to your camera ' +
//           'so you can take awesome pictures.',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     if(grant){

//     }
//   } catch (error) {
//     console.log(error, 'error');
//   }
// };
class PermissionSession extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.props.navigation.navigate('CameraScreen2');
      } else {
        Linking.openSettings();
      }
    } catch (error) {
      Alert.alert('Permisssion  denied', 'Go to home settings');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>Try permissions</Text>
        <Button
          title="request permissions for camera"
          onPress={() => this.requestPermission()}
        />

        <Button title="GRant permissions" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
});

export default PermissionSession;
