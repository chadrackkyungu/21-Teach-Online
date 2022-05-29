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
      
   <Col md={3} className="mobile-margin">
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

   <Col md={3}>
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

   <Col md={3}>
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

export default tutor