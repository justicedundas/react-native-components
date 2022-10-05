/**
 * Button Component
 * @prop {ReactNode} Children
 * @prop {Color} Color
 * @prop {boolean} Compact
 * @prop {any} Component
 * @prop {boolean} Disabled
 * @prop {boolean} fullWidth
 * @prop {ReactNode} leftIcon
 * @prop {"left" | "right"} loaderPosition
 * @prop {LoaderProps} loaderProps
 * @prop {boolean} loading
 * @prop {number | "xs" | "sm" | "md" | "lg" | "xl"} Radius
 * @prop {ReactNode} rightIcon
 * @prop {"xs" | "sm" | "md" | "lg" | "xl"} Size
 * @prop {"button" | "reset" | "submit"} Type
 * @prop {boolean} Uppercase
 * @prop {ButtonVariant} Variant
 */
import * as React from 'react';
import { NativeSyntheticEvent, NativeTouchEvent, Pressable } from 'react-native';
import {
  ButtonSize,
  ButtonVariant,
  applyOpacity,
  buttonSize,
  buttonVariant,
} from '@ui/styles/buttons';

// export const buttonVariants = ['filled', 'outline', 'ghost'] as const;

// export const buttonSizes = ['md', 'sm', 'lg', 'circular'] as const;

export interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  children?: React.ReactNode;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  disabled?: boolean;

  /**
   * Used to locate this button in end-to-end tests.
   */
  testID?: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { size = 'md', variant = 'filled', children, onPress, disabled, testID } = this.props;

    return (
      <Pressable
        testID={testID}
        onPress={onPress}
        style={applyOpacity({ ...buttonSize[size], ...buttonVariant[variant] })}
      >
        {children}
      </Pressable>
    );
  }
}
