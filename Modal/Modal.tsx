import * as React from 'react';
import { NativeSyntheticEvent } from 'react-native';

// TODO: Set this up
export interface ModalBaseProps {
  /**
   * The `animationType` prop controls how the modal animates.
   *
   * - `slide` slides in from the bottom
   * - `fade` fades into view
   * - `none` appears without an animation
   */
  animationType?: 'none' | 'slide' | 'fade';
  /**
   * The `transparent` prop determines whether your modal will fill the entire view.
   * Setting this to `true` will render the modal over a transparent background.
   */
  transparent?: boolean;
  /**
   * The `visible` prop determines whether your modal is visible.
   */
  visible?: boolean;
  /**
   * The `onRequestClose` prop allows passing a function that will be called once the modal has been dismissed.
   * _On the Android platform, this is a required function._
   */
  onRequestClose?: () => void;
  /**
   * The `onShow` prop allows passing a function that will be called once the modal has been shown.
   */
  onShow?: (event: NativeSyntheticEvent<any>) => void;
}

export interface ModalPropsIOS {
  /**
   * The `presentationStyle` determines the style of modal to show
   */
  presentationStyle?: 'fullScreen' | 'pageSheet' | 'formSheet' | 'overFullScreen';

  /**
   * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
   * On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.
   */
  supportedOrientations?: Array<
    'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right'
  >;

  /**
   * The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.
   */
  onDismiss?: () => void;

  /**
   * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
   * The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.
   */
  onOrientationChange?: (event: NativeSyntheticEvent<any>) => void;
}

export interface ModalPropsAndroid {
  /**
   *  Controls whether to force hardware acceleration for the underlying window.
   */
  hardwareAccelerated?: boolean;
}

export type ModalProps = ModalBaseProps & ModalPropsIOS & ModalPropsAndroid;

export class Modal extends React.Component<ModalProps> {}
