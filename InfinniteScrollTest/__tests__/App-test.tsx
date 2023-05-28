import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';
jest.mock('react-native-calendar-strip', () => 'CalendarStrip');
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/Octicons', () => 'Octicons');
describe('Component Render', () => {
  test('Component must render', () => {
    const {getByTestId} = render(<App />);
  });
});
