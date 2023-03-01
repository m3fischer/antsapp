import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#a1db76',
    },
    secondary: {
      main: '#688e4c',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;