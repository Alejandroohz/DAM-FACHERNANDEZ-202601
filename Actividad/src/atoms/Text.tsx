import React from 'react';
import { Text as RNText, TextStyle, StyleSheet } from 'react-native';
import { typography, colors } from '../theme';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'bodySmall' | 'label' | 'caption';
type Align = 'left' | 'center' | 'right';

interface TextProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: string;
  align?: Align;
  style?: TextStyle;
  numberOfLines?: number;
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  color,
  align = 'left',
  style,
  numberOfLines,
}) => {
  return (
    <RNText
      style={[typography[variant], { color: color ?? typography[variant].color, textAlign: align }, style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

export default Text;
