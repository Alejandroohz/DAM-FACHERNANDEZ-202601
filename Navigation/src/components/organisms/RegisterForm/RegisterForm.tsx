import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from '../../atoms';
import { FormField } from '../../molecules';
import { registerFormStyles } from './RegisterFormStyles';

interface RegisterFormProps {
  onSubmit: () => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={registerFormStyles.container}>
      <FormField
        label="FULL NAME"
        placeholder="John Doe"
        value={fullName}
        onChangeText={setFullName}
      />

      <FormField
        label="USERNAME"
        placeholder="johndoe123"
        value={username}
        onChangeText={setUsername}
      />

      <FormField
        label="EMAIL ADDRESS"
        placeholder="johndoe@example.com"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <FormField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />

      <FormField
        label="PASSWORD"
        placeholder="Minimum 8 chars"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <FormField
  label="DATE OF BIRTH"
  placeholder="YYYY-MM-DD"
  value={dateOfBirth}
  onChangeText={setDateOfBirth}
  showCalendarIcon={true}
/>

      <Button title="CREATE ACCOUNT" OnSubmit={onSubmit} />
    </View>
  );
};

export default RegisterForm;
