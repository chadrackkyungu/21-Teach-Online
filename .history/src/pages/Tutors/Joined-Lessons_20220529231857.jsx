import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody} from "reactstrap"

function JoinedLessons() {
  return (
    <React.Fragment className="banner mt-5 mb-5">
        <TutorNavbar />

        <h1> Joined Lessons </h1>
        
        <Row className="banner mt-5"> </Row>
    </React.Fragment>
  )
}

export default JoinedLessons