import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from '../../atoms';
import { FormField } from '../../molecules';
import { loginFormStyles } from './LoginFormStyles';

interface LoginFormProps {
  onSubmit: () => void;
  onForgotPassword?: () => void;
  onSignUp: () => void;
}

const LoginForm = ({ onSubmit, onForgotPassword, onSignUp }: LoginFormProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={loginFormStyles.container}>
      <FormField
        label="Username"
        placeholder="johndoe"
        value={username}
        onChangeText={setUsername}
      />

      <FormField
        label="Password"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        style={loginFormStyles.forgotPassword}
        onPress={onForgotPassword}
      >
        <Text style={loginFormStyles.forgotPasswordText}>FORGOT PASSWORD?</Text>
      </Pressable>

      <Button title="LOGIN" OnSubmit={onSubmit} />

      <View style={loginFormStyles.signUpRow}>
        <Text style={loginFormStyles.signUpText}>Don't have an account? </Text>
        <Pressable onPress={onSignUp}>
          <Text style={loginFormStyles.signUpLink}>SIGN UP</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;
