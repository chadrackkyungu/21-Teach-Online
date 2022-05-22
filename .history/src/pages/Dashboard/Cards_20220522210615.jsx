import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

function Cards() {
  return (
    <Row className="banner">
    <Col md={6}>
      <Card className="text-center">
        <CardBody>
          <div className="py-4">
            <i className="ion ion-ios-checkmark-circle-outline display-4 text-success"></i>

            <h5 className="text-primary mt-4">Order Successful</h5>
            <p className="text-muted">
              Thanks you so much for your order.
            </p>
            <div className="mt-4">
              <Link to="" className="btn btn-primary btn-sm">
                Chack Status
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
    <Col md={6}>
      <Card className="bg-primary">
        <CardBody>
          <div className="text-center text-white py-4">
            <h5 className="mt-0 mb-4 text-white-50 font-size-16">
              Top Product Sale
            </h5>
            <h1>1452</h1>
            <p className="font-size-14 pt-1">Computer</p>
            <p className="text-white-50 mb-0">
              At solmen va esser necessi far uniform myth...{" "}
              <Link to="#" className="text-white">
                View more
              </Link>
            </p>
          </div>
        </CardBody>
      </Card>
    </Col>
  </Row>
  )
}

export default Cards