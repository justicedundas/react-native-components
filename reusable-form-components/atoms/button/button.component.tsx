import React from 'react';
import {
    GestureResponderEvent,
    ImageProps,
    Pressable,
    ViewStyle,
    NativeSyntheticEvent,
    Text,
    TargetedEvent
} from 'react-native';
import {
    ButtonSize,
    ButtonVariant
} from '@ui/theme/styles/buttons';
import { Buttons } from 'ui/theme/styles';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    size: ButtonSize;
    variant: ButtonVariant;
    children?: React.ReactNode;
    onPress: () => void;
};


export const Button = ({
    children,
    size = 'default',
    variant = 'filled',
    onPress,
    ...rest
}: ButtonProps) => {
    return (
        <Pressable onPress={onPress} style={{...Buttons.buttonSize[size], ...Buttons.buttonVariant[variant]}}>
            {children}
        </Pressable>
)} ;





