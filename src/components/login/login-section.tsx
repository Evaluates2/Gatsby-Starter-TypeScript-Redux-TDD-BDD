

import PropTypes from 'prop-types';
import React from 'react';
import LoginBtn from './login-btn';

const loginSectionStyle = {
    margin: '4vw',
    padding: '4vw',
    'borderRadius': '5px',
    'backgroundColor': 'rebeccapurple',
    'color': 'white',
};

const LoginSection = ({ userId }) => {

    return (
        <div style={loginSectionStyle}>
            <h2>User Id: {userId}</h2>
            <LoginBtn/>
        </div>
    );
};

LoginSection.propTypes = {
    userId: PropTypes.number
}

export default LoginSection;

