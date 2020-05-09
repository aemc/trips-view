import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1441,
      xl: 1964
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(',')
  },
  palette: {
    mainaccent: '#4A90E2',
    darkaccent: '#3167A6',
    lightaccent: '#AAD0FC',
    alertaccent: '#42C4FC',
    darkgrey: '#313645',
    darkgreycompliment: '#CEC9BA',
    mediumgrey: '#40485A',
    lightgrey: '#ECEFF1',
    whitegrey: '#67696c'
  },
  searchField: {
    width: '50%',
    maxWidth: 600
  }
});
export default muiTheme;
