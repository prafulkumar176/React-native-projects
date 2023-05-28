/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */

import React, {Component} from 'react';
import {
  Appearance,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {data1} from '../assests/Newdata';
import data from '../DATA.json';

interface IState {
  Count: number;
}

interface IProps {
  id: number;
  HeadingName: string;
  description: string;
  btnText: string;
  colorScheme: any;
}
// const theme = useColorScheme();

export default class Screen1 extends Component<IProps, IState> {
  static colorScheme = Appearance.getColorScheme();
  state: IState = {
    Count: 1,
  };

  handleChangePage = () => {
    if (this.state.Count === 3) {
      this.setState({Count: 1});
    } else {
      this.setState({Count: this.state.Count + 1});
    }
  };
  render() {
    // console.log(Screen1.colorScheme);
    console.log(data1);
    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor={Screen1.colorScheme === 'dark' ? 'black' : '#ffffff'}
          hidden={false}
          barStyle={
            Screen1.colorScheme === 'dark' ? 'dark-content' : 'light-content'
          }
        />
        <Text style={Styles.headingText}>Iqrv</Text>

        <ImageBackground
          source={data1[this.state.Count].image}
          style={Styles.image}
          resizeMode="contain">
          <View style={Styles.box1} />
          <View style={Styles.box2} />
          <View style={Styles.box3} />
        </ImageBackground>
        {/* {this.state.Count === 1 ? (
        ) : (
          ''
        )}

        {this.state.Count === 2 ? (
          <ImageBackground
            source={require('../assests/Images/img2.png')}
            style={Styles.image}
            resizeMode="contain">
            <View style={Styles.box1} />
            <View style={Styles.box2} />
            <View style={Styles.box3} />
          </ImageBackground>
        ) : (
          ''
        )}

        {this.state.Count === 3 ? (
          <ImageBackground
            //   source={`${data.User[this.state.Count].image}`}
            source={require('../assests/Images/img3.png')}
            style={Styles.image}
            resizeMode="contain">
            <View style={Styles.box1} />
            <View style={Styles.box2} />
            <View style={Styles.box3} />
          </ImageBackground>
        ) : (
          ''
        )}

        {this.state.Count === 4 ? (
          <ImageBackground
            //   source={`${data.User[this.state.Count].image}`}
            source={require('../assests/Images/img4.png')}
            style={Styles.image}
            resizeMode="contain">
            <View style={Styles.box1} />
            <View style={Styles.box2} />
            <View style={Styles.box3} />
          </ImageBackground>
        ) : (
          ''
        )} */}

        <View
          style={{
            marginTop: 100,
            borderWidth: 1,
            height: 260,
            padding: 20,
            backgroundColor:
              Screen1.colorScheme === 'dark' ? '#ffffff' : '#000000',
          }}>
          <Text style={Styles.textcardheading}>
            {data.User[this.state.Count - 1].HeadingName}
          </Text>
          <Text style={Styles.descriptionText}>
            {data.User[this.state.Count - 1].description}{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 50,
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={
                  this.state.Count === 1
                    ? {
                        width: 30,
                        height: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                    : {
                        width: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                }></View>
              <View
                style={
                  this.state.Count === 2
                    ? {
                        width: 30,
                        height: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                    : {
                        width: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                }></View>
              <View
                style={
                  this.state.Count === 3
                    ? {
                        width: 30,
                        height: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                        // display:
                        //   Screen1.colorScheme === 'dark' ? 'none' : 'none',
                      }
                    : {
                        width: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                }></View>

              <View
                style={
                  this.state.Count === 4
                    ? {
                        width: 30,
                        height: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                        display:
                          Screen1.colorScheme === 'dark' ? 'none' : 'none',
                      }
                    : {
                        width: 10,
                        borderRadius: 5,
                        borderWidth: 1,
                        backgroundColor:
                          Screen1.colorScheme === 'dark'
                            ? '#7F5AF0'
                            : '#2CB67D',
                        marginHorizontal: 2.5,
                      }
                }></View>
            </View>

            {this.state.Count === 4 ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  justifyContent: 'space-around',
                  alignContent: 'flex-start',
                  width: 150,
                }}>
                <TouchableOpacity style={Styles.Signup}>
                  <Text style={Styles.signText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={Styles.btn}
                  onPress={() => this.setState({Count: 0})}>
                  <Text style={Styles.btnText}>Login </Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={Styles.btn}
                onPress={this.handleChangePage}>
                <Text style={Styles.btnText}>
                  {data.User[this.state.Count].btnText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Screen1.colorScheme === 'dark' ? '#000000' : '#ffffff',
  },
  image: {
    width: 370,
    height: 325,
    top: 50,
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Screen1.colorScheme === 'dark' ? '#FFFFFE' : '#16161A',
  },
  box1: {
    width: 120,
    height: 120,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#202027' : '#EDEDED',
    position: 'absolute',
    left: 35,
    zIndex: -1,
    top: 12,
  },
  box2: {
    width: 58,
    height: 58,
    // borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    left: 274,
    top: 20,
    zIndex: -1,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#202027' : '#EDEDED',
  },
  box3: {
    width: 36,
    height: 36,
    // borderWidth: 1,
    position: 'absolute',
    backgroundColor: Screen1.colorScheme === 'dark' ? '#202027' : '#EDEDED',
    left: 267,
    top: 150,
    borderRadius: 10,
    zIndex: -1,
  },
  textcardheading: {
    fontSize: 34,
    fontWeight: '600',
    color: Screen1.colorScheme === 'dark' ? '#16161A' : '#FFFFFE',
  },
  descriptionText: {
    color: '#94A1B2',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },

  btn: {
    width: 162,
    height: 50,
    borderRadius: 10,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  dot1: {
    width: 30,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
  },
  dot2: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginLeft: 5,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
  },
  dot3: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    marginLeft: 5,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
  },
  signText: {
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 13,
    color: 'white',
  },
  Signup: {
    width: 162,
    height: 50,
    borderRadius: 10,
    backgroundColor: Screen1.colorScheme === 'dark' ? '#7F5AF0' : '#2CB67D',
    color: 'white',
    marginLeft: -200,
  },
});
