import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

import Breadcrumb from 'components/Common/Breadcrumb';

function TutorLessons() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        <TutorNavbar />

        <Row>
          <Breadcrumb breadcrumbItem="Dashboard" title="Tutor" />
        </Row>
       

        <h1> My Lessons </h1>

        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default TutorLessons