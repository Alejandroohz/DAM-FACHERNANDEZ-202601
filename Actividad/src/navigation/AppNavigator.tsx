import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import RegisterPage from '../pages/RegisterPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
