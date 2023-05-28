/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {DELETE, EDIT, TODOS} from '../Redux/Action/actionName';

export default function MainTodoApp() {
  const [InputValues, setInputValues] = useState('');
  const [Id, setId] = useState('');
  const data = useSelector((val: any) => val);
  const dispatch = useDispatch();

  //   console.log(data);
  const handleAdd = () => {
    if (InputValues == '') {
      Alert.alert('Enter a values');
    } else if (!Id) {
      dispatch({type: TODOS, payload: InputValues});
    } else if (Id) {
      dispatch({type: EDIT, payload: {id: Id, updatedData: InputValues}});
    }
    setInputValues('');
    setId('');
  };

  const handleDelete = (id: any) => {
    console.log(id);
    dispatch({
      type: DELETE,
      payload: data.TodoReducer.todos.filter((v: any) => v.id !== id),
    });
  };

  const handleEdit = (v: any) => {
    setInputValues(v.values);
    setId(v.id);
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <TextInput
          placeholder="Enter The name"
          style={{
            borderWidth: 1,
            width: 250,
            backgroundColor: 'white',
            paddingLeft: 18,
          }}
          onChangeText={e => setInputValues(e)}
          value={InputValues}
        />
        <TouchableOpacity
          style={{borderWidth: 1, padding: 15, backgroundColor: 'white'}}
          onPress={handleAdd}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {!Id ? 'Add Todo ' : 'Update'}
          </Text>
        </TouchableOpacity>
      </View>
      {data.TodoReducer.todos.map((v: any) => {
        return (
          <View
            key={v.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
              borderWidth: 1,
              width: '90%',
              marginLeft: 25,
              padding: 8,
            }}>
            <Text
              style={{
                padding: 8,
                fontWeight: 'bold',
                color: 'black',
                width: 150,
              }}
              numberOfLines={1}>
              {v.values}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'baseline',
                marginTop: 0,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'grey',
                  padding: 8,
                  borderRadius: 8,
                  width: 50,
                }}
                onPress={() => handleEdit(v)}>
                <Text
                  style={{textAlign: 'center', marginTop: 0, color: 'black'}}>
                  Edit
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: 'grey',
                  padding: 8,
                  borderRadius: 8,
                  marginLeft: 15,
                }}
                onPress={() => handleDelete(v.id)}>
                <Text
                  style={{textAlign: 'center', marginTop: 0, color: 'black'}}>
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
