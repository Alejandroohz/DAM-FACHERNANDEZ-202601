import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CalcButton } from '../atoms';

export const ButtonRow = ({ buttons, onPress }) => (
  <View style={styles.row}>
    {buttons.map(({ label, isOperator, isEquals }) => (
      <CalcButton
        key={label}
        label={label}
        onPress={onPress}
        isOperator={isOperator}
        isEquals={isEquals}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginVertical: 4 },
});