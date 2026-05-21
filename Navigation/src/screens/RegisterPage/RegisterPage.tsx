import React from 'react';
import { AuthTemplate } from '../../components/Templates';
import { RegisterForm } from '../../components/organisms';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../Routes';

const RegisterPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = () => {
    console.log('Register submitted');
    navigation.navigate('Login');
  };

  return (
    <AuthTemplate title="REGISTER" subtitle="Create a new account">
      <RegisterForm onSubmit={handleRegister} />
    </AuthTemplate>
  );
};

export default RegisterPage;
