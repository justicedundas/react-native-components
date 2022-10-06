import React from 'react';
import { Text } from 'react-native';
import { Typography } from 'ui/theme/styles';

export type THeaderProps = {
  title: string;
}

export const Title = ({ title }: THeaderProps): JSX.Element => {
  return (
    <Text style={{...Typography.regular.x40}}>
      {title}
    </Text>
  )
};