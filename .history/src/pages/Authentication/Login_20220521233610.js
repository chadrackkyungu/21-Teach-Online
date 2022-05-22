import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"
import { Link } from "react-router-dom"
import { AvForm, AvField } from "availity-reactstrap-validation"
import AuthNavbar from './AuthNavbar';

import ParticlesBg from "particles-bg";

const Login = props => {

  const handleValidSubmit = (event, values) => {
    console.log("login");
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | To Evening Lessons</title>
      </MetaTags>

      <AuthNavbar Login="Register" question="I don't have an account ?" loginRoute="register"/>

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="clr-registration">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                        </h5>
                    <p className="text-white-50">
                      Sign in to continue to Evening Lessons.
                        </p>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          // value="admin@themesbrand.com"
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
                          // value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-registration-clr w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                              </button>
                        </Col>
                      </Row>

                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <button className='btn btn-white'><i className="mdi mdi-Google"></i>Google Login</button>
                        </div>
                      </Row> 

                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password" className='text-success'><i className="mdi mdi-lock "></i> Forgot your password?</Link>
                        </div>
                      </Row>
                     
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p className="bg-white p-1"> 
                  © {new Date().getFullYear()} oline Learning. Crafted with
                  <i className="mdi mdi-heart text-danger" /> by Chadrack_code
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <ParticlesBg type="cobweb" bg={true} num={200}/>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default Login
