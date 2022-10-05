import React from 'react';
import {
    Image,
    Pressable
} from 'react-native';
import styles from './styles';

const rightArrow = require('@assets/icons/mdi_arrow-right-circle.png')

type IProps = {
    size?: 'large' | 'small'
    type?:
        | 'primary'
        | 'secondary'
        | 'circular'
    children?: string | JSX.Element;
    onPress?: (e: any) => void;
}

export const Next = (props: IProps) => {
    const { type, children, onPress } = props;
    return (
        <Pressable onPress={onPress} style={styles.next}>
            <Image source={rightArrow} />
        </Pressable>
    )
};
