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
            <h4>My Lesson's </h4>
            <b>Number of lessons</b>
                <p>50</p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/tutor-dashboard" className="btn btn-registration-clr btn-sm">
                Go to my lessons
                </Link>
        </CardBody>
     </Card>
   </Col>

   <Col md={4}>
     <Card>
        <CardBody>
            <h4> Joined Lesson's </h4>
            <b>Number of students </b>
            <p>150</p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/tutor-dashboard" className="btn btn-registration-clr btn-sm">
                Go to joined lessons
                </Link>
        </CardBody>
        </Card>
   </Col>

   <Col md={4}>
    <Card>
        <CardBody>
            <h4> Create new lesson's </h4>
            <b>  </b>
            <p> </p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/tutor-dashboard" className="btn btn-registration-clr btn-sm">
                Go to create lessons
                </Link>
        </CardBody>
        </Card>
    </Col>

 </Row>
 </React.Fragment>
  )
}

export default tutor