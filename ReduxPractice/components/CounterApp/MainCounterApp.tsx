/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {DECREMENT, INCREMENT, RESET} from '../Redux/Action/actionName';

export default function MainCounterApp() {
  const data = useSelector((values: any) => values);
  //   console.log(data);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({type: INCREMENT, payload: data.countReducer.count + 1});
  };

  const handleDelete = () => {
    if (data.countReducer.count <= 0) {
      Alert.alert('Alert');
    } else {
      dispatch({type: DECREMENT, payload: data.countReducer.count - 1});
    }
  };

  const handleReset = () => {
    dispatch({type: RESET});
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.add} onPress={handleDelete}>
          <Text style={{color: 'white', fontSize: 25}}>-</Text>
        </TouchableOpacity>

        <Text style={{color: 'black', fontSize: 30}}>
          {data.countReducer.count}
        </Text>

        <TouchableOpacity style={styles.add} onPress={handleAdd}>
          <Text style={{color: 'white', fontSize: 25}}>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.RESET} onPress={handleReset}>
          <Text style={{color: 'white', fontSize: 15, textAlign: 'center'}}>
            RESET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 250,
    // flex: 1,
  },
  add: {
    padding: 20,
    borderWidth: 1,
    backgroundColor: 'grey',
  },
  addText: {
    color: 'white',
    fontSize: 8,
  },
  RESET: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'grey',
    width: 150,
    marginLeft: 120,
    marginTop: 25,
  },
});
