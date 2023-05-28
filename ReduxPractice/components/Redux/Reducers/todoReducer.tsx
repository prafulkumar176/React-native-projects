import {DELETE, EDIT, TODOS} from '../Action/actionName';

export const TodoReducer = (state: any = {todos: []}, action: any) => {
  const obj = {
    id: Date.now(),
    values: action.payload,
  };
  switch (action.type) {
    case TODOS: {
      return {
        ...state,
        todos: [...state.todos, obj],
      };
    }
    case DELETE: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case EDIT: {
      console.log(action.payload);
      return {
        todos: state.todos.map((v: any) => {
          if (v.id === action.payload.id) {
            return {
              ...v,
              values: action.payload.updatedData,
            };
          }
          return v;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
