import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { spacing, fontSize } from '../../../themes/spacing';

export const inputFieldStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: colors.gray.dark,
    marginBottom: spacing.xs,
    letterSpacing: 0.5,
  },
  inputWrapper: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.white,
  },
  focusedWrapper: {
    borderColor: colors.secondary,
  },
  input: {
    height: 44,
    fontSize: fontSize.md,
    color: colors.black,
  },
});