import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {createRef} from 'react';

interface IProps {}
interface IState {
  longitude: number;
  latitude: number;
  currentAddress: {};
  flatArea: string;
  area: string;
  pincode: string;
  marker: {
    latitude: number;
    longitude: number;
  };
}

// bdc_d9f80095ebae411b9e1cfb0549816d5a
export default class Maps extends Component<IProps, IState> {
  mapRef: any;
  constructor(props: IProps) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      currentAddress: {},
      flatArea: '',
      area: '',
      pincode: '',
      marker: {
        latitude: 0,
        longitude: 0,
      },
    };
    this.mapRef = createRef();
  }

  handleLocation = () => {
    Geolocation.getCurrentPosition(position => {
      this.setState({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  };

  componentDidMount(): void {
    this.handleLocation();
    // fetch(
    //   `https://api-bdc.net/data/reverse-geocode?latitude=${this.state.latitude}&longitude=${this.state.longitude}&localityLanguage=en&key=bdc_1c3a247478a549eea26caaacc94a0502`,
    // )
    //   .then(data => {
    //     return data.json();
    //   })
    //   .then(val => console.log(val));
  }

  location = async (coords: any) => {
    const address = await this.mapRef.current.addressForCoordinate({
      longitude: coords.longitude,
      latitude: coords.latitude,
    });
    // console.log(address, 'current address');

    this.setState({currentAddress: {address: address},latitude:coords.latitude,longitude:coords.longitude});
  };

  render() {
    // console.log(this.state.latitude,this.state.longitude,"snasvsav")
    // console.log(this.state.currentAddress, 'djkbdj');
    return (
      <View style={styles.container}>
        <MapView
        showsUserLocation = {true}
          ref={this.mapRef}
          provider={'google'} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state?.latitude,
            longitude: this.state?.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onPress={event => {
            this.location(event.nativeEvent.coordinate);
            console.log(
              event.nativeEvent.coordinate.latitude,
              event.nativeEvent.coordinate.longitude,
              'address',
            );
          }}>
          <Marker
        
            onDragEnd={e => {
            //   this.setState({
            //     latitude: e.nativeEvent.coordinate.latitude,
            //     longitude: e.nativeEvent.coordinate.longitude,
            //     marker: {
            //       latitude: e.nativeEvent.coordinate.latitude,
            //       longitude: e.nativeEvent.coordinate.longitude,
            //     },
            //   });

            this.setState({
                marker :  {
                    latitude:e.nativeEvent.coordinate.latitude,
                    longitude:e.nativeEvent.coordinate.longitude
                }
            })
              console.log('dragEnd', e.nativeEvent.coordinate);
              this.location(e.nativeEvent.coordinate)
            }}
            draggable
            coordinate={{
              latitude: this.state.latitude?this.state.latitude  :  this.state.marker.latitude,
              longitude: this.state.longitude?this.state.longitude  :  this.state.marker.longitude,
            }} 
            // onTouchMove={() => }
          />
        </MapView>

        <View>
          <View style={styles.inputFiled}>
            <TextInput
              style={{paddingHorizontal: 20, paddingTop: 15}}
              placeholder="Flat area"
              onChangeText={e => this.setState({flatArea: e})}
              value={
                this.state.flatArea
                  ? this.state.currentAddress
                  : this.state.currentAddress?.address?.thoroughfare
              }
            />
          </View>
          <View style={styles.inputFiled}>
            <TextInput
              style={{paddingHorizontal: 20, paddingTop: 15}}
              placeholder="Area"
              onChangeText={e => this.setState({area: e})}
              value={
                this.state.area
                  ? this.state.currentAddress
                  : this.state.currentAddress?.address?.country
              }
            />
          </View>
          <View style={styles.inputFiled}>
            <TextInput
              style={{paddingHorizontal: 20, paddingTop: 15}}
              placeholder="Pincode"
              onChangeText={e => this.setState({pincode: e})}
              value={
                this.state.pincode.length 
                  ? this.state.currentAddress
                  : this.state.currentAddress?.address?.postalCode
              }
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => console.log('clicked')}>
              <Text style={styles.btnText}>Add data</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  btnContainer: {
    width: 320,
    height: 70,
    borderRadius: 60,
    alignItems: 'center',
    backgroundColor: '#F62B2A',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 18,
    color: '#FFFFFF',
  },
  inputFiled: {
    width: 320,
    height: 60,
    borderRadius: 60,
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: 25,
  },
  inputText: {
    paddingHorizontal: 60,
    paddingTop: 20,
    color: '#18161B',
    fontSize: 16,
    fontWeight: '500',
    textAlignVertical: 'top',
  },
});