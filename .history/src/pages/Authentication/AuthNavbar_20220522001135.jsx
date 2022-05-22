import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from "react-router-dom"
import { CardBody } from 'reactstrap';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#05386b',
    },
  },
});

function AuthNavbar({Login, question,loginRoute}) {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          {appBarLabel('Evening Lesson', Login, question, loginRoute)}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}

function appBarLabel(label, login, question, loginRoute) {
  return (
    <Toolbar>
      <CardBody className="d-flex"> 
      <Typography variant="h5" noWrap component="div" sx={{ flexGrow: 1 }} className="reg-logo-clr">{label}</Typography>
      <div>
        <span> {question} </span>
        <Link to={`/${loginRoute}`} className="btn btn-registration-clr"> {login} </Link>
      </div>
      </CardBody>
    </Toolbar>
  );
}


export default AuthNavbar