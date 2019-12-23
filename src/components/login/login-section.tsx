

import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginRequested, logout } from '../../state/actions/login';
import LoginBtn from './login-btn';

const loginSectionStyle = {
    margin: '4vw',
    padding: '4vw',
    'borderRadius': '5px',
    'backgroundColor': 'rebeccapurple',
    'color': 'white',
};

const LoginSection = ({ userId }) => {

    const dispatch = useDispatch();

    const loginClicked = async () => {
        dispatch(loginRequested());
    };

    const logoutClicked = () => {
        dispatch(logout());
    };

    return (
        <div style={loginSectionStyle}>
            <h2>User Id: {userId}</h2>

            <LoginBtn currentlyLoggedIn={true}/>
            {!userId &&

                <button onClick={event => { loginClicked(); }} >
                    Login
                </button>}

            {userId &&
                <button onClick={event => { logoutClicked(); }} >
                    Logout
                </button>}
        </div>
    );
};

export default LoginSection;

