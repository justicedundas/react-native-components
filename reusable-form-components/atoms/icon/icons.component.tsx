/**
 * @component Icon
 */

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sizing, Colors } from '@styles';

export interface IProps {
    name: string;
    size?: number;
    color?: any;
    style?: any;
}

export const HIcon = ({
    name,
    size = Sizing.icons.x15,
    color = Colors.neutral.s400,
    style,
}: IProps): JSX.Element  => {
    return (
        <Icon name={name} size={size} color={color} style={style} />
    )
};

