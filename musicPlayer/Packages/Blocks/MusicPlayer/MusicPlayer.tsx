/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Appearance,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {JsonData} from './MusicData';
import {JsonData} from '../HomeScreen/Config';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Slider from '@react-native-community/slider';

import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  RepeatMode,
  Event,
} from 'react-native-track-player';
interface Istate {
  isDark: boolean;
}
let isThemeDark = Appearance.getColorScheme() === 'dark';

class Musicplayer extends Component<Istate> {
  constructor(props: any) {
    super(props);
    this.state = {
      appearance: isThemeDark,
      isPlaying: false,
      isModalOpen: false,
      trackArtwork: null,
      trackTitle: null,
      trackArtist: null,
      currentMusicImg:
        'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
      duration: 0,
      progress: 0,
    };
  }

  componentDidMount(): void {
    console.log(isThemeDark);

    Appearance.addChangeListener(list => {
      isThemeDark = list.colorScheme === 'dark';
      this.setState({appearance: isThemeDark});
    });
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.add(JsonData);

      TrackPlayer.addEventListener(
        'playback-track-changed',
        this.onTrackChange,
      );
    });
    TrackPlayer.getDuration().then(duration => this.setState({duration}));
    this.progressInterval = setInterval(this.getProgress, 1000);
  }

  componentWillUnmount(): void {
    TrackPlayer.addEventListener('playback-track-changed', this.onTrackChange);
    clearInterval(this.progressInterval);
  }

  playTrack = async () => {
    await TrackPlayer.play();
    this.setState({isPlaying: true});
    console.log(TrackPlayer.getCurrentTrack());
  };
  pauseTrack = async () => {
    await TrackPlayer.pause();
    this.setState({isPlaying: false});
  };
  ///flatlist ============================
  playNextTrack = async () => {
    await TrackPlayer.skipToNext();
  };
  playPreviousTrack = async () => {
    const currentplay = await TrackPlayer.getPosition();
    if (currentplay < 10) {
      await TrackPlayer.skipToPrevious();
    } else {
      await TrackPlayer.seekTo(0);
    }
  };
  onTrackChange = async (track: any) => {
    const {artwork, artist, title, length}: any = await TrackPlayer.getTrack(
      track.nextTrack,
    );
    this.setState({
      trackArtwork: artwork,
      trackTitle: title,
      trackArtist: artist,
      duration: length,
      progress: 0,
    });
  };
  getProgress = async () => {
    const position = await TrackPlayer.getPosition();
    this.setState({progress: position});
  };

  onSliderValueChange = async (value: any) => {
    await TrackPlayer.seekTo(value);
    this.setState({progress: value});
  };

  handlesongPress = async (index: any) => {
    await TrackPlayer.skip(index);
  };
  format = (seconds: any) => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  render() {
    const {
      appearance,
      isPlaying,
      isModalOpen,
      currentMusicImg,
      trackArtist,
      trackTitle,
      duration,
      progress,
    }: any = this.state;
    // console.log(JsonData);
    console.log(progress);
    const formatprogress = `${Math.floor(progress / 60)}:${(progress % 60)
      .toFixed(0)
      .padStart(2, '0')}`;
    const formatduration = `${Math.floor(duration / 60)}:${(duration % 60)
      .toFixed(0)
      .padStart(2, '0')}`;

    return (
      <View
        style={[
          styles.container,
          appearance ? styles.darkContainer : styles.lightContainer,
        ]}>
        <View>
          <View style={styles.header}>
            <Entypo
              name="list"
              size={25}
              color={appearance ? '#ECECEC' : '#212121'}
            />
            <Text
              style={{
                marginRight: 130,
                fontSize: 30,
                fontWeight: '600',
                color: appearance ? '#ECECEC' : '#212121',
              }}>
              Music Player
            </Text>
            <EvilIcons
              name="search"
              size={35}
              color={appearance ? '#ECECEC' : '#212121'}
            />
          </View>
          <View style={styles.listContainer}>
            <Text
              style={[
                styles.listText,
                {color: appearance ? '#ECECEC' : '#212121'},
              ]}>
              Songs
            </Text>
            <Text
              style={[
                styles.listText,
                {color: appearance ? '#ECECEC' : '#212121'},
              ]}>
              Artists{' '}
            </Text>
            <Text
              style={[
                styles.listText,
                {color: appearance ? '#ECECEC' : '#212121'},
              ]}>
              Playlist{' '}
            </Text>
            <Text
              style={[
                styles.listText,
                {color: appearance ? '#ECECEC' : '#212121'},
              ]}>
              Albums
            </Text>
            <Text
              style={[
                styles.listText,
                {color: appearance ? '#ECECEC' : '#212121'},
              ]}>
              Folder
            </Text>
            <Ionicons
              name="md-shuffle-outline"
              size={25}
              color={appearance ? '#ECECEC' : '#212121'}
            />
            <MaterialIcons
              name="playlist-play"
              size={35}
              color={appearance ? '#ECECEC' : '#212121'}
            />
          </View>

          {/* flat list */}
          <FlatList
            data={JsonData}
            renderItem={({item, index}: any) => (
              <TouchableOpacity
                onPress={() => {
                  this.handlesongPress(index);
                  this.setState({isModalOpen: !isModalOpen});
                }}>
                <View style={{margin: 20, flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.artwork}}
                    style={{height: 60, width: 60, borderRadius: 10}}
                  />
                  <View
                    style={{
                      marginLeft: 10,
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}>
                    <Text
                      style={{
                        color: this.state.appearance ? '#ECECEC' : '#212121',
                        fontWeight: '600',
                        fontSize: 15,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        color: this.state.appearance ? '#ECECEC' : '#212121',
                        fontWeight: '400',
                        fontSize: 14,
                      }}>
                      {item.artist}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: this.state.appearance ? '#161616' : '#ABABAB',
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({isModalOpen: !isModalOpen});
            }}>
            <Image
              source={{
                uri: this.state.trackArtwork,
              }}
              style={{height: 60, width: 60, borderRadius: 10}}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{color: appearance ? '#ECECEC' : '#212121', fontSize: 15}}>
              {trackTitle}
            </Text>
            <Text>{trackArtist}</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={this.playPreviousTrack}>
                <AntDesign
                  name="stepbackward"
                  size={30}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
              </TouchableOpacity>
              <View style={{marginHorizontal: 20, marginLeft: 22}}>
                <TouchableOpacity
                  onPress={isPlaying ? this.pauseTrack : this.playTrack}>
                  <FontAwesome
                    name={isPlaying ? 'pause' : 'play'}
                    size={30}
                    color={appearance ? '#ECECEC' : '#212121'}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={this.playNextTrack}>
                <AntDesign
                  name="stepforward"
                  size={30}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Slider
                style={{width: 130}}
                minimumValue={0}
                maximumValue={duration}
                value={progress}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onSlidingComplete={this.onSliderValueChange}
              />
            </View>
          </View>
        </View>
        <Modal visible={this.state.isModalOpen}>
          <View
            style={{
              backgroundColor: appearance ? '#2F2F2F' : '#ECECEC',
              flex: 1,
            }}>
            <View style={{margin: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({isModalOpen: !isModalOpen});
                  }}>
                  <Entypo
                    name="chevron-thin-down"
                    size={25}
                    color={appearance ? '#ECECEC' : '#212121'}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: appearance ? '#ECECEC' : '#212121',
                    fontSize: 25,
                    fontWeight: '600',
                  }}>
                  Music Player
                </Text>
                <Entypo
                  name="dots-three-vertical"
                  size={25}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: 80,
                }}>
                <Text
                  style={{
                    color: appearance ? '#ECECEC' : '#212121',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                  Song{' '}
                </Text>
                <Text
                  style={{color: '#7e7c7b', fontSize: 15, fontWeight: '600'}}>
                  | Lyrics
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Image
                  source={{
                    uri: this.state.trackArtwork,
                  }}
                  style={{height: 300, width: 300, borderRadius: 20}}
                />
              </View>
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Text
                  style={{
                    marginBottom: 7,
                    color: appearance ? '#ECECEC' : '#212121',
                    fontSize: 25,
                    fontWeight: '600',
                  }}>
                  {trackTitle}
                </Text>
                <Text
                  style={{
                    color: appearance ? '#ECECEC' : '#212121',
                    fontSize: 15,
                  }}>
                  {trackArtist}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginVertical: 10,
                }}>
                <Ionicons
                  name="ios-volume-medium"
                  size={27}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
                <Foundation
                  name="list"
                  size={25}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
                <Entypo
                  name="shuffle"
                  size={25}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
                <Feather
                  name="repeat"
                  size={25}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
                <Entypo
                  name="heart"
                  size={25}
                  color={appearance ? '#ECECEC' : '#212121'}
                />
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Slider
                  style={{width: 350, height: 40}}
                  minimumValue={0}
                  maximumValue={duration}
                  value={progress}
                  minimumTrackTintColor="#FFFFFF"
                  maximumTrackTintColor="#000000"
                  onSlidingComplete={this.onSliderValueChange}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 25,
                }}>
                <Text>{this.format(progress)}</Text>
                <Text>{this.format(duration)}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginHorizontal: 60,
                  marginTop: 20,
                }}>
                <TouchableOpacity onPress={this.playPreviousTrack}>
                  <AntDesign
                    name="stepbackward"
                    size={35}
                    color={appearance ? '#ECECEC' : '#212121'}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={isPlaying ? this.pauseTrack : this.playTrack}>
                  <FontAwesome
                    name={isPlaying ? 'pause' : 'play'}
                    size={35}
                    color={appearance ? '#ECECEC' : '#212121'}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.playNextTrack}>
                  <AntDesign
                    name="stepforward"
                    size={35}
                    color={appearance ? '#ECECEC' : '#212121'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* <View>
            <TouchableOpacity onPress={isPlaying?this.pauseTrack:this.playTrack}>
                <Text>{isPlaying ?'pause':'play'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.playNextTrack}>
                <Text>next</Text>
            </TouchableOpacity>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  listText: {
    fontWeight: '600',
  },
});
export default Musicplayer;
