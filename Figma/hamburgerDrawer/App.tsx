import React, {Component} from 'react';
import {View} from 'react-native';

import Screen1 from './components/Screen-1';
import Splash from './components/Splash';

interface IState {
  isPageOpened: Boolean;
}
export default class App extends Component<IState> {
  state: IState = {
    isPageOpened: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isPageOpened: false});
    }, 1000);
  }
  render() {
    return <View>{this.state.isPageOpened ? <Splash /> : <Screen1 />}</View>;
  }
}
