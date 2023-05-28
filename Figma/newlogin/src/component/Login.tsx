/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  navigation: any;
}

export default class Login extends Component<IProps> {
  navigation: any;
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container2}>
        <View style={{flex: 3}}>
          <View style={styles.container}>
            <ImageBackground
              source={require('../assest/images/bg.png')}
              style={styles.image}>
              <View>
                <Text style={styles.logintext}>Login</Text>
                <Text style={styles.textWel}>Welcome Back!</Text>
              </View>
            </ImageBackground>
            <Image
              source={require('../assest/images/img1.png')}
              style={styles.img2}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 15,
              borderBottomWidth: 0.4,
              width: 350,
            }}>
            <View
              style={{
                // borderWidth: 1,
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png',
                }}
                style={{
                  height: 28,
                  width: 28,
                  borderRadius: 28 / 2,
                  marginRight: 10,
                }}
              />
              <Text style={{color: 'black', fontSize: 18, marginRight: 5}}>
                +91
              </Text>
              <AntDesign name="caretdown" size={12} color="#808080" />
            </View>

            <TextInput
              placeholder="mobile no"
              style={{
                width: '60%',
                marginLeft: 15,
                color: 'black',
              }}
            />
            <View style={{position: 'relative', right: 35}}>
              <Ionicons name="call" size={20} color="#808080" />
            </View>
          </View>

          <View style={styles.passwordContainer}>
            <Text style={styles.passText}>Passcode</Text>
            <View style={styles.passcodeInput}>
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
              <TextInput
                secureTextEntry={true}
                style={styles.inputField}
                maxLength={1}
                placeholder="*"
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Passcode</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', marginTop: -40}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <View>
                <View style={styles.radioBtn}>
                  <View style={styles.innerRadioBtn} />
                </View>
              </View>
              <Text style={{marginLeft: 10}}>Customer</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <View>
                <View style={styles.radioBtn2}>
                  <View style={styles.innerRadioBtn2} />
                </View>
              </View>
              <Text style={{marginLeft: 10}}>Seller</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',

                alignContent: 'center',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: '#161A1d',
                  fontWeight: '600',
                  fontSize: 18,
                  marginTop: 20,
                }}>
                Register now?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
  },
  container: {
    marginTop: -80,
  },
  image: {
    // position: 'absolute',
    height: 400,
    width: 400,
  },
  img2: {
    height: 380,
    width: 200,
    position: 'absolute',
    right: 0,
    top: 100,
  },

  logintext: {
    color: 'white',
    position: 'absolute',
    top: 230,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 34,
  },
  textWel: {
    color: 'white',
    position: 'absolute',
    top: 280,
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 18,
  },
  passcodeInput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  passwordContainer: {
    marginVertical: 15,
  },
  inputField: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    fontSize: 28,
    textAlign: 'center',

    // paddingHorizontal: 15,
  },
  passText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#161A1D',
    marginHorizontal: 18,
    marginBottom: 15,
  },
  forgotText: {
    color: '#DF201F',
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
    marginTop: 50,
    // position: 'absolute',
    top: -50,
    right: 22,
    fontFamily: 'Montserrat Alternates',
  },
  radioBtn: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DF201F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginLeft: 25,
  },
  innerRadioBtn: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: '#DF201F',
  },
  radioBtn2: {
    height: 18,
    width: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginLeft: 25,
  },
  innerRadioBtn2: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: 'grey',
  },
  loginBtn: {
    // borderWidth: 1,
    padding: 18,
    marginTop: 18,
    textAlign: 'center',
    width: '85%',
    marginHorizontal: 25,
    borderRadius: 50,
    backgroundColor: '#94CD00',
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
});
