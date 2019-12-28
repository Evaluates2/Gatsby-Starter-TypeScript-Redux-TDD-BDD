import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS, LOGOUT } from '../types/login';

export interface ILoginState {
  fetching: boolean,
  error: object | null,
  userId: number | null
}

export const initialState = {
  fetching: false,
  error: null,
  userId: null,
};

interface IAction {
  type?: string;
  payload?: any;
}

const reducer = (state: ILoginState = initialState, action: IAction = {}): ILoginState => {

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
        userId: null,
      };

    default:
      return state;
  }
};

export default reducer;
