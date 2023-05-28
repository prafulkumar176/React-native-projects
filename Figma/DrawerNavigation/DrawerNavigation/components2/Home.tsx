/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

interface IProps {
  navigation: any;
}
export default class Home extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}
