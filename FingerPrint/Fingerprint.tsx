import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

export default class Fingerprint extends Component {
  rnBiometrics = new ReactNativeBiometrics();

  handledata = () => {
    this.rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;
        console.log(resultObject, 'resultObject');

        if (success) {
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  componentDidMount(): void {
    this.handledata();
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
