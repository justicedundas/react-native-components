import * as React from 'react';
import {
  View,
  TextInput,
  Animated,
  Easing,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
  TextInputProps as RNTextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewProps,
  Pressable,
} from 'react-native';
import { Text } from '../Text/Text';
import { Colors, Forms, StyleType } from '@ui/styles';
import { containerSize, containerStatus, inputTextSize } from '@ui/styles/forms';
import { Size, Status } from '@ui/styles/typings';

export interface InputProps extends RNTextInputProps {
  shake?: () => void;

  status?: Status;

  size?: Size;

  disabled?: boolean;

  accessoryLeft?: string;

  accessoryRight?: string;

  textStyle?: StyleProp<TextStyle>;
}

export type InputElement = React.ReactElement<InputProps>;

export class Input extends React.Component<InputProps> {
  static displayName = 'Input';
  private textInputRef = React.createRef<TextInput>();
  shakeAnimationValue = new Animated.Value(0);

  public focus(): void {
    this.textInputRef.current?.focus();
  }

  public blur(): void {
    this.textInputRef.current?.blur();
  }

  public clear(): void {
    this.textInputRef.current?.clear();
  }

  // public isFocused(): boolean {
  //   return this.textInputRef.current?.isFocused();
  // }

  public shake = () => {
    const { shakeAnimationValue } = this;
    shakeAnimationValue.setValue(0);
    // Animation duration based on Material Design
    // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  private onTextFieldFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
    this.props.onFocus && this.props.onFocus(event);
  };

  private onTextFieldBlur = (event: NativeSyntheticEvent<TextInputFocusEventData>): void => {
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
        ...inputTextSize,
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
      size = 'lg',
      status = 'default',
      textStyle,
      accessoryLeft,
      accessoryRight,
      ...textInputProps
    } = this.props;

    return (
      <Pressable
        style={{ ...containerSize[size], ...containerStatus[status] }}
        onPress={this.focus}
      >
        <View style={styles.inputContainer}>
          {/* {accessoryLeft ? (
              <HIcon name={accessoryLeft} size={Sizing.icons.x15} />
            ) : null} */}

          <TextInput
            ref={this.textInputRef}
            placeholderTextColor={Colors.neutral.s200}
            style={{ ...inputTextSize[size], flex: 1, flexGrow: 1 }}
            editable={!textInputProps.disabled}
            onFocus={this.onTextFieldFocus}
            onBlur={this.onTextFieldBlur}
            {...textInputProps}
          />

          {/* {accessoryRight ? (
              <HIcon name={accessoryRight} size={Sizing.icons.x15} />
            ) : null} */}
        </View>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
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
