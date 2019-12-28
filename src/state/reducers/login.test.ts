import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../types/login';
import loginReducer from './login'
import { initialState as loginReducerInitialState } from './login'; 

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

    expect(finalState).toEqual({ fetching: true, error: null, userId: null })
  })

  it('should handle a LOGIN_SUCCESS action.', () => {

    const initialState = {
      fetching: true,
      error: null,
      userId: null,
    }

    const fakeUserId = 1

    const incomingAction = {
      type: LOGIN_SUCCESS,
      payload: {
        userId: {
          data: {
            id: fakeUserId
          }
        }
      }
    }

    const finalState = loginReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: false, error: null, userId: fakeUserId })
  })

  it('should handle a LOGIN_FAILED action.', () => {

    const initialState = {
      fetching: false,
      error: null,
      userId: null,
    };

    const fakeLoginError = {
      code: 500,
      message: 'Whoops!',
    };

    const incomingAction = {
      type: LOGIN_FAILED,
      payload: fakeLoginError
    }

    const finalState = loginReducer(initialState, incomingAction)

    expect(finalState).toEqual({ fetching: false, error: fakeLoginError, userId: null })

  })

  it('should handle a LOGOUT action.', () => {

    const initialState = {
      fetching: false,
      error: null,
      userId: 2,
    };

    const expectedFinalState = { 
      fetching: initialState.fetching, 
      error: initialState.error, 
      userId: null 
    };

    const incomingAction = {
      type: LOGOUT
    }

    const finalState = loginReducer(initialState, incomingAction)

    expect(finalState).toEqual(expectedFinalState)

  })

  it('should return state when passed no matching action type.', () => {

    const initialState = {
      fetching: true,
      error: { something: "ok"},
      userId: 1,
    };

    const incomingAction = { }

    const finalState = loginReducer(initialState, incomingAction)

    expect(finalState).toEqual(initialState)

  })

  it('should return intial state when passed no params.', () => {

    const finalState = loginReducer()

    expect(finalState).toEqual(loginReducerInitialState)

  })

})