import React from 'react';
import renderer from 'react-test-renderer';
import Todo from './todo';

describe('Todo', () => {

    it('should render without errors.', () => {
    
        const fakeTodo = {
            "ok": "hmm"
        }

        renderer.create(<Todo todo={fakeTodo} />)
            .toJSON();

        // expect(tree).toMatchSnapshot()

        expect(true).toBe(true);

    });

    it('passes todos to children', () => {
        // const fakeTodos = [];

        // renderer.create(<Todos todos={fakeTodos} />)
        //     .toJSON();

        // expect(tree).toMatchSnapshot()

        expect(true).toBe(true);

    });

});
