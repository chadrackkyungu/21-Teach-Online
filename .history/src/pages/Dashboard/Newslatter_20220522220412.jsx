import React from 'react'
import { CardTitle,CardText, Card, CardBody, CardSubtitle, Button} from "reactstrap"

function Newslatter() {
  return (
    <div className="banner my-5">
  <Card
  >
    <CardBody>
      <CardTitle tag="h"> Subscribe to our news letter </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        Card subtitle
      </CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</div>
  )
}

export default Newslatter