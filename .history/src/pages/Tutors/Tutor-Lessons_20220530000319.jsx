import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg} from "reactstrap"

import Breadcrumb from 'components/Common/Breadcrumb';
import img1 from '../../assets/images/gallery/work-1.jpg'

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
                <Col md={6} lg={6} xl={3}>
                <Card>
                    <CardImg top className="img-fluid" src={img1} alt="Evening-Lessons" />
                    <CardBody>
                        <p className="card-text h5">Javascript </p>
                        <p className="card-text small">Topic: Variable declaration </p>
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
                            <Link to="/create-lesson" className="btn btn-registration-clr btn-sm">Go to create lessons</Link>
                        </CardBody>
                     </Card>
                </Col>
            </Row>
           
        </div>
        
    </React.Fragment>
  )
}

export default TutorLessons