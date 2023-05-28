/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

interface IProps {
  Runtime: string;
  Director: string;
  Poster: string;
  MetascoreValue: string;
  Actors: string;
  navigation: any;
  Images: string;
}
export default class Cards extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    const {Runtime, Director, MetascoreValue, Actors, Images} = this.props;
    // console.log(this.props.navigation.route.params.data);
    return (
      <View>
        <View style={{marginTop: 10, marginRight: 10}}>
          <Image
            source={{
              uri: Images,
            }}
            style={{height: 150, width: 120}}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#EAF4F4',
              width: 120,
            }}
            numberOfLines={1}>
            {Director}
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', color: '#EAF4F4'}}>
            {Actors}
          </Text>
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              // borderWidth: 1,
              borderColor: 'white',
              width: 110,
              marginTop: 15,
              alignItems: 'baseline',
            }}>
            <Text style={{color: '#C4CCCC', fontSize: 12, fontWeight: '400'}}>
              <Fontisto name="headphone" size={15} color="white" /> {Runtime}
            </Text>
            <Text
              style={{
                color: '#C4CCCC',
                fontSize: 12,
                fontWeight: '400',
                marginHorizontal: 18,
                alignItems: 'center',
              }}>
              {'  '}
              <Entypo name="500px" size={15} color="white" /> {MetascoreValue}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
