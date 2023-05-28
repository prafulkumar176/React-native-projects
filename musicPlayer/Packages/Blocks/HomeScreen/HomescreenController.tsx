import {Component} from 'react';
import {JsonData} from './Config';
import {addTracks, setupPlayer} from './trackPlayerServices';
import TrackPlayer from 'react-native-track-player';
import {ActivityIndicator, SafeAreaView} from 'react-native';
// import TrackPlayer, {
//   AppKilledPlaybackBehavior,
//   Capability,
//   RepeatMode,
// } from 'react-native-track-player';

interface IState {
  isModalHide: boolean;
  isEnabled: boolean;
  changeIcon: boolean;
  newdata: any[];
  AlbumId: string;
  themeMode: boolean;
  isPlayerReady: boolean;
}
// interface IProps {
//   title: string;
//   artist: any;
//   artwork: string;
//   url: string;
//   id: any;
// }
export default class HomescreenController extends Component<IState> {
  state: IState = {
    isModalHide: false,
    isEnabled: false,
    changeIcon: false,
    newdata: JsonData,
    AlbumId: '',
    themeMode: false,
    isPlayerReady: false,
  };
  toggleSwitch = () => this.setState({isEnabled: !this.state.isEnabled});
  handlePause = () => this.setState({changeIcon: !this.state.changeIcon});
  handleModalShow = () => this.setState({isModalHide: !this.state.isModalHide});

  componentDidMount(): void {
    async function setup() {
      let isSetup = await setupPlayer();

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await addTracks();
      }
      // this.setState({isPlayerReady: isSetup});
    }

    setup();
  }
}
