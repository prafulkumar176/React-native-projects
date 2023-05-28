/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, View} from 'react-native';

interface IProps {
  navigation: any;
}
export default class SplashScreen extends Component<IProps> {
  // props: any;
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.props.navigation.navigate('BottomTab');
    }, 1000);
  }

  render() {
    // console.log(this.props.navigation);
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
          }}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
    );
  }
}
