import React from 'react'
import {
    View
} from 'react-native';
import { Caption, Inner } from '@ui/molecules/InputField';
import { Label } from 'ui/atoms/label/label.component';
import { Forms } from 'ui/theme/styles';
import {
    ContainerSize,
    ContainerStatus
} from 'ui/theme/styles/forms';

type InputProps = {
    size?: ContainerSize;
    status?: ContainerStatus;
    placeholder?: string;
    accessoryLeft?: string;
    accessoryRight?: string;
    label?: string;
    caption?: string;
    value?: string;
}

export const InputField = ({
    caption,
    label,
    placeholder,
    accessoryLeft,
    size = 'medium',
    accessoryRight,
    value,
    status = 'basic',
}: InputProps) => {
    return (
        <View style={{ width: '100%' }}>
            { label && <Label status={status} label={label} /> }

            <View
                style={{
                    ...Forms.containerSize[size],
                    ...Forms.containerStatus[status]
                }}
            >
                <Inner placeholder={placeholder} accessoryLeft={accessoryLeft} accessoryRight={accessoryRight} size={size} value={value} />

            </View>

            { caption && <Caption message={caption} /> }

        </View>
    )
};