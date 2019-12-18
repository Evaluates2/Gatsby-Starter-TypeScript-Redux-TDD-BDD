
import PropTypes from 'prop-types';
import React from 'react';
import { ITodo } from './../models/todo';

const todoStyle = {
    margin: '4vw',
    padding: '4vw',
    'border-radius': '5px',
    'background-color': 'papayawhip',
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

// Todo.propTypes = {
//     todo: PropTypes.oneOfT
// }

export default Todo;
