import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Alert, Card, CardBody, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import AuthNavbar from './AuthNavbar';

// action
// import { userForgetPassword } from "../../store/actions"

// import images
// import logoSm from "../../assets/images/logo-sm.png";

const ForgetPasswordPage = props => {
  function handleValidSubmit(event, values) {
    props.userForgetPassword(values, props.history)
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Online Learning </title>
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
                          className="btn btn-primary w-md waves-effect waves-light"
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
                <p>
                  © {new Date().getFullYear()} Online Learning. Crafted with
                  <i className="mdi mdi-heart text-danger" /> by Chadrack_code
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

const mapStatetoProps = state => {
  const { forgetError, forgetSuccessMsg } = state.ForgetPassword
  return { forgetError, forgetSuccessMsg }
}

// export default withRouter(
//   connect(mapStatetoProps, { userForgetPassword })(ForgetPasswordPage)
// )
export default ForgetPasswordPage

