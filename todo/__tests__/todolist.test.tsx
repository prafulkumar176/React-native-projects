import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import TodoList from '../components/todolist';
import {Alert} from 'react-native';

// global.alert = jest.fn()
// jest.spyOn(globalThis, 'alert').mockImplementation(() => jest.fn());
describe('todo renderer', () => {

  test('addinTodo', () => {
    const {getByTestId, getByPlaceholderText, getByText} = render(<TodoList />);
    const textInput = getByPlaceholderText('Enter Name');
    fireEvent.changeText(textInput, 'test');
    expect(textInput.props.value).toBe('test');

    const addTodo = getByTestId('addtodo');
    fireEvent.press(addTodo);
    fireEvent.press(addTodo);

    const text = getByText('test');
    expect(text.props.children).toBe('test');
  });

  test('deleteTodo', () => {
    const {getByTestId, getByPlaceholderText} = render(<TodoList />);
    const textInput = getByPlaceholderText('Enter Name');
    fireEvent.changeText(textInput, 'test');
    const addtodo = getByTestId('addtodo');
    fireEvent.press(addtodo);
    const deleteTodo = getByTestId('delete');
    fireEvent.press(deleteTodo);
  });

  test('editTodo', () => {
    const {getByTestId, getByPlaceholderText, getByText} = render(<TodoList />);
    const textInput = getByPlaceholderText('Enter Name');
    fireEvent.changeText(textInput, 'test');
    const addtodo = getByTestId('addtodo');
    fireEvent.press(addtodo);
    const editTodo = getByTestId('edit');
    fireEvent.press(editTodo);
    const updateInput = getByPlaceholderText('Enter Name');
    fireEvent.changeText(updateInput, 'test');
    const updated = getByTestId('addtodo');
    fireEvent.press(updated);
    const text = getByText('test');
    expect(text.props.children).toBe('test');
  });
});
