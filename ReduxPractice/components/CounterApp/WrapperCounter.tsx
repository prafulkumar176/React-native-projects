import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../Redux/Store/store';
import MainCounterApp from './MainCounterApp';

export default function WrapperCounter() {
  return (
    <Provider store={store}>
      <MainCounterApp />
    </Provider>
  );
}
