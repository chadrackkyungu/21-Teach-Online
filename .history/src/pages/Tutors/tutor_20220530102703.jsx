import PropTypes from 'prop-types'
import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"
import { MdOutlinePlayLesson } from 'react-icons/md';
import { GrConnect } from 'react-icons/gr';
import { MdCreate } from 'react-icons/md';

import TutorNavbar from 'components/HorizontalLayout/TutorNavbar'
import Breadcrumb from 'components/Common/Breadcrumb';

function tutor() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        <TutorNavbar />

       <br />
       <br />
       <br />
       <br />
       <br />
       <br />

      <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Tutor" />
      </Row>
       
   <Row className="banner mt-5">
      
      
   <Col md={4} className="mobile-margin">
     <Card>
        <CardBody>
            <h4> <MdOutlinePlayLesson /> My Lesson's </h4>
            <b>Number of lessons</b>
                <p>50</p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/tutor-lessons" className="btn btn-registration-clr btn-sm">
                Go to my lessons
                </Link>
        </CardBody>
     </Card>
   </Col>

   <Col md={4}>
     <Card>
        <CardBody>
            <h4> <GrConnect /> Joined Lesson's </h4>
            <b>Number of students </b>
            <p>150</p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/joined-lessons" className="btn btn-registration-clr btn-sm">
                Go to joined lessons
                </Link>
        </CardBody>
        </Card>
   </Col>

   <Col md={4}>
    <Card>
        <CardBody>
            <h4> <MdCreate /> Create new lesson's </h4>
            <b> Note:  </b>
            <p> start now</p>
        </CardBody>
                <div className="dropdown-divider"/>
        <CardBody>
                <Link to="/create-lesson" className="btn btn-registration-clr btn-sm">
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


