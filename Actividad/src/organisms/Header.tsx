import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Text } from '../atoms';
import { colors, spacing } from '../theme

interface HeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  rightAction?: {
    label: string;
    onPress: () => void;
  };
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, onBack, rightAction }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {onBack && (
          <TouchableOpacity onPress={onBack} style={styles.backButton} activeOpacity={0.7}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Text variant="h3" color={colors.white} align="center">{title}</Text>
        {subtitle && (
          <Text variant="caption" color="rgba(255,255,255,0.7)" align="center">
            {subtitle}
          </Text>
        )}
      </View>
      <View style={styles.right}>
        {rightAction && (
          <TouchableOpacity onPress={rightAction.onPress} activeOpacity={0.7}>
            <Text style={styles.rightActionText}>{rightAction.label}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: StatusBar.currentHeight ?? 44,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  left: {
    width: 44,
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    width: 60,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: spacing.xs,
  },
  backIcon: {
    fontSize: 22,
    color: colors.white,
    fontWeight: '300',
  },
  rightActionText: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Header;
