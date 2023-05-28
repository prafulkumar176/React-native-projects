import React, {Component} from 'react';
import {Platform} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

interface IState {
  messages: any[];
  step: number;
  SendMessages: any[];
}

interface IProps {}

export default class Chat extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    messages: [],
    step: 0,
    SendMessages: [],
  };

  onSend = (messages = []) => {
    const step = this.state.step + 1;
    const data = messages[0];

    this.setState({SendMessages: [...this.state.SendMessages, data]});

    const myMsg = {...data, senderId: 1, recieverId: 2};
    this.setState((previousState: any) => {
      // const sentMessages = messages[0];
      console.log(messages[0], 'messages');
      return {
        messages: GiftedChat.append(previousState.messages, myMsg),
        step,
      };
    });
    firestore()
      .collection('Users')
      .doc('Prafulkumar')
      .collection('messages')
      .add({...myMsg, createdAt: firestore.FieldValue.serverTimestamp()})
      .then(() => {
        console.log('data addesda');
      });
  };

  componentDidMount() {
    const querydata = firestore()
      .collection('Users')
      .doc('Musharrat')
      .collection('messages')
      .orderBy('createdAt', 'desc');

    querydata.onSnapshot(snapshot => {
      const allmessages = snapshot.docs.map((snap: any) => {
        return {
          ...snap?.data(),
          createdAt: new Date(),
        };
      });
      this.setState({SendMessages: allmessages});
    });
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.SendMessages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
