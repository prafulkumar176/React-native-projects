import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chat from '../components/chat';
import {GiftedChat} from 'react-native-gifted-chat';

jest.mock('@react-native-firebase/firestore', () => ({
  collection: jest.fn().mockReturnThis(),
  doc: jest.fn().mockReturnThis(),
  add: jest.fn(),
}));

jest.mock('react-native-gifted-chat', () => 'ActionSheet');

jest.mock('react-native', () => ({
  Platform: {
    OS: 'ios',
  },
  Share: {
    share: jest.fn(),
  },
  Alert: {
    alert: jest.fn(),
  },
}));

// describe('Chat', () => {
//   it('should render the chat component', () => {
//     const {getByTestId} = render(<Chat />);
//     const giftedChatComponent = getByTestId('gifted-chat');
//     expect(giftedChatComponent).toBeDefined();
//   });

//   it('should call onSend when sending a message', () => {
//     const {getByTestId} = render(<Chat />);
//     const onSendMock = jest.fn();
//     const giftedChatComponent = getByTestId('chatpart').instance;
//     const countIncrement = getByTestId('chatpart').instance;
//     expect(countIncrement.props.messages).toBe([]);

//     giftedChatComponent.props.onSend([{text: 'Hello', user: {_id: 1}}]);
//     expect(onSendMock).toHaveBeenCalled();

//     const data = [
//       {
//         text: 'Hello',
//         user: {_id: 1},
//         createdAt: new Date(),
//       },
//     ];

//     giftedChatComponent.state.SendMessages(data);

//     expect(giftedChatComponent.state.SendMessages(data)).toHaveBeenCalled();
//     // You can also check if the state is updated correctly
//   });

//   test('on change text event', () => {
//     const {getByTestId} = render(<Chat />);
//     // const onSendMock = jest.fn();
//     const giftedChatComponent = getByTestId('chatpart').instance;

//     // const countIncrement = getByTestId('chatpart').instance
//     // const initialState =  giftedChatComponent.state.isTyping
//     // // expect(giftedChatComponent.props.isTyping).toBe(false);
//     // fireEvent(giftedChatComponent , 'setIsTyping')

//     // const updated  = giftedChatComponent.state.isTyping

//     // expect(updated).toBe(!initialState)
//   });

//   // it('ontext change event should render the chat component', () => {
//   //   const {getByTestId} = render(<Chat />);
//   //   const GiftedChat = getByTestId('chatpart').instance
//   //   // const onLongPress  = jest.fn()
//   //   GiftedChat.props.onLongPress()

//   // })

//   // it('should call onShare when long pressing', () => {
//   //   const {getByTestId} = render(<Chat />);
//   //   const onShareMock = jest.fn();
//   //   const giftedChatComponent = getByTestId('chat');

//   //   fireEvent(giftedChatComponent, 'onLongPress');
//   //   expect(onShareMock).toHaveBeenCalled();
//   // });

//   // test('on send messages when pressed', () => {
//   //   const {getByTestId} = render(<Chat />);
//   //   const onSendMock = jest.fn();
//   //   const giftedChatComponent = getByTestId('chatpart');

//   //   fireEvent.press(giftedChatComponent.findByProps(GiftedChat));
//   //   expect(onSendMock).toHaveBeenCalled();
//   // });
// });
