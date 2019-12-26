import React from 'react';
import renderer from 'react-test-renderer';
import LoginBtn from './login-btn';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { LOGIN_REQUESTED, LOGOUT } from '../../state/types/login';

describe('LoginBtn', () => {
    describe('Rendering label of the LoginBtn component (either Login or Logout) properly based on props', () => {

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

        it('should render as "Login" btn when given no props.', () => {

            const tree = renderer
                .create(
                    <Provider store={store}>
                        <LoginBtn />
                    </Provider>,
                )
                .toJSON();
            expect(tree.children).toContain('Login');
        });

        it('should render as "Login" btn when explicitly passed "false" prop.', () => {

            const tree = renderer
                .create(
                    <Provider store={store}>
                        <LoginBtn currentlyLoggedIn={false} />
                    </Provider>,
                )
                .toJSON();

            expect(tree.children).toContain('Login');
        });

        it('should render as "Logout" btn when explicitly passed "false" prop.', () => {

            const tree = renderer
                .create(
                    <Provider store={store}>
                        <LoginBtn currentlyLoggedIn={true} />
                    </Provider>,
                )
                .toJSON();

            expect(tree.children).toContain('Logout');
        });
    });

    describe('dispatches proper action redux actions when clicked.', () => {

        let mockStore;
        let store;
        let mockDispatch;
        beforeEach(() => {
            mockStore = configureMockStore();

            store = mockStore({
                loggedInReducer: {
                    fetching: false,
                    error: null,
                    userId: null,
                },
            });

            mockDispatch = jest.fn();
            jest.mock('react-redux', () => ({
                useSelector: jest.fn(),
                useDispatch: () => mockDispatch,
            }));

        });

        it('should dispatch the logout event.', () => {

            const tree = renderer
                .create(
                    <Provider store={store}>
                        <LoginBtn currentlyLoggedIn={true} />
                    </Provider>,
                )
                .toJSON();

            expect(tree.children).toContain('Logout');

            tree.props.onClick();

            const actions = store.getActions();
            expect(actions).toEqual([{ type: LOGOUT }]);
        });

        it('should dispatch the login event.', () => {

            const tree = renderer
                .create(
                    <Provider store={store}>
                        <LoginBtn currentlyLoggedIn={false} />
                    </Provider>,
                )
                .toJSON();

            expect(tree.children).toContain('Login');

            tree.props.onClick();

            const actions = store.getActions();
            expect(actions).toEqual([{ type: LOGIN_REQUESTED }]);
        });

    });
});
