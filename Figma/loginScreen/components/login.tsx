/* eslint-disable react/self-closing-comp */
import React, {Component} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {}

interface IState {
  email: '';
  password: string;
  id: string;
  alldetails: any[];
  requiredField: boolean;
}

export default class LoginScreen extends Component<IProps, IState> {
  state: IState = {
    email: '',
    password: '',
    id: '',
    alldetails: [],
    requiredField: false,
  };
  handleEmail = (e: any) => {
    this.setState({email: e});
  };
  handlePassword = (e: any) => {
    this.setState({password: e});
  };

  handleLogin = () => {
    let Obj = {
      email: this.state.email,
      password: this.state.password,
      id: Date.now(),
    };
    // if (this.state.email === '' && this.state.password === '') {
    //   Alert.alert('Please enter the input fields');
    // } else {
    // }
    this.setState(() => ({
      alldetails: [Obj],
      email: '',
      password: '',
      requiredField: true,
    }));
  };
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.logintext}>Log in</Text>
        <View style={styles.inputFields}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={this.handleEmail}
            value={this.state.email}
          />
          <Text style={styles.mail}>
            <Feather name="mail" size={20} color="black" />
          </Text>
          {this.state.requiredField && this.state.email === '' ? (
            <Text style={styles.requiredText}>This is required field</Text>
          ) : (
            ''
          )}
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={this.handlePassword}
            value={this.state.password}
          />
          <Text style={{position: 'absolute', top: 85, left: 38}}>
            <Feather name="lock" size={20} color="black" />
          </Text>
          {this.state.requiredField && this.state.password === '' ? (
            <Text style={styles.requiredText}>This is required field</Text>
          ) : (
            ''
          )}
        </View>
        <View style={styles.loginBtn}>
          <TouchableOpacity onPress={this.handleLogin}>
            <Text style={styles.text}>Log in to your account </Text>
          </TouchableOpacity>
          <Text style={{position: 'absolute', right: 65, top: 14}}>
            <AntDesign name="arrowright" size={20} color="white" />
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>
            I dont have account. <Text style={styles.signupText}>Sign Up</Text>
          </Text>
        </View>
        <View
          style={[
            styles.roundItem1,
            {transform: [{rotateY: '45deg'}, {rotateZ: '-60deg'}]},
          ]}></View>
        <View style={styles.roundItem2}></View>
        <View
          style={[
            styles.roundItem3,
            {
              transform: [{rotateY: '60deg'}, {rotateZ: '60deg'}],
            },
          ]}></View>
        <View
          style={[
            styles.roundItem4,
            {transform: [{rotateY: '45deg'}, {rotateZ: '-60deg'}]},
          ]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 150,
    opacity: 5,
  },
  logintext: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginHorizontal: 32,
    opacity: 5,
  },
  input: {
    height: 48,
    margin: 12,
    backgroundColor: '#f2f2f2',
    padding: 12,
    width: '85%',
    marginVertical: 8,
    borderRadius: 8,
    fontWeight: '500',
    paddingLeft: 45,
    opacity: 5,
  },
  inputFields: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    opacity: 5,
  },
  loginBtn: {
    backgroundColor: '#ff6c62',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 8,
    opacity: 5,
  },
  text: {
    padding: 14,
    justifyContent: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    opacity: 5,
  },
  footer: {
    marginVertical: 36,
    marginHorizontal: 30,
    opacity: 5,
  },
  signupText: {
    color: '#b9b3fb',
    fontWeight: 'bold',
    opacity: 5,
  },
  requiredText: {
    color: 'red',
    marginLeft: '-50%',
    opacity: 5,
  },
  mail: {
    position: 'absolute',
    top: 22,
    left: 38,
  },
  lock: {
    position: 'absolute',
    top: 85,
    left: 38,
  },
  roundItem1: {
    position: 'absolute',
    top: '-30%',
    left: 220,
    backgroundColor: '#ffe1cd',
    width: 90,
    height: 100,
    borderRadius: 200 / 2,
  },
  roundItem2: {
    left: 220,
    top: 120,
    backgroundColor: '#fff3ec',
    width: 400,
    height: 350,
    borderRadius: 280 / 2,
    zIndex: -1,
    position: 'absolute',
  },
  roundItem3: {
    position: 'absolute',
    width: 350,
    height: 350,
    backgroundColor: '#FFF7E3',
    opacity: 1,
    borderRadius: 350 / 2,
    top: 250,
    zIndex: -1,
    left: '-40%',
  },
  roundItem4: {
    position: 'absolute',
    width: 100,
    height: 150,
    backgroundColor: '#FFEDEC',
    opacity: 1,
    borderRadius: 150 / 2,
    top: '-38%',
    left: '-12%',
    zIndex: -1,
  },
});
