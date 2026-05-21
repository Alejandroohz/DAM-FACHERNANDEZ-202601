import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '../atoms';
import { Header } from '../organisms';
import { colors, spacing } from '../theme';

interface DashboardTemplateProps {
  userName: string;
  onLogout: () => void;
  onRegisterProduct: () => void;
  children: React.ReactNode;
}

const DashboardTemplate: React.FC<DashboardTemplateProps> = ({
  userName,
  onLogout,
  onRegisterProduct,
  children,
}) => {
  return (
    <View style={styles.flex}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text variant="caption" color="rgba(255,255,255,0.65)" style={styles.welcomeLabel}>
              BIENVENIDO
            </Text>
            <Text variant="h2" color={colors.white} style={styles.userName}>
              {userName}
            </Text>
          </View>
          <TouchableOpacity onPress={onLogout} style={styles.logoutBtn}>
            <Text style={styles.logoutText}>⎋</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onRegisterProduct} style={styles.registerButton} activeOpacity={0.85}>
          <Text style={styles.registerIcon}>＋</Text>
          <Text style={styles.registerText}>Registrar Producto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 50,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  welcomeLabel: {
    letterSpacing: 1.5,
    fontSize: 10,
  },
  userName: {
    letterSpacing: 0.3,
  },
  logoutBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 20,
    color: colors.white,
  },
  registerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.accent,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 10,
    alignSelf: 'flex-start',
    gap: spacing.xs,
  },
  registerIcon: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '300',
    lineHeight: 22,
  },
  registerText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
});

export default DashboardTemplate;
