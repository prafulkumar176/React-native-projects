/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  // Image,
  Text,
  TouchableOpacity,
  View,
  Switch,
  // Modal,
  // Alert,
  Appearance,
  FlatList,
  Image,
  Modal,
  Alert,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from '@react-native-community/slider';

import {styles} from './HomescreenStyles';
import HomescreenController from './HomescreenController';
// import CardsOfAlbums from './CardsOfAlbums';
import {JsonData} from './Config';
import TrackPlayer from 'react-native-track-player';

import {setupPlayer, addTracks} from './trackPlayerServices';

export default class MusicPlayer extends HomescreenController {
  static colorScheme = Appearance.getColorScheme();

  componentDidMount() {
    Appearance.addChangeListener(color => {
      console.log(color.colorScheme);
      if (color.colorScheme === 'dark') {
        console.log('darkmode');
        this.setState({themeMode: true});
      } else {
        this.setState({themeMode: false});
        console.log('loghtmode');
      }

      async function setup() {
        let isSetup = await setupPlayer();

        const queue = await TrackPlayer.getQueue();
        if (isSetup && queue.length <= 0) {
          await addTracks();
        }
        // this.setState({isPlayerReady: isSetup});
      }

      setup();
    });

    if (!this.state.isPlayerReady) {
      return (
        <SafeAreaView>
          <ActivityIndicator size="large" color="#bbb" />
        </SafeAreaView>
      );
    }
  }
  componentDidUpdate() {
    setupPlayer();
  }

  actionOnRow = (id: any) => {
    this.setState({AlbumId: id});
    JsonData &&
      JsonData.map((v: any) => {
        console.log(v);
        if (v.id === id) {
          this.setState({isModalHide: true});
          // console.log(v);
        }
      });
  };

