import { TextStyle, TextInputProps, StyleSheet, Text, ViewStyle, ViewPropsIOS } from 'react-native';

import * as Colors from "./colors"
import * as Outlines from "./outlines"
import * as Sizing from "./sizing"
import * as Typography from "./typography"

import { Status, Size } from '../helpers/typings';


/**
 * @component Base
 * @description Inputs with interactive components
 * @ref https://www.figma.com/community/file/911772798149274663
 * @props Variant, Size, Label, CaptionText, Hover, Disabled, Focus
 */


/**
 * @property Type
 * @description varians of the basic input field type
 * @TODO: add the rest of variations
 */
export type Inner = "default" | "accessoryLeft"
export const inner: Record<Inner, ViewStyle> = {
    default: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accessoryLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
};

/**
 * Container sizing for input field
 * @types default | small | large
 */
export type ContainerSize = 'small' | 'medium' | 'large'
export const containerSize: Record<ContainerSize, ViewStyle> = {
    medium: {
        height: Sizing.x36,
        padding: Sizing.x8,
        justifyContent: 'center',
        marginVertical: Sizing.x4,
        backgroundColor: Colors.neutral.white,
    },
    small: {
        height: Sizing.x32,
        padding: Sizing.x8,
        justifyContent: 'center',
        marginVertical: Sizing.x4,
        backgroundColor: Colors.neutral.white,
    },
    large: {
        height: Sizing.x40,
        padding: Sizing.x8,
        justifyContent: 'center',
        marginVertical: Sizing.x4,
        backgroundColor: Colors.neutral.white,
    },
};

/**
 * Changes display of input field components based on events
 * @types none | default | error | success
 */
export type ContainerStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning';
export const containerStatus: Record<ContainerStatus, ViewStyle> = {
    basic: {
        borderWidth: Outlines.borderWidth.thin,
        borderRadius: Outlines.borderRadius.x4,
        borderColor: Colors.neutral.s400 ,
        ...Outlines.shadow.basic,
    },
    primary: {
        borderWidth: Outlines.borderWidth.thin,
        borderRadius: Outlines.borderRadius.x4,
        borderColor: Colors.primary.brand,
        ...Outlines.shadow.focus,

    },
    success: {
        borderWidth: Outlines.borderWidth.thin,
        borderRadius: Outlines.borderRadius.x4,
        borderColor: Colors.success.s600,
        ...Outlines.shadow.success
    },
    info: {
        borderWidth: Outlines.borderWidth.thin,
        borderRadius: Outlines.borderRadius.x4,
        borderColor: Colors.neutral.s600,
        ...Outlines.shadow.basic

    },
    warning: {
        borderWidth: Outlines.borderWidth.thin,
        borderRadius: Outlines.borderRadius.x4,
        borderColor: Colors.danger.s600,
        ...Outlines.shadow.warning
    },
};

/**
 * Text sizing for Input field
 */
export type InputSize = 'medium' | 'small' | 'large';
export const inputSize: Record<InputSize, TextStyle> = {
    medium: {
        color: Colors.neutral.s600,
        ...Typography.medium.x20
    },
    small: {
        color: Colors.neutral.s600,
        ...Typography.medium.x10
    },
    large: {
        color: Colors.neutral.s600,
        ...Typography.medium.x30
    }
};

/**
 * Types of Label field outputs
 */
export type LabelStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning';
export const labelStatus: Record<LabelStatus, TextStyle> = {
    basic: {
        color: Colors.neutral.s400,
        ...Typography.semibold.x10,
    },
    primary: {
        color: Colors.primary.dark,
        ...Typography.semibold.x10
    },
    success: {
        color: Colors.success.s600,
        ...Typography.semibold.x10
    },
    warning: {
        color: Colors.danger.s600,
        ...Typography.semibold.x10,
    },
    info: {
        color: Colors.neutral.s600,
        ...Typography.semibold.x10,
    },
};

/**
 * Types of caption text displayed for input fields
 */
export type CaptionStatus = 'basic' | 'primary' | 'success' | 'info' | 'warning';
export const captionStatus: Record<CaptionStatus, TextStyle> = {
    basic: {
        color: Colors.neutral.s200,
        ...Typography.regular.x10,
    },
    primary: {
        color: Colors.primary.light,
        ...Typography.regular.x10
    },
    success: {
        color: Colors.warning.s400,
        ...Typography.regular.x10,
    },
    warning: {
        color: Colors.warning.s400,
        ...Typography.regular.x10,
    },
    info: {
        color: Colors.neutral.s400,
        ...Typography.regular.x10,
    },
};

export type Placeholder = "placeholder" 
export const placeholder: Record<Placeholder, TextStyle> = {
    placeholder: {
        color: Colors.neutral.s400
    }
};
