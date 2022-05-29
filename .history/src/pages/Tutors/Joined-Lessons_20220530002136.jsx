import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, CardImg} from "reactstrap"
import { AiOutlineEye } from 'react-icons/ai';
import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';

import Breadcrumb from 'components/Common/Breadcrumb';
import img1 from '../../assets/images/gallery/work-1.jpg'
import img2 from '../../assets/images/gallery/work-2.jpg'

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
                    <CardImg top className="img-fluid img-round-top" src={img1} alt="Evening-Lessons" />
                    <CardBody>
                    <Row> 
                        <Col md={6} lg={6} xl={6}>
                            <p className="card-text h6 text-danger">View <AiOutlineEye size={20} /> 22  </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </Col>
                        <Col >
                            <p className="card-text">Javascript </p>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </Col>

            <Col md={6} lg={6} xl={3}>
                <Card className="rounded-5">
                    <CardImg top className="img-fluid img-round-top" src={img2} alt="Evening-Lessons" />
                    <CardBody>
                    <Row> 
                        <Col md={6} lg={6} xl={6}>
                            <p className="card-text h6 text-danger">View <AiOutlineEye size={20} /> 22  </p>
                            <p className="card-text small">Topic: Variable declaration </p>
                        </Col>
                        <Col >
                            <p className="card-text">Nextjs </p>
                        </Col>
                    </Row>
                    </CardBody>
                </Card>
            </Col>

           
        </Row>
        
        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default JoinedLessons