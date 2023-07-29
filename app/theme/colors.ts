//ref https://colorhunt.co/palette/06283d1363df47b5ffdff6ff

const palette = {
  neutral100: '#FFFFFF',
  neutral200: '#F3F3FA',
  neutral300: '#F4F2F1',
  neutral400: '#B6ACA6',
  neutral500: '#978F8A',
  neutral600: '#564E4A',
  neutral700: '#3C3836',
  neutral800: '#191015',
  neutral900: '#000000',
  primary400: '#0dbbb8',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',

  angry100: '#F2D6CD',
  angry500: '#FF0000',
};

export const COLORS = {
  palette,

  transparent: 'rgba(0, 0, 0, 0)',

  text: palette.neutral800,

  textDim: palette.neutral600,

  background: palette.neutral200,

  border: palette.neutral400,

  tint: palette.primary400,

  separator: palette.neutral300,

  unactive: palette.neutral700,

  error: palette.angry500,

  errorBackground: palette.angry100,

  backgrouund: palette.neutral200,

  darkBackground: '#545458',

  white: palette.neutral100,
};
