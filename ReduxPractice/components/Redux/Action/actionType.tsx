// import {ADD_TO_CART, DECREASE_COUNT, INCREASE_COUNT} from './name';
import {
  ADD_TO_CART,
  API_CALL,
  DECREASE_COUNT,
  DECREMENT,
  DELETE,
  DELETE_ITEM_CART,
  EDIT,
  INCREASE_COUNT,
  INCREMENT,
  RESET,
  TODOS,
} from './actionName';

export const plus = (payload: any) => {
  return {
    type: INCREMENT,
    payload: payload,
  };
};

export const minus = (payload: any) => {
  return {
    type: DECREMENT,
    payload: payload,
  };
};

export const reset = (payload: any) => {
  return {
    type: RESET,
    payload: payload,
  };
};

export const todos = (payload: any) => {
  return {
    type: TODOS,
    payload: payload,
  };
};

export const deleteItem = (payload: any) => {
  return {
    type: DELETE,
    payload: payload,
  };
};

export const editItem = (payload: any) => {
  return {
    type: EDIT,
    payload: payload,
  };
};

export const IncreaseCount = (payload: any) => {
  return {
    type: INCREASE_COUNT,
    payload: payload,
  };
};

export const DecreaseCount = (payload: any) => {
  return {
    type: DECREASE_COUNT,
    payload: payload,
  };
};

export const addtocart = (payload: any) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const removeItem = (payload: any) => {
  return {
    type: DELETE_ITEM_CART,
    payload: payload,
  };
};

export const ApiCall = () => {
  return {
    type: API_CALL,
  };
};
