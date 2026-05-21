import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { spacing, fontSize } from '../../../themes/spacing';

export const buttonStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.secondary,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.sm,
  },
  label: {
    color: colors.white,
    fontSize: fontSize.md,
    fontWeight: '700',
    letterSpacing: 1,
  },
});