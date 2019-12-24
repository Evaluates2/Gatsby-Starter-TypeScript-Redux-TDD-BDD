import todosReducer from './todos';
import { getEffectiveTypeParameterDeclarations } from 'typescript';
import todosService from '../../services/todos.service';
import { TODOS_SUCCESS, TODOS_REQUESTED, TODOS_FAILED } from '../types/todos';

describe("todoReducer", () => {

  it('should handle a TODOS_REQUESTED action.', () => {

    const initialState = {
      fetching: false,
      error: null,
      todos: [],
    }

    const incomingAction = {
      type: TODOS_REQUESTED
    }

    const finalState = todosReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: true, error: null, todos: [] })
  })

  it('should handle a TODOS_SUCCESS action.', () => {

    const fakeTodoReponse = [
    {
        id: 1,
        title: 'Derp',
        description: 'derp description',
    },
    {
        id: 2,
        title: 'Derp2',
        description: 'derp2 description',
    }];

    const initialState = {
      fetching: false,
      error: null,
      todos: [],
    }

    const incomingAction = {
      type: TODOS_SUCCESS,
      payload: fakeTodoReponse
    }

    const finalState = todosReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: false, error: null, todos: fakeTodoReponse })
  })
  it('should handle a TODOS_FAILED action.', () => {

    const fakeTodoError = [
    {
        code: 500,
        message: 'Whoops!',
    }];

    const initialState = {
      fetching: false,
      error: null,
      todos: [],
    }

    const incomingAction = {
      type: TODOS_FAILED,
      payload: fakeTodoError
    }

    const finalState = todosReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: false, error: fakeTodoError, todos: [] })
  })

})