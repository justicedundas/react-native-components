/**
 * @component IconBack
 */

import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Sizing, Colors } from 'ui/theme/styles';
import  {}  from './IconBack.styles';

export interface IProps {
    name?: string;
    size?: number;
    color?: string | null;
}

export const IconBack = (props: IProps): JSX.Element  => {
    const { name, size, color } = props;
    return (
        <>
            <Icon
                name={ name || "arrow-back" }
                size={ size || Sizing.icons.x50 }
                color={ color || Colors.neutral.white }
            />
        </>
    )
};

