import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import { Link } from "react-router-dom"
import AuthNavbar from './AuthNavbar';


const Register = props => {
  const handleValidSubmit = (event, values) => {
   console.log("hey");
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Online Tutoring </title>
      </MetaTags>

    <div className="register-container"> 
      <AuthNavbar Login="LogIn" question="Already have an account ?" loginRoute="login"/>
      <div className="account-pages  pt-sm-5" >
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="clr-registration">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20"> Register</h5>
                    <p className="text-white-50">Get your free account now.</p>
                  
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn clr-registration w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to the online Teaching
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
               
                <p>
                  © {new Date().getFullYear()} Crafted with
                  <i className="mdi mdi-heart text-danger" /> by chadrack
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Register

