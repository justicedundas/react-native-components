/**
 * CheckBox Component
 * @prop {boolean} Disabled
 * @prop {onChange} Removed?
 * @prop {onValueChange} Change
 * @prop {testID} e2e
 * @prop {value} Value
 */
import * as React from 'react';
import { ViewProps } from 'react-native';

// TODO: Set this up
export interface CheckBoxProps extends ViewProps {
  /**
   * If true the user won't be able to toggle the checkbox. Default value is false.
   */
  disabled?: boolean;

  /**
   * Used in case the props change removes the component.
   */
  onChange?: (value: boolean) => void;

  /**
   * Invoked with the new value when the value changes.
   */
  onValueChange?: (value: boolean) => void;

  /**
   * Used to locate this view in end-to-end tests.
   */
  testID?: string;

  /**
   * The value of the checkbox. If true the checkbox will be turned on. Default value is false.
   */
  value?: boolean;
}

/**
 * CheckBox Class Component
 */
export class CheckBox extends React.Component<CheckBoxProps> {}
