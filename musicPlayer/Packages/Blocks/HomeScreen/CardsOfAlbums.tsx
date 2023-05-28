import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './HomescreenStyles';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Feather from 'react-native-vector-icons/Feather';
// import Entypo from 'react-native-vector-icons/Entypo';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Slider from '@react-native-community/slider';
// import CardsOfAlbums from './Homscreen';
interface IProps {
  title: string;
  artist: any;
  artwork: string;
  url: string;
  id: any;
}
export default class CardsOfAlbums extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    // console.log(this.state);
    return (
      <View>
        <TouchableOpacity style={styles.playListGird}>
          <Image
            source={{
              uri: this.props.artwork,
            }}
            style={styles.albumsPicture}
          />
          <View style={styles.playListGirdTextContainer}>
            <Text style={styles.headingText} numberOfLines={1}>
              {this.props.title}
            </Text>
            <Text style={styles.descriptionText} numberOfLines={1}>
              {this.props.artist}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
