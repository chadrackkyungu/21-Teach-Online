import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

import TutorNavbar from 'components/HorizontalLayout/TutorNavbar'

function tutor() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        <TutorNavbar />
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       
   <Row className="banner mt-5">
      
   <Col md={4} className="mobile-margin">
     <Card>
     <CardBody>
           <h6> Below are the steps to get started </h6>
            <p>hjhjh</p>
     </CardBody>

            <div className="dropdown-divider"/>

    <CardBody>
           <div className="mt-4">
             <Link to="/tutor-dashboard" className="btn btn-registration-clr btn-sm">
              Start here
             </Link>
           </div>
     </CardBody>
     </Card>
   </Col>

   <Col md={4}>
     <Card>
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
     </Card>
   </Col>

   <Col md={4}>
     <Card>
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
     </Card>
   </Col>

 </Row>
 </React.Fragment>
  )
}

export default tutor