import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }} className="reg-logo-clr">
        {label}
      </Typography>
      <div>
        <span> Already have an account ? </span>
        <button className="btn btn-registration-clr"> {} </button>
      </div>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#05386b',
    },
  },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          {appBarLabel('O-Learning', 'Login')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}