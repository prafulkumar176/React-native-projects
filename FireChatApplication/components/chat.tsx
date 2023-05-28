import React, {Component} from 'react';
import {Alert, Share, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {GiftedChat, SystemMessage} from 'react-native-gifted-chat';

interface IState {
  messages: any[];
  step: number;
  SendMessages: any[];
  isTyping: boolean;
}

interface IProps {
  messages?: any[];
  onSend?: () => void;
  onInputTextChanged?: void;
}

export default class Chat extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    messages: [],
    step: 0,
    SendMessages: [],
    isTyping: false,
  };

  setIsTyping = () => {
    this.setState({
      isTyping: !this.state.isTyping,
    });
  };

  onSend = (messages = []) => {
    const step = this.state.step + 1;
    const data = messages[0];

    this.setState({SendMessages: [...this.state.SendMessages, data]});

    const myMsg = {...data, senderId: 1, recieverId: 2};
    this.setState((previousState: any) => {
      // const sentMessages = messages[0];
      return {
        messages: GiftedChat.append(previousState.messages, myMsg),
        step,
      };
    });
    firestore()
      .collection('Users')
      .doc('Prafulkumar')
      .collection('messages')
      .add({...myMsg, createdAt: firestore.FieldValue.serverTimestamp()});
  };

  componentDidMount() {
    const querydata = firestore()
      .collection('Users')
      .doc('Sunny')
      .collection('messages')
      .orderBy('createdAt', 'desc');

    querydata.onSnapshot(snapshot => {
      const allmessages = snapshot.docs.map((snap: any) => {
        return {
          ...snap?.data(),
          createdAt: new Date(),
        };
      });
      this.setState({SendMessages: [this.state.SendMessages, ...allmessages]});
    });
  }

  onShare = async () => {
    try {
      await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  renderSystemMessage = (props: any) => {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  };

  render() {
    return (
      <View style={{flex: 1}} testID="chatpart">
        <GiftedChat
          testId="chat"
          messages={this.state.SendMessages}
          onSend={this.onSend}
          user={{
            _id: 2,
          }}
          isTyping={this.state.isTyping}
          loadEarlier={true}
          inverted={true}
          onInputTextChanged={this.setIsTyping}
          infiniteScroll={true}
          onLongPress={this.onShare}
          renderSystemMessage={this.renderSystemMessage}
        />
      </View>
    );
  }
}
