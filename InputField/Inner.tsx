import * as React from 'react'
import { TextInput, View } from 'react-native';
import { Forms, Sizing, Colors } from 'ui/theme/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  InputSize
} from 'ui/theme/styles/forms';

export type CaptionProps = {
  accessoryLeft?: string;
  accessoryRight?: string;
  size?: InputSize;
  placeholder?: string;
  value?: string;
  isRequired?: boolean;
};

export const Inner = ({ placeholder, accessoryLeft, isRequired, size = 'medium', accessoryRight, value }: CaptionProps) => {
  return (
      <View style={{
            flexDirection: 'row',
            alignItems: 'center',
      }}>

        { accessoryLeft &&
          <Icon
            name={accessoryLeft}
            size={Sizing.x12}
            color={Colors.neutral.s400}
            style={{ paddingRight: 4}}
          />
        }

        <TextInput
          style={{...Forms.inputSize[size], flex: 1, flexGrow: 1, }}
          placeholder={placeholder}
          value={value}
        />

        { accessoryRight &&
          <Icon
            name={accessoryRight}
            size={Sizing.x12}
            color={Colors.neutral.s400}
            style={{ paddingLeft: 4}}
          />
        }
      </View>
  )
};