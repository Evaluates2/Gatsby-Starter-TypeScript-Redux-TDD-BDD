import React from "react"
import renderer from "react-test-renderer"
import LoginBtn from "./login-btn"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import { LOGIN_REQUESTED, LOGOUT } from "../../state/types/login"
import LoginSection from "./login-section"
import ShallowRenderer from 'react-test-renderer/shallow';
import { forEachChild } from "typescript"

describe("LoginBtn", () => {
    describe("Rendering buttons properly based on props", () => {


        it('should render as "Login" btn when given no props.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(
                <LoginSection userId={5} />
            )

            const result = shallowRenderer.getRenderOutput();

            result.props.children.forEach(childElement => {

                if (childElement.type === 'h2') {

                    expect(childElement.props.children).toEqual(['User Id: ', 5])
                }

            })

            expect(result.props.children).toContainEqual(
              
                <LoginBtn currentlyLoggedIn={false} />
            
            );
        })

    })

})
