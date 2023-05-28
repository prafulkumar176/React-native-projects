/* eslint-disable react-native/no-inline-styles */
// import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

import React, {Component} from 'react';
import {FlatList, PermissionsAndroid, Text, View} from 'react-native';

interface IState {
  allcontacts: any[];
}
export default class App extends Component {
  state: IState = {
    allcontacts: [],
  };
  handleContacts = () => {
    Contacts.getAll()
      .then((contacts: any) => {
        console.log(JSON.stringify(contacts), 'contacts');
        this.setState({allcontacts: contacts});
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  requestContactPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'contact App contact Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        this.handleContacts();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentDidMount(): void {
    this.requestContactPermission();
  }
  render() {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
            marginBottom: 30,
            marginTop: 12,
          }}>
          CONTACT LIST APP
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 25,
            }}>
            <View>
              <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
                Contact Names
              </Text>
            </View>
            <View>
              <Text style={{color: 'black', fontWeight: '800', fontSize: 15}}>
                Contact Number
              </Text>
            </View>
          </View>
          <FlatList
            data={this.state.allcontacts}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    // marginLeft: 40,
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                  }}>
                  <View>
                    <Text style={{color: 'red'}}>{item.displayName}</Text>
                  </View>
                  <FlatList
                    data={item.phoneNumbers}
                    renderItem={({item}) => {
                      return (
                        <View style={{marginLeft: 50}}>
                          <Text style={{color: 'black'}}>{item.number}</Text>
                        </View>
                      );
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}
