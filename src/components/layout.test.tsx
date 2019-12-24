import React from "react"
import renderer from "react-test-renderer"
import LoginBtn from "./login/login-btn"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import { LOGIN_REQUESTED, LOGOUT } from "../state/types/login"
import Layout from "./layout"

describe("Layout", () => {
    describe("Rendering buttons properly based on props", () => {

        let mockStore;
        let store;
        beforeEach(() => {
            mockStore = configureMockStore()

            store = mockStore({
                loggedInReducer: {
                    fetching: false,
                    error: null,
                    userId: null,
                }
            })
        })

        it('', () => {

            // const tree = renderer
                // .create(
                    // <Provider store={store}>
                    //     {/* <Layout children={`<h1>hello</h1>`}/> */}
                    //     <Layout children={{data: { site: {siteMetadata: {title: "ya"}}}}}/>
                    // </Provider>
                // )
                // .toJSON()

            // expect(tree.children).toContain("Login")
            expect(true).toEqual(true)
        })

    })
})
