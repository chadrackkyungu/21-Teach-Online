import React from 'react'
import { CardTitle,CardText, Card, CardBody} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

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

      <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-registration-clr w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                          </button>
                      </Col>
                    </Row>
                  </AvForm>

    </CardBody>
  </Card>
</div>
  )
}

export default Newslatter