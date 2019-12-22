import PropTypes from 'prop-types';
import React from 'react';
import Todo from './todo';

const containerStyle = {
    color: 'black',
    margin: '4vw',
    padding: '1vw',
    'borderRadius': '5px',
    'backgroundColor': 'rebeccapurple',
};

const Todos = ({ todos }) => {

    const todosData = todos.data;

    return (
        <div style={containerStyle}>

            {todosData && todosData.map((todo, i) => {
                return (
                    <Todo todo={todo} key={'key' + i}/>
                );
            })}
        </div>
    );
};

Todos.propTypes = {
    userId: PropTypes.number,
};

export default Todos;
