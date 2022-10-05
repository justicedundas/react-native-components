import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface InputWrapperViewProps {
  backgroundColor?: string;

  /**
   * An ID which is used to associate this InputWrapper to specified TextInput(s).
   */
  nativeID?: string;

  style?: StyleProp<ViewStyle>;
}
/**
 * A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is
 * displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.
 *
 * To use this component wrap your custom toolbar with the InputWrapper component, and set a nativeID. Then, pass
 * that nativeID as the inputAccessoryViewID of whatever TextInput you desire.
 */
export class InputWrapper extends React.Component<InputWrapperViewProps> {}
