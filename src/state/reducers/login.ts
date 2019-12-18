import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT } from '../types/login';

export const initialState = {
  fetching: false,
  error: null,
  userId: null,
};

interface IAction {
  type?: string;
  payload?: any;
}

const reducer = (state = initialState, action: IAction = {}) => {

  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        fetching: true,
        error: null,
        userId: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: payload.userId.data.id,
        fetching: false,
        error: null,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        fetching: false,
        error: payload,
      };

    case LOGOUT:
      return {
        ...state,
        fetching: false,
        error: payload,
        userId: null,
      };

    default:
      return state;
  }
};

export default reducer;
