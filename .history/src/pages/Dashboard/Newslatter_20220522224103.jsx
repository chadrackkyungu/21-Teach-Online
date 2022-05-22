import React from 'react'
import { CardTitle,CardText, Card, CardBody, Row, Col, Container} from "reactstrap"
import { AvForm, AvField,  } from "availity-reactstrap-validation"

function Newslatter() {
  return (
   
    <div className="account-pages my-5 pt-5">
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <Card className="overflow-hidden">
          
            <CardBody className="p-4">
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
                      Submit
                      </button>
                  </Col>
                </Row>
              </AvForm>
            </CardBody>
          </Card>
         
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Newslatter