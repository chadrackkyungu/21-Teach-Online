import React from 'react'
import { CardTitle,CardText, Card, CardBody, Row, Col} from "reactstrap"
import { AvForm, AvField,  } from "availity-reactstrap-validation"

function Newslatter() {
  return (
   
    <div className="account-pages my-5 pt-5">
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6} xl={4}>
          <Card className="overflow-hidden">
            <div className="clr-registration">
              <div className="text-primary text-center p-4">
                <h5 className="text-white font-size-20 p-2">Forget Password</h5>
              </div>
            </div>
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
                      Reset
                      </button>
                  </Col>
                </Row>
              </AvForm>
            </CardBody>
          </Card>
          <div className="mt-5 text-center">
            <p className="bg-white p-1">
              © {new Date().getFullYear()} Online Learning. Crafted with
              <i className="mdi mdi-heart text-danger" /> by Chadrack_code
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Newslatter