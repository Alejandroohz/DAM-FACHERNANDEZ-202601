import React, { useState } from 'react';
import { Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTemplate } from '../templates';
import { LoginForm } from '../organisms';
import { RootStackParamList } from '../navigation/types';

type LoginPageProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

const LoginPage: React.FC<LoginPageProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = (username: string, password: string) => {
    setLoading(true);
    // Simulated auth — replace with real API call
    setTimeout(() => {
      setLoading(false);
      if (username && password) {
        navigation.replace('Dashboard', { userName: username });
      } else {
        Alert.alert('Error', 'Credenciales inválidas');
      }
    }, 1200);
  };

  const handleForgotPassword = () => {
    Alert.alert('Recuperar contraseña', 'Funcionalidad próximamente');
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthTemplate title="LOGIN" subtitle="Ingresa tus credenciales para continuar">
      <LoginForm
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
        loading={loading}
      />
    </AuthTemplate>
  );
};

export default LoginPage;
