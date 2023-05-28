import React, {Component} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface IProps {
  navigation: any;
}
export default class MainPage extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View>
        <View style={{width: 50}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}
            style={{width: 50}}>
            <Text style={{width: 50}}>
              <Feather name="menu" color="black" size={40} />
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Go to notification"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
        <Button
          title="Go to EMPTY"
          onPress={() => this.props.navigation.navigate('Empty')}
        />
      </View>
    );
  }
}
