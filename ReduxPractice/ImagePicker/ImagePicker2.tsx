import React, {Component} from 'react';
import {Button, View, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

interface IState {
  data: any;
}
export default class ImagePicker2 extends Component<IState> {
  state: IState = {
    data: [],
  };
  handleCamera = () => {
    const option: any = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      saveToPhotos: true,
    };
    ImagePicker.launchCamera(option, (response: any) => {
      console.log(response.assets[0].uri);
      this.setState({data: [...this.state.data, response.assets[0].uri]});
    });
  };

  handleGallery = () => {
    const option: any = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      saveToPhotos: true,
    };
    ImagePicker.launchImageLibrary(option, (response: any) => {
      console.log(response.assets[0].uri);
      this.setState({data: [...this.state.data, response.assets[0].uri]});
    });
  };
  render() {
    return (
      <View>
        <Button title="Choose Gallery" onPress={this.handleGallery} />
        <Button title="Open camera" onPress={this.handleCamera} />

        {this.state.data &&
          this.state.data.map((v: any) => {
            return (
              <Image
                source={{uri: v}}
                style={{height: 100, width: 100}}
                key={v.id}
              />
            );
          })}
      </View>
    );
  }
}
