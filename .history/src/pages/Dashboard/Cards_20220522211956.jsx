import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

function Cards() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        
         <p className="text-center"> 
            Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
        </p>

    <Row className="banner mt-5 ">
       
    <Col md={6}>
      <Card className="hover-clr">
        <CardBody>
          <div className="py-4">
            <h2 className="text-primary card-header">Become a tutor</h2>
            <h6> Below are the steps to get started </h6>
            <ul>
                <li>Open  a ticket</li>
                <li>Get Approval</li>
                <li>Open  a ticket</li>
            </ul>
            <div className="mt-4">
              <Link to="" className="btn btn-registration-clr btn-sm">
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
  </React.Fragment>
  )
}

export default Cards