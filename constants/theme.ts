export const colors = {
  primary: '#2563EB',
  accent: '#22C55E',

  background: '#F5F7FA',
  card: '#FFFFFF',

  text: '#111827',
  textMuted: '#6B7280',

  border: '#E5E7EB',

  danger: '#EF4444',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 28,
  full: 999,
};

export const typography = {
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
  },

  body: {
    fontSize: 15,
    fontWeight: '400' as const,
  },

  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
  },

  tiny: {
    fontSize: 10,
    fontWeight: '400' as const,
  },
};