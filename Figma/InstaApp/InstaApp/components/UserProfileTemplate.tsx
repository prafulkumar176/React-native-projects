/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

interface IProps {
  first_name: string;
  last_name: string;
  avatar: string;
}
export default class UserProfileTemplate extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <View style={{marginVertical: 30}}>
        <View
          style={{
            width: 76,
            height: 76,
            borderRadius: 76 / 2,
            borderWidth: 3,
            borderColor: '#CDE7BE',
          }}>
          <Image
            source={{
              uri: this.props.avatar,
            }}
            style={{
              width: 70,
              height: 70,
              borderRadius: 70 / 2,
              borderWidth: 4,
              borderColor: 'black',
              // padding: 5,
            }}
          />
        </View>
        <Text
          style={{
            color: 'white',
            width: 90,
            textAlign: 'center',
            marginTop: 10,
          }}
          numberOfLines={1}>
          {this.props.first_name} {this.props.last_name}
        </Text>
      </View>
    );
  }
}
