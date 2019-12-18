
import { combineReducers } from 'redux';
import loginReducer from './login';
import todosReducer from './todos';

export default combineReducers({
  loginReducer,
  todosReducer,
});
