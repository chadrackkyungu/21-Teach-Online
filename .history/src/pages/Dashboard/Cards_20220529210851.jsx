import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

function Cards() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        
         <p className="text-center  my-5 text-p"> 
            Hey! We have live and prereordered tutorial that will grab that dream job, with best tutor on the planette.  with Evening lesson's you will get the best you have been looking for
        </p>

    <Row className="banner mt-5">
       
    <Col md={6} className="mobile-margin">
      <Card className="hover-clr h-100">
        <CardBody>
          <div >
            <h3 className="text-success card_header mb-3">Become a tutor </h3>
            <h6> Below are the steps to get started </h6>
            <ul>
                <li>Open  a ticket</li>
                <li>Get Approval</li>
                <li>Open  a ticket</li>
                <li>Open  a ticket</li>
            </ul>
            <div className="mt-4">
              <Link to="/tutor-dashboard" className="btn btn-registration-clr btn-sm">
               Start here
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

    <Col md={6}>
      <Card className="hover-clr h-100">
        <CardBody>
          <div>
            <h3 className="text-success card_header mb-3"> Do you need  extra <br /> lesson's ? </h3>
            <h6> Below are the steps to get started </h6>
            <ul>
                <li>Choose a lesson</li>
                <li>Start learning</li>
                <li>Start learning</li>
                <li>Start learning</li>
            </ul>
            <div className="mt-4">
              <Link to="/learner" className="btn btn-registration-clr btn-sm">
               Start here
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>

  </Row>
  </React.Fragment>
  )
}

export default Cards