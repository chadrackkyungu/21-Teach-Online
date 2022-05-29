import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg} from "reactstrap"

import Breadcrumb from 'components/Common/Breadcrumb';
import img1 from '../../assets/images/product/img-1.png'

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
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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