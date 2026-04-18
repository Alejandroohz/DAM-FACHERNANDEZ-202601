import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, space } from '../../themes/colors';
import { space as sp } from '../../themes/space';

export const CalcButton = ({ label, onPress, isOperator, isEquals }) => (
  <TouchableOpacity
    style={[
      styles.button,
      isOperator && styles.operator,
      isEquals && styles.equals,
    ]}
    onPress={() => onPress(label)}>
    <Text style={[styles.text, (isOperator || isEquals) && styles.lightText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: sp.xs,
    padding: sp.md,
    backgroundColor: colors.button,
    borderRadius: 8,
    alignItems: 'center',
  },
  operator: { backgroundColor: colors.operator },
  equals: { backgroundColor: colors.equals },
  text: { fontSize: 22, color: colors.buttonText, fontWeight: 'bold' },
  lightText: { color: colors.equalsText },
});