import {combineReducers} from 'redux';
import {countReducer} from './counterReducer';
import {TodoReducer} from './todoReducer';
import {AddtoCart} from './cartReducer';
import {ApiReducer} from './ApicallReducer';

export const rootReducer = combineReducers({
  countReducer: countReducer,
  TodoReducer: TodoReducer,
  AddToCart: AddtoCart,
  ApiReducer: ApiReducer,
});
