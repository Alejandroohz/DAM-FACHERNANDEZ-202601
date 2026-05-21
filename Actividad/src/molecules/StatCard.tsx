import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Text } from '../atoms';
import { colors, radius, shadow, spacing } from '../theme

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: string;
  color?: string;
  style?: ViewStyle;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color = colors.primary,
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      <View style={[styles.iconContainer, { backgroundColor: color + '18' }]}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text variant="bodySmall" color={colors.textSecondary} style={styles.title}>
        {title.toUpperCase()}
      </Text>
      <Text variant="h2" color={color} style={styles.value}>{value}</Text>
      {subtitle && (
        <Text variant="caption" color={colors.textMuted}>{subtitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    flex: 1,
    ...shadow.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  icon: {
    fontSize: 20,
  },
  title: {
    letterSpacing: 0.6,
    fontSize: 10,
    marginBottom: spacing.xs,
  },
  value: {
    fontSize: 22,
    marginBottom: 2,
  },
});

export default StatCard;
