/**
 * Text Base Component
 */

import React from 'react';
import {
    Text as RNText,
    TextProps as RNTextProps,
} from 'react-native';

export class Text extends React.Component<TextProps> {

  public render(): React.ReactElement<RNTextProps> {
    const { style, ...textProps } = this.props;

    return (
      <RNText
        {...textProps}
        style={[ style]}
      />
    );
  }
}
