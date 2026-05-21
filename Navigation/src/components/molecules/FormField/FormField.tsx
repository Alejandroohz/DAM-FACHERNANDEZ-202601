import React from 'react';
import { View } from 'react-native';
import { InputField } from '../../atoms';
import { formFieldStyles } from './FormFieldStyles';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
}

const FormField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
}: FormFieldProps) => {
  return (
    <View style={formFieldStyles.container}>
      <InputField
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default FormField;