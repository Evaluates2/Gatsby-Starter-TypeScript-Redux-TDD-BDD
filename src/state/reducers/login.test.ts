import { LOGIN_REQUESTED } from '../types/login';
import loginReducer from './login'
describe("loginReducer", () => {

  it('should handle a LOGIN_REQUESTED action.', () => {

    const initialState = {
      fetching: false,
      error: null,
      userId: null,
    }

    const incomingAction = {
      type: LOGIN_REQUESTED
    }

    const finalState = loginReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: true, error: null, "userId": null })
  })

  it('should handle a LOGIN_REQUESTED action.', () => {

    //   const fakeLogin = [
    //   {
    //       id: 1,
    //       title: 'Derp',
    //       description: 'derp description',
    //   },
    //   {
    //       id: 2,
    //       title: 'Derp2',
    //       description: 'derp2 description',
    //   }];

    //   const initialState = {
    //     fetching: false,
    //     error: null,
    //     todos: [],
    //   }

    //   const incomingAction = {
    //     type: TODOS_SUCCESS,
    //     payload: fakeTodoReponse
    //   }

    const initialState = {
      fetching: false,
      error: null,
      userId: null,
    };

    const incomingAction = {}

    const finalState = loginReducer(initialState, incomingAction)

    // expect(finalState).toEqual({ fetching: false, error: null, userId: !null })
    // })
    // it('should handle a TODOS_FAILED action.', () => {

    const fakeTodoError = [
      {
        code: 500,
        message: 'Whoops!',
      }];

    //   const initialState = {
    //     fetching: false,
    //     error: null,
    //     todos: [],
    //   }

    //   const incomingAction = {
    //     type: TODOS_FAILED,
    //     payload: fakeTodoError
    //   }

    //   const finalState = todosReducer(initialState, incomingAction)

    expect(finalState).toEqual({
      error: null,
      "userId": null,
      fetching: false,
    })
    // })
    expect(true).toEqual(true)

  })
})