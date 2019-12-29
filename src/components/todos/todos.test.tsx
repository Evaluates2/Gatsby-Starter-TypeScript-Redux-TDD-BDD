
import renderer from 'react-test-renderer';
import Todos from './todos';

import React from 'react';
// import renderer, { ReactTestRendererNode, ReactTestRendererJSON } from 'react-test-renderer';
import LoginBtn from './../../components/login/login-btn';
import { Provider } from 'react-redux';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
// import LoginSection from './login-section';
import ShallowRenderer from 'react-test-renderer/shallow';

// ShallowRenderer.createRenderer();
import { MiddlewareAPI, AnyAction } from 'redux';
import { Store } from 'gatsby';
import Todo from './todo';
import { ITodo } from '../../models/todo';

describe('Todos', () => {

    it('should renders todos data prop as a list of <Todo/> elements.', () => {

        const fakeTodos: ITodo[] = [
            {
                id: 100,
                title: 'Text!',
                description: '',

            },
            {
                id: 42,
                title: 'Other Text',
                description: 'More text...',
            },
        ];

        const shallowRenderer = ShallowRenderer.createRenderer();
        shallowRenderer.render(<Todos todos={fakeTodos} />);
        const shallowResult = shallowRenderer.getRenderOutput();

        expect(JSON.stringify(shallowResult.props.children)).toEqual(
            JSON.stringify(
                [<Todo todo={fakeTodos[0]} key={'key0'} />,
                <Todo todo={fakeTodos[1]} key={'key1'} />],
            ),
        );

    });

});
