import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import Counter from '../packages/blocks/counterApp/Counter';

describe('Counter must render', () => {
  test('counter funtionalities', () => {
    const {getByTestId} = render(<Counter />);
    const count = getByTestId('count');
    const increment = getByTestId('increment');
    const decremment = getByTestId('decrement');
    const reset = getByTestId('reset');

    fireEvent.press(increment);
    fireEvent.press(decremment);
    fireEvent.press(reset);

    expect(count.props.children).toBe(0);
  });
});
