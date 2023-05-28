import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
import {val} from '../jestSetup';

jest.mock('@react-native-firebase/firestore', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// globalThis.setTimeout = jest
//   .fn()
//   .mockImplementation(callback => callback && callback());

val;

describe('Component', () => {
  it('renders correctly', () => {
    const {getByTestId, getByText, queryByText} = render(<App />);
    // const data = getByText('LOADING.......');
    // console.log(data.instance);

    // jest.useFakeTimers();
    // expect(data.props.children).toBe('LOADING.......');
    // jest.useFakeTimers();
    // const mytext = queryByText('Data is available');
    // jest.advanceTimersByTime(1000);
    // expect(mytext?.props.children).toBeTruthy();
    // jest.runAllTimers();
    // const text = getByText('Data is available');
  });
});
