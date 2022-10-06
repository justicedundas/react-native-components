import * as React from 'react'
import { Text } from 'react-native';
import { Forms } from 'ui/theme/styles';
import {
  CaptionStatus
} from 'ui/theme/styles/forms';

export type CaptionProps = {
  message?: string;
  status?: CaptionStatus;
};

export const Caption = ({ message, status = 'basic' }: CaptionProps) => {
  return (
    <>
      <Text style={{ ...Forms.captionStatus[status] }}>{message}</Text>
    </>
  )
};