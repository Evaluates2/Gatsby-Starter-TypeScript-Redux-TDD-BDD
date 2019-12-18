import { TODOS_FAILED, TODOS_REQUESTED, TODOS_SUCCESS } from '../types/todos';

export const todosRequested = () => ({
  type: TODOS_REQUESTED,
});

export const todosSuccess = todos => {
  return {
    type: TODOS_SUCCESS,
    payload: todos,
  };

};

export const todosFailed = error => ({
  type: TODOS_FAILED,
  payload: error,
});
