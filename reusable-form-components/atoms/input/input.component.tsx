/**
 * Input Base Component
 */

import React from 'react';
import {
  ImageProps,
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {StyleType} from '@ui/theme/styles/styles.service';
import {
  containerStatus,
  containerSize,
  inputSize,
  ContainerStatus,
  ContainerSize,
} from '@ui/theme/styles/forms';
import {HIcon, Label, Button} from '@ui/atoms';
import {Caption} from 'ui/molecules/InputField';
import {Sizing} from 'ui/theme/styles';

export interface InputProps extends TextInputProps {
  status?: ContainerStatus;
  size?: ContainerSize;
  disabled?: boolean;
  label?: string;
  caption?: string;
  accessoryLeft?: string;
  accessoryRight?: string;
  textStyle?: StyleProp<TextStyle>;
}

export type InputElement = React.ReactElement<InputProps>;

export class Input extends React.PureComponent<InputProps> {
  private textInputRef = React.createRef<TextInput>();

  public focus = (): void => {
    this.textInputRef.current?.focus();
  };

  public blur = (): void => {
    this.textInputRef.current?.blur();
  };

  public isFocused = (): void => {
    this.textInputRef.current?.isFocused();
  };

  public clear = (): void => {
    this.textInputRef.current?.clear();
  };

  private onTextFieldFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onTextFieldBlur = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    this.props.onBlur && this.props.onBlur(event);
  };

  private getComponentStyle = (source: StyleType) => {
    const flatStyles: ViewStyle = StyleSheet.flatten(this.props.style);

    const {
      textMarginHorizontal,
      textFontFamily,
      textFontSize,
      textFontWeight,
      textColor,
      placeholderColor,
      iconWidth,
      iconHeight,
      iconMarginHorizontal,
      iconTintColor,
      labelColor,
      labelFontSize,
      labelMarginBottom,
      labelFontWeight,
      labelFontFamily,
      captionMarginTop,
      captionColor,
      captionFontSize,
      captionFontWeight,
      captionFontFamily,
      ...containerParameters
    } = source;

    return {
      container: containerSize,
      inputContainer: {
        ...containerParameters,
        ...inputSize,
      },
      text: {
        marginHorizontal: textMarginHorizontal,
        fontFamily: textFontFamily,
        fontSize: textFontSize,
        fontWeight: textFontWeight,
        color: textColor,
      },
      placeholder: {
        color: placeholderColor,
      },
      icon: {
        width: iconWidth,
        height: iconHeight,
        marginHorizontal: iconMarginHorizontal,
        tintColor: iconTintColor,
      },
      label: {
        color: labelColor,
        fontSize: labelFontSize,
        marginBottom: labelMarginBottom,
        fontWeight: labelFontWeight,
        fontFamily: labelFontFamily,
      },
      captionLabel: {
        fontSize: captionFontSize,
        fontWeight: captionFontWeight,
        fontFamily: captionFontFamily,
        color: captionColor,
      },
    };
  };

  public render(): React.ReactElement<ViewProps> {
    const {
      textStyle,
      label,
      caption,
      accessoryLeft,
      accessoryRight,
      ...textInputProps
    } = this.props;

    // const lightStyle = this.getComponentStyle()

    return (
      <View style={styles.container}>
        {label ? <Label label={label} /> : null}

        <View style={styles.inputContainer}>
          {accessoryLeft ? (
            <HIcon name={accessoryLeft} size={Sizing.icons.x15} />
          ) : null}

          <TextInput
            ref={this.textInputRef}
            placeholderTextColor={styles.placeholder.color}
            {...textInputProps}
            style={[styles.text, textStyle]}
            editable={!textInputProps.disabled}
            onFocus={this.onTextFieldFocus}
            onBlur={this.onTextFieldBlur}
          />

          {accessoryRight ? <HIcon name={accessoryRight} /> : null}
        </View>

        {caption ? caption : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...containerStatus.primary,
    ...containerSize.large,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  placeholder: {
    color: 'grey',
  },
  text: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
  },
  label: {
    textAlign: 'left',
  },
  captionLabel: {
    textAlign: 'left',
  },
});
