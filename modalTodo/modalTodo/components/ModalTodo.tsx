/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Alert,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios-react';

interface IProps {}
interface IState {
  todos: any[];
  name: string;
  id: string;
  ModalVisible: boolean;
  element: any[];
  isloading: boolean;
}

export class ModalTodo extends Component<IProps, IState> {
  state: IState = {
    todos: [],
    name: '',
    id: '',
    ModalVisible: false,
    element: [],
    isloading: true,
  };

  handleOpenModal = () => {
    console.log('Modal opened');
    this.setState({ModalVisible: true});
  };
  handleInput = async (e: any) => {
    // console.log(e.target.value);
    this.setState({name: e});
    let items = {
      name: e,
      id: Date.now(),
    };

    try {
      await AsyncStorage.setItem('DATA', JSON.stringify(items));
    } catch (error) {
      console.log(error);
    }
  };

  handleAddTodo = async () => {
    try {
      let data = await AsyncStorage.getItem('DATA');
      this.setState({element: [...this.state.element, JSON.parse(data)]});

      if (this.state.name === '') {
        Alert.alert('Please enter a name', 'Required Parameter');
      } else if (this.state.id === '') {
        let Obj = {
          name: this.state.name,
          id: this.state.todos.length + 1,
        };
        this.setState(prevState => ({
          todos: [...prevState.todos, Obj],
          id: '',
          name: '',
        }));
        this.setState({ModalVisible: false});
      } else {
        let newObj = this.state.todos.map((v: {name: string; id: string}) => {
          return this.state.id === v.id
            ? {...v, name: this.state.name, id: this.state.id}
            : v;
        });
        this.setState({todos: newObj});
        this.setState({id: '', name: ''});
        this.setState({ModalVisible: false});
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = (values: {id: string}) => {
    this.setState(prevState => ({
      todos: [...prevState.todos.filter(v => v.id !== values.id)],
    }));
  };

  handleEdit = (values: {name: string; id: string}) => {
    this.setState({ModalVisible: true});
    this.setState({name: values.name, id: values.id});
  };

  componentDidUpdate = () => {
    setTimeout(() => {
      this.setState({isloading: false});
    }, 2000);
    // axios.get();
  };

  render() {
    console.log(this.state.element);
    return (
      <View>
        <SafeAreaView>
          <Modal
            animationType="slide"
            visible={this.state.ModalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({ModalVisible: true});
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ActivityIndicator
                  size="small"
                  color="#0000ff"
                  animating={this.state.isloading}
                />

                <TextInput
                  placeholder="Enter Name"
                  style={styles.inputElement}
                  onChangeText={this.handleInput}
                  value={this.state.name}
                />
                <View style={styles.container}>
                  <TouchableOpacity
                    onPress={() => this.setState({ModalVisible: false})}
                    style={styles.hideBtn}>
                    <Text style={styles.text}>Hide </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.Addtodo}
                    onPress={this.handleAddTodo}>
                    <Text style={styles.text}>Add Todo </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {this.state.element.map((u, i) => {
            return (
              <View style={styles.dynamicCard} key={i + 1}>
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
                      onPress={() => this.handleEdit(u)}>
                      <Text style={styles.text}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => this.handleDelete(u)}>
                      <Text style={styles.text}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={this.handleOpenModal}
                  style={styles.AddtodoElement}>
                  <Text style={styles.openModal}>+</Text>
                </TouchableOpacity>
              </View>
            );
          })}

          <TouchableOpacity
            onPress={this.handleOpenModal}
            style={styles.addContainer}>
            <Text style={styles.openModal}>+</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
    height: 200,
  },

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
  Addtodo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginHorizontal: 5,
    marginRight: 23,
  },
  hideBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    marginLeft: 35,
    marginHorizontal: 18,
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
  openModal: {
    backgroundColor: 'pink',
    width: '10%',
    textAlign: 'center',
    height: 40,
    paddingTop: 8,
    borderRadius: 50,
  },
  addContainer: {
    textAlign: 'center',
    position: 'relative',
    top: 650,
    left: 330,
  },
  AddtodoElement: {
    position: 'relative',
    top: 600,
    left: 320,
  },
});

export default ModalTodo;
