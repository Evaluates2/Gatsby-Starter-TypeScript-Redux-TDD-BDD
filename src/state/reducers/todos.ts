import { TODOS_SUCCESS, TODOS_REQUESTED, TODOS_FAILED } from '../types/todos';
import { ITodo } from '../../models/todo';

export interface ITodosState {
  fetching: boolean,
  error: object | null,
  todos: ITodo | null
}

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

  const {type, payload} = action;

  switch (type) {
    case TODOS_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case TODOS_SUCCESS:
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
