import * as React from 'react';

export interface TargetedEvent {
  target: number;
}

/**
 * @see TextInputProps.onFocus
 */
export interface TextInputFocusEventData extends TargetedEvent {
  text: string;
  eventCount: number;
}

/**
 * @see TextInputProps.onScroll
 */
export interface TextInputScrollEventData {
  contentOffset: { x: number; y: number };
}

/**
 * @see TextInputProps.onSelectionChange
 */
export interface TextInputSelectionChangeEventData extends TargetedEvent {
  selection: {
    start: number;
    end: number;
  };
}

/**
 * @see TextInputProps.onKeyPress
 */
export interface TextInputKeyPressEventData {
  key: string;
}

/**
 * @see TextInputProps.onChange
 */
export interface TextInputChangeEventData extends TargetedEvent {
  eventCount: number;
  text: string;
}

/**
 * @see TextInputProps.onContentSizeChange
 */
export interface TextInputContentSizeChangeEventData {
  contentSize: { width: number; height: number };
}

/**
 * @see TextInputProps.onEndEditing
 */
export interface TextInputEndEditingEventData {
  text: string;
}

/**
 * @see TextInputProps.onSubmitEditing
 */
export interface TextInputSubmitEditingEventData {
  text: string;
}
