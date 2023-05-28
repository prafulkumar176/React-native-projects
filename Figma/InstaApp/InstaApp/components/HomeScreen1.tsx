/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import UserProfileTemplate from './UserProfileTemplate';
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import data from '../Assests/jsondata.json';
import Cards from './Cards';
// import Tabnavigation from './Tabnavigation';
// import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  Runtime: string;
  Director: string;
  Poster: string;
  MetascoreValue: string;
  Actors: string;
  navigation: any;
  Images: string;
}
interface IState {
  dataItem: any[];
}

export default class HomeScreen1 extends Component<IProps, IState> {
  // State: IState = {
  //   dataItem: [],
  // };

  constructor(props: IProps) {
    super(props);
    this.state = {dataItem: []};
  }

  componentDidMount() {
    fetch('https://reqres.in/api/users?page=1')
      .then(res => {
        return res.json();
      })
      .then(response => {
        // console.log(response);
        this.setState({dataItem: response});
      });
  }

  render() {
    // console.log(this.state.dataItem);
    // console.log(this.props.navigation?.route?.params?.data);
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={styles.text}>Good Afternoon</Text>
              <Image
                source={require('../Assests/img4.png')}
                style={styles.bottomTextIcon}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignIn')}>
              <Image
                source={require('../Assests/img2.png')}
                style={styles.profilePic}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            horizontal
            data={this.state?.dataItem?.data}
            renderItem={(v: any) => (
              <UserProfileTemplate
                first_name={v.item.first_name}
                last_name={v.item.last_name}
                avatar={v.item.avatar}
              />
            )}
          />
          <ScrollView scrollEnabled={true} horizontal>
            <View style={{flexDirection: 'row', height: 50}}>
              <Text style={styles.headerText2}>
                <SimpleLineIcons name="fire" size={16} color="black" />
                {'   '}
                Trending
              </Text>
              <Text style={styles.headerText}>
                <Feather name="book-open" size={18} color="white" />
                {'   '}
                5-Minutes Read
              </Text>
              <Text style={styles.headerText}>
                <Fontisto name="headphone" size={18} color="white" />
                {'   '}
                Quick Restart
              </Text>
            </View>
          </ScrollView>
          <Image
            source={require('../Assests/img3.png')}
            style={{
              height: 190,
              width: 360,
              resizeMode: 'cover',
              marginTop: 18,
              alignItems: 'center',
              marginLeft: 8,
              borderRadius: 10,
            }}
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginTop: 20,
            }}>
            <Text style={styles.treadingText}>Trending</Text>
            <Text style={styles.showText}>
              Show all{'  '}
              <AntDesign name="rightcircle" size={16} color="#CDE7BE" />
            </Text>
          </View>

          <FlatList
            data={data.data2}
            horizontal
            renderItem={({item}) => (
              <Cards
                Runtime={item.Runtime}
                Director={item.Director}
                Poster={item.Poster}
                MetascoreValue={item.Metascore}
                Actors={item.Actors.split(' ')[0]}
                Images={item.Images[0]}
                navigation={undefined}
              />
            )}
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginTop: 20,
            }}>
            <Text style={styles.treadingText}>Trending</Text>
            <Text style={styles.showText}>
              Show all{'  '}
              <AntDesign name="rightcircle" size={16} color="#CDE7BE" />
            </Text>
          </View>

          <FlatList
            data={data.data2}
            horizontal
            renderItem={({item}) => (
              <Cards
                Runtime={item.Runtime}
                Director={item.Director}
                Poster={item.Poster}
                MetascoreValue={item.Metascore}
                Actors={item.Actors.split(',')[0]}
                Images={item.Images[1]}
                navigation={undefined}
              />
            )}
          />
        </View>
        {/* <Tabnavigation independent={true} /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282828',
    width: '100%',
    height: '100%',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
  bottomTextIcon: {
    height: 8,
    width: 60,
    marginTop: 5,
  },
  headerText: {
    color: 'white',
    borderWidth: 1,
    padding: 13,
    marginLeft: 5,
    justifyContent: 'center',
    borderRadius: 22,
  },
  headerText2: {
    borderWidth: 1,
    padding: 13,
    marginLeft: 5,
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#CDE7BE',
    color: 'black',
    fontWeight: 'bold',
  },
  treadingText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  showText: {
    color: '#CDE7BE',
    fontWeight: '400',
    fontSize: 12,
    // textAlign: 'center',
    alignItems: 'center',
  },
});
