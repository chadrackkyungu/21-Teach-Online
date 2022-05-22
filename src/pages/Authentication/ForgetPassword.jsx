import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import AuthNavbar from './AuthNavbar';
import ParticlesBg from 'particles-bg';

import { auth } from '../../Database/init-firebase'
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgetPasswordPage = props => {

   const handleValidSubmit = (e, inputVal) => {
    e.preventDefault();
    forgotPassword(inputVal);
   }

  function forgotPassword(v){
    sendPasswordResetEmail(auth, v.email, ).then(() => {
      alert("Please verify your email we just sent you a link where you can to reset your password");
      url: `http://localhost:3000/login` 
    }).catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log("An error : ", errorCode, errorMessage);
    })
  }


  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Evening Lessons </title>
      </MetaTags>
    
      <AuthNavbar Login="Login here" question="Remember it?" loginRoute="login"/>

      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="clr-registration">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">Forget Password</h5>
                  </div>
                </div>
                <CardBody className="p-4">

                  {props.forgetError && props.forgetError ? (
                    <Alert color="danger" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetError}
                    </Alert>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <Alert color="success" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetSuccessMsg}
                    </Alert>
                  ) : null}

                  <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, v) => handleValidSubmit(e, v)}
                  >
                    <div className="mb-3">
                      <AvField
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-registration-clr w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                          </button>
                      </Col>
                    </Row>
                  </AvForm>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p className="bg-white p-1">
                  © {new Date().getFullYear()} Online Learning. Crafted with
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

export default ForgetPasswordPage

