import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { spacing, fontSize } from '../../../themes/spacing';

export const loginFormStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: -spacing.sm,
    marginBottom: spacing.md,
  },
  forgotPasswordText: {
    color: colors.secondary,
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  signUpText: {
    fontSize: fontSize.md,
    color: colors.gray.dark,
  },
  signUpLink: {
    fontSize: fontSize.md,
    color: colors.secondary,
    fontWeight: '700',
  },
});
