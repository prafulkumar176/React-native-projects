import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export class CardsElement extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View>
          <Text>Bike</Text>
        </View>
        <View>
          <Text>$522</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flexBasis: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
  },
});
