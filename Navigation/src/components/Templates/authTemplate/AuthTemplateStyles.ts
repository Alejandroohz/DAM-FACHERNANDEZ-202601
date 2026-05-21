import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { spacing, fontSize } from '../../../themes/spacing';

export const authTemplateStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: '800',
    color: colors.black,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.gray.dark,
    marginBottom: spacing.xl,
  },
  childrenContainer: {
    flex: 1,
    marginTop: spacing.xxl,
  },
});