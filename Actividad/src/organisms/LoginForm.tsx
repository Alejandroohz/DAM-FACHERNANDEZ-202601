import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Button, Divider } from '../atoms';
import { FormField } from '../molecules';
import { colors, spacing } from '../theme

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
  loading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onForgotPassword,
  onSignUp,
  loading = false,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (!username.trim()) newErrors.username = 'El usuario es requerido';
    if (!password.trim()) newErrors.password = 'La contraseña es requerida';
    if (password.length > 0 && password.length < 6)
      newErrors.password = 'Mínimo 6 caracteres';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      onLogin(username, password);
    }
  };

  return (
    <View style={styles.container}>
      <FormField
        label="Username"
        placeholder="johndoe"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        error={errors.username}
      />
      <FormField
        label="Password"
        placeholder="••••••••"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        error={errors.password}
      />
      <TouchableOpacity onPress={onForgotPassword} style={styles.forgotContainer}>
        <Text variant="caption" color={colors.primary} style={styles.forgotText}>
          FORGOT PASSWORD?
        </Text>
      </TouchableOpacity>
      <Button
        label="LOGIN"
        onPress={handleLogin}
        fullWidth
        loading={loading}
        style={styles.loginButton}
      />
      <Divider />
      <View style={styles.signupRow}>
        <Text variant="bodySmall" color={colors.textSecondary}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text variant="bodySmall" color={colors.primary} style={styles.signupText}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: spacing.md,
    marginTop: -spacing.xs,
  },
  forgotText: {
    letterSpacing: 0.5,
  },
  loginButton: {
    marginTop: spacing.xs,
  },
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default LoginForm;
