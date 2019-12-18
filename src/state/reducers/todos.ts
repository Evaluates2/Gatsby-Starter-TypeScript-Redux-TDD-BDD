import { TODOS_SUCCESS, TODOS_REQUESTED, TODOS_FAILED } from '../types/todos';

export const initialState = {
  fetching: false,
  error: null,
  todos: [],
};

interface IAction {
    type?: string;
    payload?: any;
}

const reducer = (state = initialState, action: IAction = {}) => {

  console.log('getting action ', action);

  const {type, payload} = action;

  switch (type) {
    case TODOS_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case TODOS_SUCCESS:
      console.log('in todos success!');
      return {
        ...state,
        fetching: false,
        error: null,
        todos: payload,
      };

    case TODOS_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default reducer;
