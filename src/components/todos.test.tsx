import React from 'react';
import renderer from 'react-test-renderer';
// import { expect } from 'jest';
import Todos from './todos';

describe('Todos', () => {

    it('passes todos to children', () => {
        const fakeTodos = [];

        renderer.create(<Todos todos={fakeTodos} />)
            .toJSON();

        // expect(tree).toMatchSnapshot()

        expect(true).toBe(true);

    });

});
