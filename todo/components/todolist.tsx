/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

interface Search {
  name: string;
}

interface IProps {}

interface IState {
  todos: any[];
  name: string;
  id: string | null;
  searchArray: Search[];
}

export default class TodoList extends Component<IProps, IState> {
  state: IState = {
    todos: [],
    name: '',
    id: null,
    searchArray: [],
  };
  handleText = (e: string) => {
    this.setState({name: e});
  };

  // handleAddTodo = () => {
  //   if (this.state.name === '') {
  //     Alert.alert('Please enter a name', 'Required Parameter');
  //   } else if (this.state.id === '') {
  //     let Obj = {
  //       name: this.state.name,
  //       id: this.state.todos.length + 1,
  //     };
  //     this.setState(prevState => ({
  //       todos: [...prevState.todos, Obj],
  //       id: '',
  //       name: '',
  //       searchArray: [...prevState.todos, Obj],
  //     }));
  //   } else {
  //     let newObj = this.state.todos.map((v: {name: string; id: string}) => {
  //       return this.state.id === v.id
  //         ? {...v, name: this.state.name, id: this.state.id}
  //         : v;
  //     });
  //     this.setState({todos: newObj});
  //     this.setState({id: '', name: ''});
  //   }
  // };

  handleAddTodo = () => {
    if (this.state.name === '') {
      Alert.alert('Please enter a name');
    } else {
      let Obj = {
        name: this.state.name,
        id: Date.now().toString(),
      };
      this.state.todos;
      this.setState(prevState => ({
        todos: [...prevState.todos, Obj],
        name: '',
        searchArray: [...prevState.todos, Obj],
      }));
    }
  };
  handleDelete = (values: {id: string}) => {
    this.setState(prevState => ({
      todos: [...prevState.todos.filter(v => v.id !== values.id)],
    }));
  };

  handleEdit = (values: {name: string; id: string}) => {
    this.setState({name: values.name, id: values.id});
  };
  updateHandler = () => {
    this.setState({
      todos: this.state.todos.map(ele => {
        ele.id === this.state.id && (ele.name = this.state.name);
        return ele;
      }),
      name: '',
      id: null,
    });
  };
  // handleSearch = () => {
  //   let searchItem = this.state.searchArray.filter(value => {
  //     if (this.state.name === '') {
  //       return this.state.searchArray;
  //     } else {
  //       return value.name.toLowerCase().includes(this.state.name);
  //     }
  //   });
  //   this.setState(() => ({
  //     todos: searchItem,
  //   }));
  // };

  // handleSearchInput = (e: any) => {
  //   // console.log(e);
  //   let newTodo = this.state.searchArray.filter(todo => {
  //     return todo.name.toLowerCase().includes(e);
  //   });
  //   this.setState({todos: newTodo});
  // };
  render() {
    return (
      <View>
        <SafeAreaView>
          <View style={styles.container}>
            <TextInput
              testID="nameinput"
              placeholder="Enter Name"
              style={styles.inputElement}
              onChangeText={this.handleText}
              value={this.state.name}
            />

            <TouchableOpacity
              testID="addtodo"
              style={styles.buttonStyles}
              onPress={
                this.state.id === null ? this.handleAddTodo : this.updateHandler
              }>
              <Text style={styles.text}>
                {this.state.id === null ? 'Add Name' : 'Update'}
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <TextInput
              placeholder="Search Name"
              style={styles.inputElement2}
              onChangeText={this.handleSearchInput}
              testID="inputField"
            />
          </View> */}

          {this.state.todos
            .map((u, i) => {
              return (
                <View key={i + 1} style={styles.dynamicCard}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View style={{width: '50%'}}>
                      <Text style={{overflow: 'hidden'}} numberOfLines={1}>
                        {u.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingHorizontal: 5,
                      }}>
                      <TouchableOpacity
                        style={styles.button}
                        testID="edit"
                        onPress={() => this.handleEdit(u)}>
                        <Text style={styles.text}>Edit</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={styles.button}
                        testID="delete"
                        onPress={() => this.handleDelete(u)}>
                        <Text style={styles.text}>Delete</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })
            .reverse()}
          <View>
            <Text>
              <AntDesign name="leftcircle" size={30} color="#900" />
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  inputElement: {
    borderColor: '#CAD5E2',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#CAD5E2',
    width: '70%',
    marginVertical: 28,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    paddingHorizontal: 18,
  },
  buttonStyles: {
    marginVertical: 30,
    backgroundColor: '#007bff',
    padding: 10,
    paddingHorizontal: 8,
    color: '#fffff',
    elevation: 6,
    borderRadius: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  inputElement2: {
    borderColor: '#CAD5E2',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#CAD5E2',
    width: '97%',
    marginVertical: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    paddingHorizontal: 18,
    marginHorizontal: 6,
  },
  dynamicCard: {
    borderColor: '#CAD5E2',
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#CAD5E2',
    width: '97%',
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    paddingHorizontal: 18,
    marginHorizontal: 6,
  },
});
