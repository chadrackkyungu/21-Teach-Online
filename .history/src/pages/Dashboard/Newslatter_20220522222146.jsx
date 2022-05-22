import React from 'react'
import { CardTitle,CardText, Card, CardBody} from "reactstrap"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

function Newslatter() {
  return (
    <div className="banner my-5 text-center">
  <Card
  >
    <CardBody>
      <CardTitle tag="h2"> Subscribe to our news letter </CardTitle>
     
      <CardText>
        Stay up to date for every evening lesson 
      </CardText>

      <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off">

      <TextField id="outlined-basic" label="Subscribe" variant="outlined" />
     
      {/* <Button variant="contained"  className="submit">Submit </Button> */}
      <ColorButton variant="contained">Custom CSS</ColorButton>
    </Box>
    </CardBody>
  </Card>
</div>
  )
}

export default Newslatter