import React from "react"
import renderer from "react-test-renderer"
import LoginBtn from "./login-btn"
import { Provider, useDispatch } from "react-redux"
import configureMockStore from "redux-mock-store"
import { LOGIN_REQUESTED, LOGIN_SUCCESS } from "../../state/types/login"

describe("LoginBtn", () => {
  describe("Rendering buttons properly based on props", () => {
    it('should render as "Login" btn when given no props.', () => {
      const mockStore = configureMockStore()

      const store = mockStore({
        loggedInReducer: {
          fetching: false,
          error: null,
          userId: null,
        },
      })

      const tree = renderer
        .create(
          <Provider store={store}>
            <LoginBtn />
          </Provider>
        )
        .toJSON()

      expect(tree.children).toContain("Login")
    })

    it('should render as "Login" btn when explicitly passed "false" prop.', () => {
      const mockStore = configureMockStore()

      const store = mockStore({
        loggedInReducer: {
          fetching: false,
          error: null,
          userId: null,
        },
      })

      const tree = renderer
        .create(
          <Provider store={store}>
            <LoginBtn currentlyLoggedIn={false} />
          </Provider>
        )
        .toJSON()

      expect(tree.children).toContain("Login")
    })

    it('should render as "Logout" btn when explicitly passed "false" prop.', () => {
      const mockStore = configureMockStore()

      const store = mockStore({
        loggedInReducer: {
          fetching: false,
          error: null,
          userId: null,
        },
      })

      const tree = renderer
        .create(
          <Provider store={store}>
            <LoginBtn currentlyLoggedIn={true} />
          </Provider>
        )
        .toJSON()

      expect(tree.children).toContain("Logout")
    })
  })

  describe("Displatching proper action when btn is clicked", () => {
    it("should dispatch the login event.", () => {
      const mockDispatch = jest.fn()
      jest.mock("react-redux", () => ({
        useSelector: jest.fn(),
        useDispatch: () => mockDispatch,
      }))

      const mockStore = configureMockStore()

      const store = mockStore({
        loggedInReducer: {
          fetching: false,
          error: null,
          userId: null,
        },
      })

      const tree = renderer
        .create(
          <Provider store={store}>
            <LoginBtn currentlyLoggedIn={true} />
          </Provider>
        )
        .toJSON()

      expect(tree.children).toContain("Logout")

      tree.props.onClick()

      const actions = store.getActions()
      expect(actions).toEqual([{ type: LOGIN_REQUESTED }])
    })
  })
})
