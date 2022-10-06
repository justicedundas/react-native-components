import * as React from 'react'
import { Text } from 'react-native';
import { Forms } from 'ui/theme/styles';
import {
  LabelStatus,
} from 'ui/theme/styles/forms';

export type LabelProps = {
  label: string;
  status?: LabelStatus;
};

export const Label: React.FC<LabelProps> = ({ label, status = 'basic' }) => {
  return <Text style={{ ...Forms.labelStatus[status]}}>{label}</Text>;
};