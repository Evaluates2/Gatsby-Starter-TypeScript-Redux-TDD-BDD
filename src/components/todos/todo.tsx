
import PropTypes from 'prop-types';
import React from 'react';
import { ITodo } from '../../models/todo';

const todoStyle = {
    margin: '4vw',
    padding: '4vw',
    'borderRadius': '5px',
    'backgroundColor': 'rebeccapurple',
    'color': 'white',
};

const Todo = ({ todo }) => {

    return (
        <div style={todoStyle}>
            <h1 >
                {todo.title}
            </h1>
            <p>
                {todo.description}
            </p>
        </div>
    );
};

export default Todo;
