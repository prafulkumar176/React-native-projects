/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Image,
  ImageProps,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker, {ImageOrVideo} from 'react-native-image-crop-picker';

interface AvatarProps extends ImageProps {
  onChange?: (file: ImageOrVideo) => void;
  visible: boolean;
  uri: any;
}
interface IState {
  uri: any;
  visible: boolean;
}
export default class ImagePickers extends Component<AvatarProps, IState> {
  close = () => this.setState({visible: false});
  open = () => this.setState({visible: true});

  constructor(props: AvatarProps) {
    super(props);
    this.state = {uri: '', visible: false};
  }
  chooseImage = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        this.setState({uri: image.path});
        this.props.onChange?.(image);
      })
      .finally(this.close);
  };

  openCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        console.log(image.path);
        this.setState({uri: image.path});
        this.props.onChange?.(image);
      })
      .finally(this.close);
  };

  render() {
    return (
      <View>
        <View>
          <Text>Hello</Text>
        </View>
        <Modal
          isVisible={this.state.visible}
          onBackButtonPress={this.close}
          onBackdropPress={this.close}
          style={{margin: 20}}>
          <SafeAreaView style={styles.options}>
            <Pressable style={styles.option} onPress={this.chooseImage}>
              {/* <ImageIcon /> */}
              <Text
                style={{
                  color: 'white',
                  borderWidth: 1,
                  borderColor: 'white',
                  padding: 10,
                  paddingHorizontal: 30,
                }}>
                Library{' '}
              </Text>
            </Pressable>
            <Pressable style={styles.option} onPress={this.openCamera}>
              {/* <CameraIcon /> */}
              <Text
                style={{
                  color: 'white',
                  borderWidth: 1,
                  borderColor: 'white',
                  padding: 10,
                  paddingHorizontal: 30,
                }}>
                Camera
              </Text>
            </Pressable>
          </SafeAreaView>
        </Modal>
        <TouchableOpacity onPress={this.chooseImage}>
          {this.state.uri ? (
            <Image
              style={styles.avatar}
              {...this.props}
              source={this.state.uri ? this.state.uri : this.props.source}
            />
          ) : (
            ''
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
    alignSelf: 'center',
  },

  options: {
    backgroundColor: 'black',
    flexDirection: 'row',
    borderWidth: 2,
    marginTop: 250,
    margin: 10,
    color: 'white',
    paddingHorizontal: 55,
  },
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    borderWidth: 1,
    padding: 12,
    alignSelf: 'center',
  },
});
