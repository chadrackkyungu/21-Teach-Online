import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, FormGroup, Button} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import Breadcrumb from 'components/Common/Breadcrumb';

function CreateNewLessons() {
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
          <Breadcrumb breadcrumbItem="Dashboard" title="Create new lessons" />
        </Row>

        <Row className="banner">

            <Col xl={12} md={6}>
              <Card className="mini-stat bg-white text-black ">
                <CardBody>
                  <AvForm onValidSubmit={(e, v) => {
                     handleValidSubmit(e, v);
                  }}>

                  <h5 className="mb-5"> Create a new lesson </h5>

                  <hr />
                  <Row> 

                    <Col md={6}> 
                       <AvField 
                        className="mb-3 p-2 bg-white input-style"
                        name="date_of_birth"
                        label="Date Of Birth Day" 
                        type="date" 
                        errorMessage="Invalid date of birth"
                        validate={{ required: { value: true }}}
                        title="Use MM/DD/YYYY"
                       /> 
                      <AvField
                        className="mb-3 p-2 bg-white input-style"
                        name="email"
                        label="E-Mail  "
                        // placeholder="Enter Valid Email"
                        type="email"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                      }}
                    />      
                    </Col> 

                    <Col md={6}> 
                    <AvField
                      className="mb-3 p-2 bg-white input-style"
                      name="number"
                      label="Enter you phone number"
                      type="number"
                      errorMessage="Please Enter your phone number"
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]+$",
                          errorMessage: "Only Numbers",
                        },
                      }}
                    />
                    <AvField type="select" name="gender" label="Select Gender" className="mb-3 p-2 bg-white input-style"   errorMessage="please select gender"  validate={{ required: { value: true }}}>
                      <option></option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </AvField>
                   
                    </Col>
                    
                    </Row>

                    {/* <Row className="m-4">  */}
                   
                    <Row>
                      <Col xl={6} md={6}>
                        <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Enter Parent Name"
                          name="parentName"
                          type="text"
                          errorMessage="full name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Enter Parent Last Name"
                          name="parentLastName"
                          type="text"
                          // placeholder="Parent Last Name" n
                          errorMessage="parent Last Name"
                          validate={{ required: { value: true } }}
                        />
                        <AvField
                          className="mb-3 p-2 bg-white input-style"
                          name="CellNumber"
                          label="Enter cell phone Number "
                          type="text"
                          // placeholder="Cell phone Number"
                          errorMessage="Invalid cell phone Number"
                          validate={{ required: { value: true }}}
                        />
                      </Col>

                     <Col xl={6} md={6}>
                      <AvField
                        className="mb-3 p-2 bg-white input-style"
                        name="parentEmail"
                        label="E-Mail"
                        type="email"
                        errorMessage="Invalid Email"
                        validate={{
                          required: { value: true },
                          email: { value: true },
                        }}
                      />

                      <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Job Title"
                          name="jobTitle"
                          type="text"
                          // placeholder="Job Title"
                          errorMessage="Job Title is required"
                          validate={{ required: { value: true } }}
                      />
                         
                    </Col>  


                    <Col lg={12} md={6}>
                      <AvField
                        className="mb-3 input-style"
                        type="textarea"
                        label="Adress"
                        rows="5"
                        name="address"
                        id="address"
                        errorMessage="This value is required."
                        validate={{
                          required: { value: true },
                        }}
                      />
                    </Col>                   
                   
                    </Row>
                    <FormGroup className="mb-0">
                      <div className="d-flex justify-content-center p-2 text-center">
                        {/* <Button type="submit" color="primary" className="m-2  btn-mobile-width"  disabled={perc !== null && perc < 100}> */}
                        <Button type="submit" color="primary" className="m-2  btn-mobile-width">
                          Submit
                        </Button>
                      </div>
                    </FormGroup>

                    {/* </Row> */}
                  </AvForm>
                    </CardBody>
              </Card>
            </Col>
       

        </Row>
        
    </React.Fragment>
  )
}

export default CreateNewLessons