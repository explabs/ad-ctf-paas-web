import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    red: {
      main: red[500],
    },
    primary: {
      main: '#39abe7',
    },
    secondary: {
      main: '#19857b',
    },
    green: {
      main: '#64D86B',
    },
    yellow: {
      main: '#FFD12B',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
