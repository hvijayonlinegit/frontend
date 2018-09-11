import { createMuiTheme } from '@material-ui/core/styles';
// import indigo from '@material-ui/core/colors/indigo';
// import pink from '@material-ui/core/colors/pink';
// import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    
  palette:{
    primary: {
      //light: '#000000',
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});