import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"
import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';

import Breadcrumb from 'components/Common/Breadcrumb';

function CreateNewLessons() {
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
          <Breadcrumb breadcrumbItem="Dashboard" title="Create new lessons" />
        </Row>

        <h1> Create New Lessons </h1>
        
        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default CreateNewLessons