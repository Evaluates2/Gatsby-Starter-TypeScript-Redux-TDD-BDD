
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/root-reducer';
import { load, save } from 'redux-localstorage-simple';
import { createStore, applyMiddleware, compose } from 'redux';
import todosCustomMiddleware from './middlewares/todosCustomMiddleware';
import loginCustomMiddleware from './middlewares/loginCustomMiddleware';

export default preloadedState => {
  return createStore(
    combinedReducers,
    getLoadedState(preloadedState),
    composeWithDevTools(
      applyMiddleware(
        save({ states: ['loginReducer'] }),
        todosCustomMiddleware(),
        loginCustomMiddleware()
      )
    ),

  );
};

const getLoadedState = (preloadedState) => {
  if (typeof window !== 'undefined')
    return {
      ...preloadedState,
      ...load({ states: ['loginReducer'], disableWarnings: true }),
    }
  return {
    ...preloadedState,
  }
}