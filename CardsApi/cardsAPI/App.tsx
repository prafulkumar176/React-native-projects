import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {Component} from 'react';
import {FlatCardsTools} from './components/MapMethod/flatCards';
// import {FlatListCards} from './components/FlatListMethod/flatList';

export class App extends Component {
  render() {
    return (
      <View>
        <SafeAreaView>
          {/* <FlatListCards /> */}
          <ScrollView scrollEnabled={true}>
            <FlatCardsTools />
          </ScrollView>
          {/* <Text>App</Text> */}
        </SafeAreaView>
      </View>
    );
  }
}

export default App;
