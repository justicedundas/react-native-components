import React from 'react';
import renderer from 'react-test-renderer';
import { FormControls } from './FormControls';

describe('FormControls', () => {
	it('renders markup correctly', () => {
		const callback = jest.fn();
		const wrapper = (
			<FormControls maxSteps={3} currentStep={1} onBack={callback} />
		);
		const tree = renderer.create(wrapper).toJSON();
		expect(tree).toMatchSnapshot();
	});

});