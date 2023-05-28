import {Text, View} from 'react-native';
import React, {Component} from 'react';

import ModalTodo from './components/ModalTodo';
import {CardsElement} from './components/CardsElement';

export class App extends Component {
  render() {
    return (
      <View>
        {/* <ModalTodo /> */}
        <CardsElement />
      </View>
    );
  }
}

export default App;
