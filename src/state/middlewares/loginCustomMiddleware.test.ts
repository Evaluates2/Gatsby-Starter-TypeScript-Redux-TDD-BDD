import loginCustomMiddleware from './loginCustomMiddleware';
import { Dispatch } from 'react';
import { LOGIN_REQUESTED, LOGIN_SUCCESS } from '../types/login';
import { AnyAction } from 'redux';
import loginService from '../../services/simple-login.service';

describe('loginCustomMiddleware', () => {

  it('should handle LOGIN_REQUESTED action in happy case', async () => {

    const middleware = loginCustomMiddleware();

    const fakeStore = {
      dispatch: jest.fn(),
      getState: jest.fn()
    }
    
    jest.mock('../../services/simple-login.service', () => {
      return Promise.resolve({
        userId: {
          data: {
            id: 42
          }
        }
      })
    })
    
    const fakeNext: Dispatch<any> = (value: any): void => { }
    const fakeAction: AnyAction = { type: LOGIN_REQUESTED }

    await middleware(fakeStore)(fakeNext)(fakeAction)
    
    expect(fakeStore.dispatch).toHaveBeenCalledTimes(1)

    const handledAction = fakeStore.dispatch.mock.calls[0][0]

    expect(handledAction.type).toEqual(LOGIN_SUCCESS)
    expect(handledAction.payload.userId.data.id).toEqual(42)

  })

  it('should handle LOGIN_REQUESTED action when logging in fails ', async () => {

    const middleware = loginCustomMiddleware();

    const fakeStore = {
      dispatch: jest.fn(),
      getState: jest.fn()
    }

    jest.mock('../../services/simple-login.service', () => {
      throw new Error('uh oh!')
    })

    const mockLoginService = {}

    const fakeNext: Dispatch<any> = (value: any): void => { }
    const fakeAction: AnyAction = { type: LOGIN_REQUESTED }

    await middleware(fakeStore)(fakeNext)(fakeAction)
    
    expect(fakeStore.dispatch).toHaveBeenCalledTimes(1)

    const handledAction = fakeStore.dispatch.mock.calls[0][0]

    expect(handledAction.type).toEqual(LOGIN_SUCCESS)
    expect(!isNaN(parseInt(handledAction.payload.userId.data.id))).toBeTruthy()

  })

  it('should call next for action with unkown type', async () => {

    const middleware = loginCustomMiddleware();

    const fakeStore = {
      dispatch: jest.fn(),
      getState: jest.fn()
    }

    const fakeNext: Dispatch<any> = jest.fn()
    const fakeAction: AnyAction = { type: ""}

    await middleware(fakeStore)(fakeNext)(fakeAction)
    
    expect(fakeStore.dispatch).toHaveBeenCalledTimes(0)
    expect(fakeNext).toHaveBeenCalledWith(fakeAction)

  })

})