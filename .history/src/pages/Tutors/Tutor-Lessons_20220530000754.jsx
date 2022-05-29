import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg} from "reactstrap"

import Breadcrumb from 'components/Common/Breadcrumb';
import img1 from '../../assets/images/gallery/work-1.jpg'
import img2 from '../../assets/images/gallery/work-2.jpg'
import img3 from '../../assets/images/gallery/work-3.jpg'

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
                    <Card className="rounded-5">
                        <CardImg top className="img-fluid img-round-top" src={img1} alt="Evening-Lessons" />
                        <CardBody>
                            <p className="card-text h5">Javascript </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6} lg={6} xl={3}>
                    <Card className="rounded-5">
                        <CardImg top className="img-fluid img-round-top" src={img2} alt="Evening-Lessons" />
                        <CardBody>
                            <p className="card-text h5">Python </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6} lg={6} xl={3}>
                    <Card className="rounded-5">
                        <CardImg top className="img-fluid img-round-top" src={img3} alt="Evening-Lessons" />
                        <CardBody>
                            <p className="card-text h5">Mathematics </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </CardBody>
                    </Card>
                </Col>

               
            </Row>
           
        </div>
        
    </React.Fragment>
  )
}

export default TutorLessons