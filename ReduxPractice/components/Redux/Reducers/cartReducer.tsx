/* eslint-disable @typescript-eslint/no-unused-vars */
// import {ADD_TO_CART, DECREASE_COUNT, INCREASE_COUNT} from '../action/name';

import {Alert} from 'react-native';
import {
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_ITEM_CART,
  INCREASE_COUNT,
  SHOW_API_DATA,
} from '../Action/actionName';

const initialVariables: any = [];

export const AddtoCart = (state = initialVariables, action: any) => {
  switch (action.type) {
    case INCREASE_COUNT: {
      let elem = state.map((v: any, i: number) => {
        if (v['product_id'] === action.payload) {
          return {
            ...v,
            product_quantity: v['product_quantity'] + 1,
          };
        }
        return v;
      });
      return elem;
    }
    // eslint-disable-next-line no-fallthrough
    case DECREASE_COUNT: {
      let elem = state.map((v: any, i: number) => {
        if (v.product_id === action.payload) {
          return {
            ...v,
            product_quantity:
              v.product_quantity < 1
                ? v.product_quantity
                : v.product_quantity - 1,
          };
        }
        return v;
      });

      return elem;
    }
    // eslint-disable-next-line no-fallthrough
    case ADD_TO_CART: {
      return [
        ...state,
        {
          product_id: action.payload.id,
          product_quantity: 1,
          product_data: action.payload,
          product_added_timestamp: Date.now(),
        },
      ];
    }

    case DELETE_ITEM_CART: {
      // console.log(action.payload, 'from reducer');
      let updatedProducts = state.filter(
        (v: any) => v.product_id !== action.payload,
      );
      return updatedProducts;
    }

    default:
      return state;
  }
};
