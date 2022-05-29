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

       <div className="account-pages">
            <Row>
                <Breadcrumb breadcrumbItem="Dashboard" title="My lessons" />
            </Row>
        
            <Row className="banner">
            <Col md={4} className="mobile-margin">
                <Card>
                    <CardBody>
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

            <Row className="banner mt-5"> </Row>
        </div>
        
    </React.Fragment>
  )
}

export default TutorLessons