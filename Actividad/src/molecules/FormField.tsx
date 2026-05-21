import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Input } from '../atoms';
import { spacing } from '../theme';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  error?: string;
  style?: ViewStyle;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const FormField: React.FC<FormFieldProps> = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Input {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xs,
  },
});

export default FormField;
