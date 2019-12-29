import { TODOS_REQUESTED } from '../types/todos';
import loginService, { ILoginSuccess, ILoginError } from '../../services/simple-login.service';
import { todosSuccess, todosFailed } from '../actions/todos';
import { LOGIN_REQUESTED } from '../types/login';
import { loginSuccess, loginFailed } from '../actions/login';
import { MiddlewareAPI, AnyAction, Action } from 'redux';
import { ILoginState } from '../reducers/login';
import { Dispatch } from 'react';


export interface MiddlewareTodoParams<S> {
  store: MiddlewareAPI<any>;
  next: Dispatch<S>;
  action: Action<S>;
  [otherProperty: string]: {};
}

const loginCustomMiddleware = () => {
  return (store: MiddlewareAPI<any>) => (next: Dispatch<any>) => async (action: AnyAction) => {
    switch (action.type) {

      case LOGIN_REQUESTED:
        try {
          const userId: ILoginSuccess | ILoginError = await loginService();
          store.dispatch(loginSuccess(userId));
        } catch (error) {
          store.dispatch(loginFailed(error));
        }
        break;

      default:
        next(action);
    }
  };
};

export default loginCustomMiddleware;
