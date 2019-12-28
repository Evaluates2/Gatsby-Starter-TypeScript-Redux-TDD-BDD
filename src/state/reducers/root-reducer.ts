
import { combineReducers } from 'redux';
import loginReducer, { ILoginState } from './login';
import todosReducer from './todos';

export default combineReducers({
  loginReducer,
  todosReducer,
});

export interface IStore {
  loginReducer: ILoginState,
  todosReducer: ITodosState
}
