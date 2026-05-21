import React from 'react';
import { Pressable, Text, ViewStyle } from 'react-native';
import { buttonStyles } from './ButtonStyle';
import { colors } from '../../../themes/colors';

interface ButtonProps {
  title: string;
  OnSubmit: () => void;
  variant?: 'primary' | 'secondary';
  style?: ViewStyle;
}

const Button = ({ title, OnSubmit, variant = 'primary', style }: ButtonProps) => {
  const bgColor =
    variant === 'secondary' ? colors.secondary : colors.primary;

  return (
    <Pressable
      onPress={OnSubmit}
      style={({ pressed }) => [
        buttonStyles.container,
        { backgroundColor: bgColor, opacity: pressed ? 0.85 : 1 },
        style,
      ]}
    >
      <Text style={buttonStyles.label}>{title}</Text>
    </Pressable>
  );
};

export default Button;
