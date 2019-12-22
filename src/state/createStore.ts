
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers/root-reducer';
import { load, save } from 'redux-localstorage-simple';
import { createStore, applyMiddleware, compose } from 'redux';
import todosCustomMiddleware from './middlewares/todosCustomMiddleware';
import loginCustomMiddleware from './middlewares/loginCustomMiddleware';

export default preloadedState => {
  return createStore(
    combinedReducers,
    {
      ...preloadedState,
      ...load({ states: ['loginReducer'], disableWarnings: true }),

    },
    composeWithDevTools(
      applyMiddleware(
        save({ states: ['loginReducer'] }),
        todosCustomMiddleware(),
        loginCustomMiddleware()
      )
    ),

  );
};
