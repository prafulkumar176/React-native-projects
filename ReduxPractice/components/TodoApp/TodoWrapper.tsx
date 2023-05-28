import React from 'react';
import {Provider} from 'react-redux';
import MainTodoApp from './MainTodoApp';
import {store} from '../Redux/Store/store';

export default function TodoWrapper() {
  return (
    <Provider store={store}>
      <MainTodoApp />
    </Provider>
  );
}
