const colors = {
  blue: {
    100: '#ebf7ff',
    200: '#bee3f7',
    300: '#93cdf3',
    400: '#63b3ec',
    500: '#4399e3',
    600: '#3383cd',
    700: '#2a6cb2',
    800: '#2c5383',
    900: '#2a4464',
  },
  green: {
    100: '#f3fff3',
    200: '#c5f5d5',
    300: '#9ae5b5',
    400: '#68d393',
    500: '#47bb77',
    600: '#38a168',
    700: '#2f855a',
    800: '#256549',
    900: '#22553d',
  },
  grey: {
    100: '#f5fafc',
    200: '#edf2f5',
    300: '#e2e6f2',
    400: '#cbd4e0',
    500: '#a3aec3',
    600: '#738093',
    700: '#4a5565',
    800: '#2d3545',
    900: '#1a222c',
  },
  red: {
    100: '#fff5f5',
    200: '#fed5d5',
    300: '#feb3b3',
    400: '#fc8383',
    500: '#f76767',
    600: '#e53e3e',
    700: '#c53030',
    800: '#9b2b2b',
    900: '#742b2b',
  },
  white: '#fff',
};

const defaultTheme = {
  background: colors.grey[100],
  border: colors.grey[500],
  borderActive: colors.grey[600],
  borderError: colors.red[600],
  borderRadius: '0.25rem',
  boxShadow: {
    sm:
      '0 0.25rem 0.5rem rgba(0, 0, 0, 0.12), 0 0.125rem 0.25rem rgba(0, 0, 0, 0.08)',
  },
  breakpoints: {
    sm: '600px',
    md: '900px',
    lg: '1200px',
  },
  button: colors.green[500],
  buttonActive: colors.green[600],
  buttonFacebook: '#3b5998',
  buttonTwitter: '#1da1f2',
  buttonText: colors.grey[800],
  form: colors.white,
  header: colors.white,
  input: colors.grey[100],
  inputActive: colors.white,
  link: colors.blue[700],
  linkActive: colors.blue[600],
  logo: colors.grey[700],
  mobileMenu: colors.grey[800],
  outline: colors.grey[500],
  placeholder: colors.grey[500],
  text: colors.grey[800],
  textError: colors.red[700],
  maxWidth: '832px',
  transition: '0.2s cubic-bezier(1, -0.65, 0, 2.25)',
  transitionEase: '0.2s ease-in-out',
  transitionEaseOut: '0.2s cubic-bezier(0.175, 1, 0.3, 1.35)',
};

export default defaultTheme;