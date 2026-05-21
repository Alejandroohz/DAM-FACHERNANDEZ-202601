import React from 'react';
import { AuthTemplate } from '../../components/Templates';
import { LoginForm } from '../../components/organisms';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../Routes';

const LoginPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = () => {
    console.log('Login submitted');
    // Aquí iría la lógica de autenticación real
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthTemplate title="LOGIN">
      <LoginForm
        onSubmit={handleLogin}
        onSignUp={handleNavigateToRegister}
        onForgotPassword={() => console.log('Forgot password')}
      />
    </AuthTemplate>
  );
};

export default LoginPage;
