import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#05386b',
    },
  },
});

function AuthNavbar({Login, question}) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          {appBarLabel('O-Learning', Login, question)}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

function appBarLabel(label, login) {
  return (
    <Toolbar>
      <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }} className="reg-logo-clr">{label}</Typography>
      <div>
        <span> {question} </span>
        <button className="btn btn-registration-clr"> {login} </button>
      </div>
    </Toolbar>
  );
}


export default AuthNavbar