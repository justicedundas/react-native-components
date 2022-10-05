/**
 * @component InputControlText
 */

import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './InputControlText.styles';
import { Colors, Forms, Sizing } from 'ui/theme/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Caption } from 'ui/molecules/InputField/index'
import { Label } from 'ui/atoms/label/label.component';
import {
    ContainerSize,
    ContainerStatus
} from 'ui/theme/styles/forms';
import { FalsyFC } from 'ui/theme/helpers/falseFC';


export interface IProps  {
    name: string;
    type?: string,
    size?: ContainerSize,
    status?: ContainerStatus,
    label?: string,
    placeholder?: string,
    accessoryLeft?: string,
    accessoryRight?: string,
    autoFocus?: boolean,
    caption?: string;
    value?: string;
    children?: React.ReactNode;
    onChange?: (e: any) => void;
};

export const InputControlText = ({ children, size = 'large', status = 'primary', ...props }: IProps) => {
    const {
        label,
        placeholder,
        accessoryLeft,
        accessoryRight,
        autoFocus,
        caption,
        value,
        onChange
    } = props;

    return (
        <View>
            { label && <Label status={status} label={label} /> }

            <View
                style={{
                    ...Forms.containerSize[size],
                    ...Forms.containerStatus[status]
                }}
            >
                <View style={styles.inner}>

                    { accessoryLeft &&
                    <Icon
                        name={accessoryLeft}
                        size={Sizing.icons.x15}
                        color={Colors.neutral.s400}
                        style={{ paddingRight: 4}}
                    />
                    }
                    {children}

                    <TextInput
                        autoFocus={autoFocus}
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange && onChange(e)}
                        style={{...Forms.inputSize[size], flex: 1, flexGrow: 1, }}
                    />
                    { accessoryRight &&
                    <Icon
                        name={accessoryRight}
                        size={Sizing.icons.x15}
                        color={Colors.neutral.s400}
                        style={{ paddingRight: 4}}
                    />
                    }
                </View>
            </View>

            { caption && <Caption message={caption} status={status} /> }
        </View>
    )
}