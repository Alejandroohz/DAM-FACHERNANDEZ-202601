import { StyleSheet } from 'react-native';
import { colors } from '../../../themes/colors';
import { spacing, fontSize } from '../../../themes/spacing';

export const registerFormStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    marginTop: spacing.sm,
    backgroundColor: colors.primary,
  },
});
