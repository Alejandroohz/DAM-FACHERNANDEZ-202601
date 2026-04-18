import React from 'react';
import { View } from 'react-native';
import { ButtonRow } from '../molecules/ButtonRow';

const BUTTONS = [
  [
    { label: '7' }, { label: '8' }, { label: '9' },
    { label: '/', isOperator: true },
  ],
  [
    { label: '4' }, { label: '5' }, { label: '6' },
    { label: '*', isOperator: true },
  ],
  [
    { label: '1' }, { label: '2' }, { label: '3' },
    { label: '-', isOperator: true },
  ],
  [
    { label: '0' }, { label: 'C' }, { label: '=' , isEquals: true},
    { label: '+', isOperator: true },
  ],
];

export const Keyboard = ({ onPress }) => (
  <View>
    {BUTTONS.map((row, i) => (
      <ButtonRow key={i} buttons={row} onPress={onPress} />
    ))}
  </View>
);