import React from 'react';
import renderer from 'react-test-renderer';
import LoginBtn from './login-btn';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import LoginSection from './login-section';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('LoginSection', () => {

    describe('Passing props to LoginBtn Child', () => {

        it('should pass "false" to LoginBtn when given no props.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection />);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={false} />,
            );

        });

        it('should pass "true" to LoginBtn when userId is not null.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection userId={1}/>);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={true} />,
            );

        });

        it('should pass "false" to LoginBtn when userId is null.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection userId={null}/>);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={false} />,
            );

        });

        it('should pass "false" to LoginBtn when userId is undefined.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection userId={undefined}/>);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={false} />,
            );

        });

        it('should pass "false" to LoginBtn when userId is 0.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection userId={0}/>);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={false} />,
            );

        });

        it('should pass "true" to LoginBtn when userId is a big number.', () => {

            const shallowRenderer = new ShallowRenderer();
            shallowRenderer.render(<LoginSection userId={999999999999999}/>);
            const shallowResult = shallowRenderer.getRenderOutput();

            expect(shallowResult.props.children).toContainEqual(
                <LoginBtn currentlyLoggedIn={true} />,
            );

        });

    });

    describe('rendering userId', () => {

        let mockStore;
        let store;
        beforeEach(() => {
            mockStore = configureMockStore();

            store = mockStore({
                loggedInReducer: {
                    fetching: false,
                    error: null,
                    userId: null,
                },
            });

        });

        it('should display a userId', () => {

            const fakeUserId = 1;
            const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginSection userId={fakeUserId} />
                </Provider>,
            )
            .toJSON();

            tree.children.forEach( child => {
                if (child.type === 'h2') {
                    expect(parseInt(child.children[1], 10)).toEqual(fakeUserId);
                }
            });

        });

        it('should display only the "User Id: " label when passed no userId', () => {

            const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginSection />
                </Provider>,
            )
            .toJSON();

            tree.children.forEach( child => {

                if (child.type === 'h2') {
                    expect(child.children[0]).toEqual('User Id: ');
                    expect(child.children[1]).toEqual(undefined);
                }
            });

        });

        it('should display only the "User Id: " label when passed null as a userId', () => {

            const fakeUserId = null;
            const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginSection userId={fakeUserId}/>
                </Provider>,
            )
            .toJSON();

            tree.children.forEach( child => {
                if (child.type === 'h2') {
                    expect(child.children[0]).toEqual('User Id: ');
                    expect(child.children[1]).toEqual(undefined);
                }
            });

        });

        it('should display only the "User Id: " label when passed 0 as a userId', () => {

            const fakeUserId = 0;
            const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginSection userId={fakeUserId}/>
                </Provider>,
            )
            .toJSON();

            tree.children.forEach( child => {
                if (child.type === 'h2') {
                    expect(child.children[0]).toEqual('User Id: ');
                    expect(child.children[1]).toEqual(undefined);
                }
            });

        });

        it('should display a userId that is a big number.', () => {

            const fakeUserId = 999999999999999;
            const tree = renderer
            .create(
                <Provider store={store}>
                    <LoginSection userId={fakeUserId}/>
                </Provider>,
            )
            .toJSON();

            tree.children.forEach( child => {
                if (child.type === 'h2') {
                    expect(child.children[0]).toEqual('User Id: ');
                    expect(parseInt(child.children[1], 10)).toEqual(fakeUserId);
                }
            });

        });

    });

});
