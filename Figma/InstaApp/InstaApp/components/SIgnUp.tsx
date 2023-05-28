/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
  navigate: any;
  navigation: any;
}
interface IState {
  name: string;
  email: string;
  password: any;
  data: any[];
}

const USER_1: any = {
  name: 'Tom',
  age: 20,
  traits: {
    hair: 'black',
    eyes: 'blue',
  },
};

export default class SignUp extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {name: '', email: '', password: '', data: []};
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({data: response.data});
      });
  }

  handleName = (e: any) => {
    this.setState({name: e});
  };

  handleemail = (e: any) => {
    this.setState({email: e});
  };

  handlepassword = (e: any) => {
    this.setState({password: e});
  };
  storeData = async () => {
    try {
      const jsonValue = JSON.stringify({
        normalName: this.state.name,
        Normalemail: this.state.email,
        Normalpassword: this.state.password,
      });

      const jsonValue2 = JSON.stringify(USER_1);
      await AsyncStorage.setItem('InputData', jsonValue);
      await AsyncStorage.mergeItem('InputData', jsonValue2);
    } catch (e) {
      console.log(e, 'dsgsfga');
    }
  };
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('InputData');
    } catch (e) {
      // remove error
    }

    console.log('Done.');
  };

  handleSignUp = () => {
    console.log('values');

    // let emailRegex: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let passwordregex: any =
    //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // if (
    //   emailRegex.test(this.state.email) &&
    //   passwordregex.test(this.state.password)
    // ) {
    //   this.props.navigation.navigate('SignIn');
    //   this.setState({name: '', email: '', password: ''});
    // } else {
    //   Alert.alert('Invaild', 'Enter a proper email or password');
    // }

    // fetch('https://reqres.in/api/users?page=1', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: this.state.name,
    //     email: this.state.email,
    //     id: this.state.data.length + 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // }).then(response => {
    //   console.log(response);
    // });
    this.storeData();
  };
  handleAsyncshowData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('InputData');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue, 'sfbsdbrfa');
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    // console.log(this.state);
    return (
      <SafeAreaView>
        <ScrollView>
          <StatusBar animated={true} backgroundColor="#141517" hidden={false} />
          <View>
            <ImageBackground
              source={require('../Assests/img1.png')}
              style={styles.image}>
              <Text style={styles.loginText}>Sign up</Text>

              <View style={styles.middleContainer}>
                <View style={{marginBottom: 28}}>
                  <View>
                    <Text
                      numberOfLines={2}
                      style={{
                        color: 'white',
                        // borderWidth: 1,
                        marginHorizontal: 20,
                        marginBottom: 8,
                        fontSize: 14,
                        fontWeight: '400',
                      }}>
                      Looks like you don't have an account.{'\n'}Let's create a
                      new account for you
                    </Text>
                    <TextInput
                      placeholder="Name"
                      style={styles.input}
                      onChangeText={this.handleName}
                    />
                    <TextInput
                      placeholder="Email"
                      style={styles.input}
                      onChangeText={this.handleemail}
                    />
                    <TextInput
                      placeholder="Password"
                      style={styles.input}
                      secureTextEntry={true}
                      onChangeText={this.handlepassword}
                    />
                  </View>

                  <View>
                    <Text
                      style={{
                        color: 'white',
                        marginHorizontal: 18,
                        fontSize: 14,
                        fontWeight: '400',
                        marginBottom: 5,
                        marginTop: 12,
                      }}>
                      By selecting Create Account below, I agree to{' '}
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#CDE7BE',
                        }}>
                        {'\n'}Terms of Services & Privacy Policy
                      </Text>
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.continueContainer}
                    onPress={this.handleSignUp}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.continueContainer}
                    onPress={this.removeValue}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                  </TouchableOpacity>

                  <Text style={styles.signUpText}>
                    Already have an account ?
                    <TouchableOpacity
                      onPress={() => this.handleAsyncshowData()}>
                      <Text style={styles.signUpText2}>Log in</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginTop: 0,
  },
  loginText: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    position: 'absolute',
    top: 170,
    left: 12,
  },
  input: {
    height: 48,
    width: 348,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
    paddingLeft: 18,
    color: 'white',
  },
  middleContainer: {
    backgroundColor: '#313333',
    marginTop: 220,
    borderWidth: 1,
    borderColor: '#313333',
    margin: 5,
    borderRadius: 8,
    paddingTop: 20,
    opacity: 0.8,
    marginBottom: 100,
  },
  continueContainer: {
    height: 48,
    width: 348,
    backgroundColor: '#CDE7BE',
    padding: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
    borderRadius: 8,
    // borderWidth: 1,
    // borderColor: 'white',
  },
  createAccountText: {
    position: 'relative',
    top: -5,
    // borderWidth: 1,
    height: 25,
    textAlign: 'center',
    color: '#313333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotText: {
    color: '#CDE7BE',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
  },
  loginBtn: {
    height: 48,
    width: 348,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  text: {
    color: '#313333',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    marginTop: 5,
  },
  signUpText2: {
    color: '#CDE7BE',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    position: 'relative',
    top: 4,
    left: 8,
  },
});
