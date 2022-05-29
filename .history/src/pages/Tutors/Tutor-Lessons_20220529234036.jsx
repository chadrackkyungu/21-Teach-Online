import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

import Breadcrumb from 'components/Common/Breadcrumb';

function TutorLessons() {
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
          <Breadcrumb breadcrumbItem="Dashboard" title="My lessons" />
        </Row>
       
        <Row className="banner">
            <h1> My Lessons </h1>
        </Row>

        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default TutorLessons