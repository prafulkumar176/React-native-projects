/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import data from './data.json';
import CardItem from './CardItem';

interface IProps {
  id: number;
  name: string;
  image: string;
}

export default class Shoes extends Component<IProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.menuicon}>
          <Feather name="menu" size={20} color="black" />
        </Text>
        <View>
          <Image
            style={styles.imagepart}
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/010/994/232/original/nike-logo-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg',
            }}
          />
        </View>
        <ImageBackground
          source={{
            uri: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3a02659d-bad9-4eab-a64c-ec2b731b70c3/court-vision-low-shoes-hGlBPT.png',
          }}
          resizeMode="cover"
          style={styles.shoeimage}>
          <View style={styles.insideText}>
            <Text style={styles.headertext}>AIRMAX</Text>
            <Text style={styles.yeartext}>2020</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.price}> 200</Text>
              <Text
                style={{
                  position: 'absolute',
                  left: 55,
                  top: 4,
                  color: 'black',
                }}>
                <AntDesign name="arrowright" size={20} color="black" />
              </Text>
            </View>
          </View>
        </ImageBackground>
        <View>
          <Text style={styles.favText}>Favorite</Text>
          <View>
            <FlatList
              horizontal
              numColumns={3}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={data.data.response}
              renderItem={v => (
                <CardItem
                  id={v.item.id}
                  name={v.item.name}
                  image={v.item.image}
                />
              )}
            />
          </View>
        </View>
        <View style={styles.bottomIcons}>
          <Text style={styles.menuicon}>
            <AntDesign name="home" size={20} color="black" />
          </Text>
          <Text style={styles.menuicon}>
            <Feather name="search" size={20} color="black" />
          </Text>
          <Text style={styles.menuicon}>
            <MaterialIcons name="notifications-none" size={20} color="black" />
          </Text>
          <Text style={styles.menuicon}>
            <AntDesign name="staro" size={20} color="black" />
          </Text>
          <Text style={styles.menuicon}>
            <AntDesign name="delete" size={20} color="black" />
          </Text>
        </View>
        <View style={styles.round}></View>
        <View style={styles.rounded}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 15,
  },
  imagepart: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    // marginLeft: 20,
    backgroundColor: '#F6F8FC',
  },
  shoeimage: {
    height: 300,
    width: '100%',
    // backgroundColor: 'white',
    color: 'white',
    backgroundColor: 'white',
    opacity: 0.7,
  },
  headertext: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  yeartext: {
    fontSize: 50,
    color: 'black',
  },
  insideText: {
    marginHorizontal: 15,
  },
  dollar: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  menuicon: {
    width: 25,
    marginLeft: 18,
    marginTop: 15,
  },
  favText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },
  images: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
  cardsContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  shoeNameText: {
    marginVertical: 10,
    color: 'black',
    fontSize: 16,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  round: {
    width: 12,
    height: 12,
    backgroundColor: '#FD6E6A',
    position: 'absolute',
    borderRadius: 15 / 2,
    left: 235,
    top: 135,
  },
  rounded: {
    width: 60,
    height: 60,
    borderRadius: 80 / 2,
    backgroundColor: '#FDDC99',
    position: 'absolute',
    top: 190,
    left: 35,
    opacity: 0.6,
    zIndex: 1,
  },
});
