import React from 'react';
import { Text, View, ScrollView, SafeAreaView } from 'react-native';
import { authTemplateStyles } from './AuthTemplateStyles';

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

// Template: define la estructura visual de las pantallas de autenticación
const AuthTemplate = ({ title, subtitle, children }: AuthTemplateProps) => {
  return (
    <SafeAreaView style={authTemplateStyles.safeArea}>
      <ScrollView
        contentContainerStyle={authTemplateStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={authTemplateStyles.title}>{title}</Text>
        {subtitle && (
          <Text style={authTemplateStyles.subtitle}>{subtitle}</Text>
        )}
        <View style={authTemplateStyles.childrenContainer}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthTemplate;
