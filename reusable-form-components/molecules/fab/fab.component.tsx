import React, { Component } from 'react';
import {
  Pressable,
  StyleSheet
 } from 'react-native';
import { Button } from '@ui/atoms/button/button.component';
import { HIcon } from '@ui/atoms/icon/icons.component';
import { Sizing, Colors } from '@ui/theme/styles';


export type FABProps = {
  color?: string;
  position?: 'left' | 'center' | 'right';
  icon?: string;
  iconColor?: string;
  onPress: () => void;
}

export const FAB = ({
  color = Colors.primary.brand,
  position = 'right',
  iconColor = Colors.neutral.white,
  icon = 'arrow-forward',
  onPress
}: FABProps) => {
    return (
      <Button
        size={'circular'}
        variant={'filled'}
        onPress={onPress}
      >
        <HIcon
          name={icon}
          color={iconColor}
          size={Sizing.icons.x80}
        />
      </Button>
    );
  }


const styles = StyleSheet.create({
  actionButton: {
    height: Sizing.icons.x80,
    backgroundColor: Colors.primary.brand
  },
});