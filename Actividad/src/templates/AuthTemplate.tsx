import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from 'react-native';
import { Text } from '../atoms';
import { colors, spacing } from '../theme';

interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AuthTemplate: React.FC<AuthTemplateProps> = ({ title, subtitle, children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <Text style={styles.logoIcon}>⬡</Text>
          <Text style={styles.brandName}>STOCKPRO</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text variant="h1" style={styles.title}>{title}</Text>
          {subtitle && (
            <Text variant="bodySmall" color={colors.textSecondary} style={styles.subtitle}>
              {subtitle}
            </Text>
          )}
          <View style={styles.formContainer}>{children}</View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 16 : 60,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  logoIcon: {
    fontSize: 28,
    color: colors.accent,
  },
  brandName: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: 3,
  },
  scroll: {
    flex: 1,
    marginTop: -spacing.xl,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.sm,
    paddingBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 8,
  },
  title: {
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.lg,
    lineHeight: 20,
  },
  formContainer: {
    marginTop: spacing.md,
  },
});

export default AuthTemplate;
