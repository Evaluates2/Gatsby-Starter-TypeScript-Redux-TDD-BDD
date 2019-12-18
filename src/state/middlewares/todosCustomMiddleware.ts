
import { TODOS_REQUESTED } from '../types/todos';
import todoService from '../../services/todos.service';
import { todosSuccess, todosFailed } from '../actions/todos';

const todosCustomMiddleware = () => {
  return store => next => async action => {
    switch (action.type) {
      case TODOS_REQUESTED:

        try {
          const todos = await todoService();
          store.dispatch(todosSuccess(todos));
        } catch (error) {
          store.dispatch(todosFailed(error));
        }

        break;

      default:
        next(action);

    }
  };
};

// const customMid = (store) => {
//   return next => action => {

//     console.log('umm ', next)
//     console.log('erm ', store)
//     switch (action.type) {
//       case TODOS_REQUESTED:

//         console.log('in todos requested...')

//         try {
//           // const todos = await todoService();

//           // const todos = []
//           // console.log('got todos cheay', todos)
//           // store.dispatch(todosSuccess([todos]))
//         }
//         catch (error) {
//           // dispatch(todosFailed(error))
//         }

//         return []

//         break;

//       default:
//         return store;
//         break;
//     }

//   };
// }

// export default customMiddleware;
// export default newCustomMiddleware;

// const newCustomMiddleware = () => {
//   let socket;

//   return store => next => action => {
//     switch (action.type) {
//     //   case WS_CONNECT:
//     //     if (socket) {
//     //       break;
//     //     }

//     //     socket = io(`${config.app.bolideWsUrl}/?userId=${action.userId}`, {
//     //       path: '/socket'
//     //     });

//     //     socket.on(UPDATED_TASK, task => {
//     //       store.dispatch(updateTask(task));
//     //     });
//     //     break;

//     //   case WS_DISCONNECT:
//     //     if (socket !== null) {
//     //       socket.close();
//     //     }
//     //     socket = null;
//     //     break;

//       default:
//         next(action);
//     }
//   };
// };

export default todosCustomMiddleware;
