import React from 'react'
import { CardTitle,CardText, Card, CardBody, Row, Col} from "reactstrap"
import { AvForm, AvField,  } from "availity-reactstrap-validation"

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

      <AvForm className="form-horizontal mt-4" onValidSubmit={(e, v) => handleValidSubmit(e, v)}>
                   <Row className="mb-3 mx-auto">
                      <Col lg={12} className="text-center">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control w-50 "
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </Col>
                    </Row>

                    <Row className="mb-3">
                      <Col className="text-center">
                        <button
                          className="btn btn-registration-clr w-md waves-effect waves-light w-50"
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