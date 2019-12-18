import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS } from '../types/login';

export const initialState = {
  fetching: false,
  error: null
};

interface IAction {
    type?: string;
    payload?: any;
}

const reducer = (state = initialState, action: IAction = {}) => {
  
  const {type, payload} = action 

  switch (type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null
      };

    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload
      };

    default:
      return state;
  }
};

export default reducer;