  render() {
    return (
      <View>
        <View
          style={[
            styles.topbar,
            this.state.themeMode
              ? {backgroundColor: 'black'}
              : {backgroundColor: 'white'},
          ]}>
          <View style={[styles.menuMusicPlayer]}>
            <Text>
              <MaterialCommunityIcons
                name="format-align-left"
                size={20}
                style={
                  this.state.themeMode ? {color: 'white'} : {color: 'black'}
                }
              />
            </Text>
            <Text
              style={[
                styles.musicText,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Music Player
            </Text>
          </View>
          <View
            style={
              this.state.themeMode
                ? {backgroundColor: 'black'}
                : {backgroundColor: 'white'}
            }>
            <AntDesign
              name="search1"
              size={20}
              style={this.state.themeMode ? {color: 'white'} : {color: 'black'}}
            />
          </View>
        </View>

        <View
          style={[
            styles.listOfNavigation,
            this.state.themeMode
              ? {backgroundColor: 'black'}
              : {backgroundColor: 'white'},
          ]}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textoflist,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Songs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.textoflist,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Artists
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.textoflist,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.textoflist,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Albums
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={[
                styles.textoflist,
                this.state.themeMode ? {color: 'white'} : {color: 'black'},
              ]}>
              Folder
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              <Ionicons
                name="shuffle"
                size={24}
                color={this.state.themeMode ? 'white' : 'black'}
              />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              <Switch
                trackColor={{false: 'light', true: 'dark'}}
                thumbColor={this.state.themeMode ? 'white' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.isEnabled}
              />
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            this.state.themeMode
              ? {backgroundColor: 'black'}
              : {backgroundColor: 'white'},
          ]}>
          <FlatList
            data={this.state.newdata}
            renderItem={({item}: any) => (
              <TouchableOpacity
                style={styles.playListGird}
                onPress={() => this.actionOnRow(item.id)}
                key={item.id}>
                <Image
                  source={{
                    uri: item.artwork,
                  }}
                  style={styles.albumsPicture}
                />
                <View style={styles.playListGirdTextContainer}>
                  <Text
                    style={[
                      styles.headingText,
                      this.state.themeMode
                        ? {color: 'white'}
                        : {color: 'black'},
                    ]}
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    style={[
                      styles.descriptionText,
                      this.state.themeMode
                        ? {color: 'white'}
                        : {color: 'black'},
                    ]}
                    numberOfLines={1}>
                    {item.artist}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={{position: 'relative', bottom: 8}}>
          <TouchableOpacity
            // disabled={this.state.isEnabled}
            style={[
              styles.modelbotton,
              this.state.themeMode
                ? {backgroundColor: '#161616'}
                : {backgroundColor: '#BCBCBC'},
            ]}
            onPress={() => this.setState({isModalHide: true})}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
              }}
              style={styles.modelbtnimage}
            />
            <View style={styles.innerblock}>
              <Text
                style={[
                  styles.blocktitle,
                  this.state.themeMode ? {color: 'white'} : {color: 'black'},
                ]}>
                Nakhla
              </Text>
              <Text
                style={[
                  styles.blockothertext,
                  this.state.themeMode ? {color: 'white'} : {color: 'black'},
                ]}>
                Description
              </Text>
            </View>
            <View style={styles.modelbtn3}>
              <AntDesign
                name="stepbackward"
                size={20}
                style={
                  this.state.themeMode ? {color: 'white'} : {color: 'black'}
                }
              />
              <AntDesign
                name="pause"
                size={20}
                style={
                  this.state.themeMode ? {color: 'white'} : {color: 'black'}
                }
              />
              <AntDesign
                name="stepforward"
                size={20}
                style={
                  this.state.themeMode ? {color: 'white'} : {color: 'black'}
                }
              />
            </View>
          </TouchableOpacity>
        </View>
        {JsonData &&
          JsonData.map((v): any => {
            return v.id == this.state.AlbumId ? (
              <View key={v.id}>
                <Modal
                  animationType="slide"
                  // transparent={this.state.themeMode ? false : true}
                  visible={this.state.isModalHide}
                  onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    // this.setState({visiableModal: !this.state.visibleModal});
                    this.state.changeIcon;
                  }}>
                  <View
                    style={[
                      this.state.themeMode
                        ? {backgroundColor: 'black'}
                        : {backgroundColor: 'white'},
                      {height: '100%'},
                    ]}>
                    <View style={styles.modalHeader}>
                      <TouchableOpacity
                        onPress={() => this.setState({isModalHide: false})}>
                        <AntDesign
                          name="down"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </TouchableOpacity>
                      <Text
                        style={[
                          styles.musicText2,
                          this.state.themeMode
                            ? {color: 'white'}
                            : {color: 'black'},
                        ]}>
                        Music Player
                      </Text>
                      <Text>
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                    </View>
                    <View style={styles.modalCategoryContainer}>
                      <TouchableOpacity>
                        <Text
                          style={[
                            styles.songText,
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'},
                          ]}>
                          Song{' '}
                        </Text>
                      </TouchableOpacity>
                      <Text> | </Text>
                      <TouchableOpacity>
                        <Text
                          style={[
                            styles.lyricsText,
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'},
                          ]}>
                          {' '}
                          Lyrics
                        </Text>
                      </TouchableOpacity>
                    </View>

                    <Image
                      source={{
                        uri: v.artwork,
                      }}
                      style={styles.posterPicture}
                    />

                    <View style={styles.artistDetailsContainer}>
                      <Text
                        style={[
                          styles.artistNameText,
                          this.state.themeMode
                            ? {color: 'white'}
                            : {color: 'black'},
                        ]}
                        numberOfLines={1}>
                        {v.artist}
                      </Text>
                      <Text
                        style={[
                          styles.subartistsText,
                          this.state.themeMode
                            ? {color: 'white'}
                            : {color: 'black'},
                        ]}
                        numberOfLines={1}>
                        {v.title}
                      </Text>
                    </View>

                    <View style={styles.iconsContainer}>
                      <Text>
                        <Ionicons
                          name="volume-medium-sharp"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                      <Text>
                        <Feather
                          name="align-left"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                      <Text>
                        <Entypo
                          name="shuffle"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                      <Text>
                        <MaterialIcons
                          name="loop"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                      <Text>
                        <Entypo
                          name="heart"
                          size={20}
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }
                        />
                      </Text>
                    </View>
                    <View>
                      <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor={
                          this.state.themeMode ? 'white' : 'black'
                        }
                        maximumTrackTintColor={
                          this.state.themeMode ? 'white' : 'black'
                        }
                      />

                      <View style={styles.timingsTextcontainer}>
                        <Text
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }>
                          0:00
                        </Text>
                        <Text
                          style={
                            this.state.themeMode
                              ? {color: 'white'}
                              : {color: 'black'}
                          }>
                          {`${v.length.toString().split('')[0]} : ${v.length
                            .toString()
                            .slice(1, 3)}`}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.playBottomContainer}>
                      <TouchableOpacity>
                        <Text style={styles.icons}>
                          <Ionicons
                            name="play-skip-back"
                            size={35}
                            style={
                              this.state.themeMode
                                ? {color: 'white'}
                                : {color: 'black'}
                            }
                          />
                        </Text>
                      </TouchableOpacity>
                      {/* {this.state.changeIcon ? (
                        <TouchableOpacity onPress={this.handlePause}>
                          <Text style={styles.icons}>
                            <FontAwesome
                              name="pause"
                              size={35}
                              style={
                                this.state.themeMode
                                  ? {color: 'white'}
                                  : {color: 'black'}
                              }
                            />
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity onPress={this.handlePause}>
                          <Text style={styles.icons}>
                            <FontAwesome
                              name="play"
                              size={35}
                              style={
                                this.state.themeMode
                                  ? {color: 'white'}
                                  : {color: 'black'}
                              }
                            />
                          </Text>
                        </TouchableOpacity>
                      )} */}

                      <TouchableOpacity
                        onPress={() => {
                          TrackPlayer.play();
                          this.setState({
                            isPlayerReady: !this.state.isPlayerReady,
                          });
                        }}>
                        <Text style={styles.icons}>
                          <FontAwesome
                            name={this.state.isPlayerReady ? 'pause' : 'play'}
                            size={35}
                            style={
                              this.state.themeMode
                                ? {color: 'white'}
                                : {color: 'black'}
                            }
                          />
                        </Text>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Text style={styles.icons}>
                          <Ionicons
                            name="ios-play-skip-forward"
                            size={35}
                            style={
                              this.state.themeMode
                                ? {color: 'white'}
                                : {color: 'black'}
                            }
                          />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            ) : (
              ''
            );
          })}
      </View>
    );
  }
}
