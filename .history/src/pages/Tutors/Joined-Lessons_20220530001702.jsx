import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg} from "reactstrap"
import { AiOutlineEye } from 'react-icons/ai';
import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';

import Breadcrumb from 'components/Common/Breadcrumb';
import img1 from '../../assets/images/gallery/work-1.jpg'
import img2 from '../../assets/images/gallery/work-2.jpg'
import img3 from '../../assets/images/gallery/work-3.jpg'

function JoinedLessons() {
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
          <Breadcrumb breadcrumbItem="Dashboard" title="Joined lessons" />
        </Row>

        <Row className="banner">

            <Col md={6} lg={6} xl={3}>
                <Card className="rounded-5">
                    <Row> 
                        <Col md={6} lg={6} xl={6}>
                            <CardImg top className="img-fluid img-round-top" src={img1} alt="Evening-Lessons" />
                        </Col>
                        <Col md={6} lg={6} xl={6}>
                        <CardBody>
                            <p className="card-text h6 text-danger">View <AiOutlineEye size={20} /> 22  </p>
                            <p className="card-text">Javascript </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </CardBody>
                        </Col>
                    </Row>
                   
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
        
        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default JoinedLessons