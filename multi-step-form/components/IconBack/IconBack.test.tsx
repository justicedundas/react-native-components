import React from 'react';
import renderer from 'react-test-renderer';
import render  from 'jest';
import { IconBack } from './IconBack';

describe('IconBack', () => {
    it('renders correctly without props', () => {
        const wrapper = <IconBack />;
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

});

