
import { composeWithDevTools } from 'redux-devtools-extension';
// import { load, save } from 'redux-localstorage-simple';
import customMiddleware from './middlewares/customMiddleware';
import combinedReducers from './reducers/root-reducer';

import { createStore, applyMiddleware, compose } from 'redux';
import todosCustomMiddleware from './middlewares/todosCustomMiddleware';
import loginCustomMiddleware from './middlewares/loginCustomMiddleware';

// preloadedState will be passed in by the gatsby plugin
export default preloadedState => {
  return createStore(
    combinedReducers,
    preloadedState,

    composeWithDevTools(applyMiddleware(todosCustomMiddleware(), loginCustomMiddleware())),

  );
};

// const configureStore = () => {
//   return createStore(
//     combinedReducers,
//     // initialState,
//     // load({  }),
//     // composeWithDevTools(applyMiddleware(save({ }),
//     applyMiddleware(customMiddleware())
//     // )
//   //
//     // )
//   );
// };

// export default configureStore;
