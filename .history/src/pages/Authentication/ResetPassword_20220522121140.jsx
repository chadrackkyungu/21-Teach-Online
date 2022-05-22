import React, {useState} from "react"
import MetaTags from 'react-meta-tags';
import { Link, useLocation, useHistory } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
import {auth } from '../../Database/init-firebase'
import { confirmPasswordReset } from 'firebase/auth';
import AuthNavbar from "./AuthNavbar";


function useQuery(){
    const location = useLocation() 
    return new URLSearchParams(location.search)
}


const ResetPassword = () => {

    const query = useQuery();

    const history = useHistory()
    const [msg, setMsg] = useState("")

    function handleValidSubmit(event, values) {
      event.preventDefault()

     const newPassword = values.password

     confirmPasswordReset(auth, query.get('oobCode'), newPassword)
        .then(res => {
          setMsg("password Reset sucessfully!!")
          alert('password reset sucessfully!!!')
          history.push('/login')
        })
        .catch(err => setMsg("Error please try again"))
    }

  return (
    <React.Fragment>
      <MetaTags>
        <title> School Management System </title>
      </MetaTags>

      <AuthNavbar Login="Reset Password" question="Password Remembered ?" loginRoute="login"/>

      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
          <p className="bg-success text-white">{msg}</p>

            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-success">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">
                      Reset Password
                      </h5>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <div className="alert alert-success mt-5" role="alert" >
                      Enter Your Password!
                      </div>

                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }} >
                      <div className="mb-3">
                        <AvField
                          name="password"
                        //   label="Reset Password"
                          type="password"
                          placeholder="Enter Password"
                          required
                        />
                      </div>

                      <div className="row mb-0">
                        <Col xs={12} className="text-end">
                          <button
                            className="btn btn-success w-md waves-effect waves-light"
                            type="submit"
                          >
                            Reset password
                            </button>
                        </Col>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Remember It ?
                  <Link
                    to="login"
                    className="fw-medium text-primary"
                  >
                      Sign In here
                  </Link>
                </p>
                <p className="mb-0">
                Cpoy right © {new Date().getFullYear()} School Management
                  System made with 
                  <i className="mdi mdi-heart text-danger" />
                  By chadrack_code
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div> </React.Fragment>
  )
}

export default ResetPassword
