/**
 * @component InputControl
 */

import React from 'react';
import { View } from 'react-native';

export interface IProps {
    required?: boolean;
	valid?: boolean;
    type?: 'text' | 'email' | 'tel' | 'password' | 'date' | 'submit',
    status?: 'success' | 'error';
	errors?: string;
	children?: React.ReactNode;
}

export const InputControl = (props: IProps): JSX.Element => {
    const {
        required,
        valid,
        type,
        status,
        errors,
        children
    } = props;

    return (
        <View>
            {children}
        </View>
    )
}