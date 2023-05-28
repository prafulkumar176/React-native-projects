import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class App extends Component {
  state = {
    text: '',
  };
  handleSendData = () => {
    firestore()
      .collection('Users')
      .add({
        name: this.state.text,
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  render() {
    return (
      <View>
        {/* <TextInput
          style={{width: '100%', borderWidth: 1}}
          onChangeText={e => this.setState({text: e})}
        /> */}
        {/* <Button title="send data" onPress={() => this.handleSendData()} /> */}

        <Text>Hello world</Text>
      </View>
    );
  }
}
