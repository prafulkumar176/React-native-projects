import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('@react-native-firebase/firestore', () => {
  return {
    firestore: jest.fn(() => {}),
    collection: jest.fn(),
    doc: jest.fn(),
    orderBy: jest.fn(),
  };
});

jest.mock('react-native-gifted-chat', () => 'firestore');

// Note: test renderer must be required after react-native.


it('renders correctly', () => {
  render(<App />);
});
