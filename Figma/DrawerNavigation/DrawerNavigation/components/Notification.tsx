import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

interface IProps {
  navigation: any;
}
export default class Notification extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={{width: 50}}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Text>
              <Feather name="menu" color="black" size={40} />
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'black'}}> Notification </Text>
      </View>
    );
  }
}
