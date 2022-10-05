import * as React from 'react';
import {
  Constructor,
  NativeMethods,
  TimerMixin,
  TextInputProps,
  TextInputState,
} from 'react-native';
import * as TextEvents from './TextInput.events';

declare class TextInputComponent extends React.Component<TextInputProps> {}

declare const TextInputBase: Constructor<NativeMethods> &
  Constructor<TimerMixin> &
  typeof TextInputComponent;

export class TextInput extends TextInputBase {
  /**
   * Access the current focus state.
   */
  static State: TextInputState;

  /**
   * Returns if the input is currently focused.
   */
  isFocused: (() => boolean) | undefined;

  /**
   * Removes all text from the input.
   */
  clear: (() => void) | undefined;
}
