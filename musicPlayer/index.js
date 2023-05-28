/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import MusicPlayer from './Packages/Blocks/HomeScreen/Homscreen';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import {playbackService} from './Packages/Blocks/HomeScreen/trackPlayerServices';
import Musicplayer from './Packages/Blocks/MusicPlayer/MusicPlayer';

AppRegistry.registerComponent(appName, () => Musicplayer);
TrackPlayer.registerPlaybackService(() => playbackService);
