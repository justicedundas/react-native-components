/**
 * Text Base Component
 */
import * as React from 'react';
import {
  Constructor,
  NativeMethods,
  Text as RNText,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
} from 'react-native';

/**
 * A React component for displaying text which supports nesting, styling, and touch handling.
 */
declare class TextComponent extends React.Component<TextProps> {}
declare const TextBase: Constructor<NativeMethods> & typeof TextComponent;
// export class Text extends TextBase {}

export interface TextProps extends TextProperties {
  id?: string;
  style?: StyleProp<TextStyle>;
  children?: string | React.ReactNode;
}

export class Text extends React.Component<TextProps> {
  public render(): React.ReactElement<TextProps> {
    const { id, style, children, ...textProps } = this.props;

    return (
      <RNText testID={id} style={[style]} {...textProps}>
        {children}
      </RNText>
    );
  }
}
