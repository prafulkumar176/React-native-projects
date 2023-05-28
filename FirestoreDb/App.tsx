import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
interface IProps {
  // handleTimeOut: any;
}

interface IState {
  isavailable: boolean;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  state: IState = {
    isavailable: false,
  };

  handleData = () => {
    firestore()?.collection('Users').add({
      name: 'Ada Lovelace',
      age: 30,
    });
  };

  handleTimeOut = () => {
    setTimeout(() => {
      this.setState({
        isavailable: true,
      });
    }, 1000);
  };

  componentDidMount() {
    this.handleTimeOut();
    this.handleData();
  }
  render() {
    return (
      <SafeAreaView>
        <Text>Hello world</Text>
        <View testID="app">
          {this.state.isavailable ? (
            <Text>Data is available</Text>
          ) : (
            <Text>LOADING.......</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
