import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
// import websocketMiddleware from './middlewares/websocket';
import combinedReducers from './reducers/root-reducer';

function reducer() {
  //...
}

// preloadedState will be passed in by the plugin
// export default preloadedState => {
//   return createStore(reducer, preloadedState, );
// };
  

const configureStore = () => {
  return createStore(
    combinedReducers,
    load({ states: ['authenticatedUserReducer'], disableWarnings: true }),
    composeWithDevTools(applyMiddleware(save({ states: ['authenticatedUserReducer'] }), 
    // websocketMiddleware()
    ))
  );
};

export default configureStore;