/* eslint-disable react-native/no-inline-styles */
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {Component} from 'react';
import {Image, ScrollView} from 'react-native';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  navigate: any;
  navigation: any;
}
interface IState {
  email: string;
  data: any[];
  inputValue: any;
  isTextInvaild: boolean;
  currentUsers: any[];
}

export default class Loginscreen extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      data: [],
      inputValue: '',
      isTextInvaild: false,
      currentUsers: [],
    };
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({data: response.data});
        // console.log(response);
      });
    GoogleSignin.configure();
  }

  handleTextInput = (e: any) => {
    this.setState({inputValue: e});
  };
  handleNavigationToHome = () => {
    let emailRegex: any = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    this.state.data.map((v: any) => {
      if (
        v.email.includes(this.state.inputValue) &&
        emailRegex.test(this.state.inputValue)
      ) {
        this.props.navigation.navigate('HomeScreen');
        // this.setState({isTextInvaild: false});
      } else {
        this.setState({isTextInvaild: true});
      }
    });

    // if (emailRegex.test(this.state.inputValue)) {
    //   this.state.data.map((v: any) => {
    //     if (v.email.includes(this.state.inputValue)) {
    //       this.props.navigation.navigate('HomeScreen');
    //       this.setState({isTextInvaild: false});
    //     } else {
    // this.setState({isTextInvaild: true});
    //     }
    //   });
    // } else {
    //   this.setState({isTextInvaild: true});
    // }
    this.setState({inputValue: ''});
    this.setState({isTextInvaild: true});
  };

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo: any = await GoogleSignin.signIn();
      console.log(userInfo);

      this.setState({currentUsers: userInfo.user});
      // console.log(userInfo);
      // if (userInfo.user) {
      //   this.props.navigation.navigate('HomeScreen');
      // }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
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
              <Text style={styles.loginText}>Log in</Text>

              <View style={styles.middleContainer}>
                <View>
                  <View>
                    <TextInput
                      placeholder="Email"
                      style={styles.input}
                      onChangeText={this.handleTextInput}
                      value={this.state.inputValue}
                    />
                    {this.state.isTextInvaild ? (
                      <Text
                        style={{
                          color: 'red',
                          marginLeft: 20,
                          fontSize: 15,
                          marginTop: 5,
                        }}>
                        Invaild Email
                      </Text>
                    ) : (
                      ''
                    )}

                    <TouchableOpacity
                      style={styles.continueContainer}
                      onPress={this.handleNavigationToHome}>
                      <Text style={styles.contiueText}>Continue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 18,
                      width: 348,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: 'white',
                      }}
                    />
                    <View>
                      <Text
                        style={{
                          width: 50,
                          textAlign: 'center',
                          color: 'white',
                        }}>
                        Or
                      </Text>
                    </View>
                    <View
                      style={{flex: 1, height: 1, backgroundColor: 'white'}}
                    />
                  </View>
                </View>

                <View style={{marginBottom: 25}}>
                  <View
                    style={{
                      marginTop: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity style={styles.loginBtn}>
                      <Image
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png',
                        }}
                        style={{height: 25, width: 25}}
                      />

                      <Text style={styles.text}>Login with Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.loginBtn}
                      onPress={this.signIn}>
                      <Image
                        source={{
                          uri: 'https://static.vecteezy.com/system/resources/previews/009/469/630/original/google-logo-isolated-editorial-icon-free-vector.jpg',
                        }}
                        style={{height: 25, width: 25, borderRadius: 25 / 2}}
                      />
                      <Text style={styles.text}>Login with Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn}>
                      <Image
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0oB4mcJKRwvUTySReKWZX5l2kqAXzTxMmRMdBFxucWGX_449WCjGYLAa5SgvzGnesg4&usqp=CAU',
                        }}
                        style={{
                          height: 25,
                          width: 25,
                          borderRadius: 25 / 2,
                          backgroundColor: 'black',
                        }}
                      />
                      <Text style={styles.text}>Login with Apple</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.signUpText}>
                    Don't have an account?
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('SignUp')}>
                      <Text style={styles.signUpText2}>Sign up</Text>
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
    left: 25,
  },
  input: {
    height: 48,
    width: 348,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    paddingLeft: 20,
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
    marginBottom: 60,
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
  contiueText: {
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
    flexDirection: 'row',
  },
  text: {
    color: '#313333',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    justifyContent: 'center',
    flex: 1,
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
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
