import {API_CALL} from '../Action/actionName';
const initialVariables2 = {
  data: [],
};
export const ApiReducer = (state = initialVariables2, action: any) => {
  switch (action.type) {
    case API_CALL: {
      console.log(state, action);
      return {
        ...state,
        data: [...state.data, action],
      };
    }

    default:
      return state;
  }
};
