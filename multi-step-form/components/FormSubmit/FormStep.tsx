/**
 * @component FormStep
 */

import React from 'react';
import { Form } from '..';

export interface IProps {
    name: string;
	children?: React.ReactNode;
	onSubmit?: any;
}

export const FormStep = (props: IProps): JSX.Element => {
	const { name, children, onSubmit } = props;

	return (
		<Form
            id={name}
        >
			{children}
		</Form>
	);
};