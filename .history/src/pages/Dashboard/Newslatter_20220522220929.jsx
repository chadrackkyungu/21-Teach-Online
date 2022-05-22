import React from 'react'
import { CardTitle,CardText, Card, CardBody, CardSubtitle, Button} from "reactstrap"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Newslatter() {
  return (
    <div className="banner my-5 text-center">
  <Card
  >
    <CardBody>
      <CardTitle tag="h2"> Subscribe to our news letter </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Subscribe" variant="outlined" />
     
    </Box>
    </CardBody>
  </Card>
</div>
  )
}

export default Newslatter