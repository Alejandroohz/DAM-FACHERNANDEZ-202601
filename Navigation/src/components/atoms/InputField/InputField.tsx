import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { inputFieldStyles } from './InputFieldStyles';
import { colors } from '../../../themes/colors';

interface InputFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
}

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={inputFieldStyles.container}>
      <Text style={inputFieldStyles.label}>{label}</Text>
      <View style={[
        inputFieldStyles.inputWrapper,
        isFocused && inputFieldStyles.focusedWrapper,
      ]}>
        <TextInput
          style={inputFieldStyles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.secondary}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

export default InputField;