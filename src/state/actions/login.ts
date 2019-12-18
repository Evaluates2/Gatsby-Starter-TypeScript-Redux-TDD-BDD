import { LOGIN_FAILED, LOGIN_REQUESTED, LOGIN_SUCCESS } from '../types/login';

export const loginRequested = () => ({
  type: LOGIN_REQUESTED
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error
});