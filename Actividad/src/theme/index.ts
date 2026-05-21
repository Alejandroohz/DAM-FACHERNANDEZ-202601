export const colors = {
  primary: '#2d5580',
  primaryDark: '#1a3a5c',
  accent: '#ef7f00',
  accentLight: '#ff9a2e',
  background: '#f5f7fa',
  surface: '#ffffff',
  surfaceAlt: '#eef2f7',
  text: '#1a2332',
  textSecondary: '#5a6a7e',
  textMuted: '#8fa0b5',
  border: '#d0dce8',
  success: '#2e7d52',
  error: '#c0392b',
  white: '#ffffff',
  black: '#000000',
  cardShadow: 'rgba(45, 85, 128, 0.12)',
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700' as const, color: colors.text },
  h2: { fontSize: 22, fontWeight: '700' as const, color: colors.text },
  h3: { fontSize: 18, fontWeight: '600' as const, color: colors.text },
  body: { fontSize: 14, fontWeight: '400' as const, color: colors.text },
  bodySmall: { fontSize: 12, fontWeight: '400' as const, color: colors.textSecondary },
  label: { fontSize: 13, fontWeight: '500' as const, color: colors.textSecondary },
  caption: { fontSize: 11, fontWeight: '400' as const, color: colors.textMuted },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 999,
};

export const shadow = {
  card: {
    shadowColor: colors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 4,
  },
  button: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
};
