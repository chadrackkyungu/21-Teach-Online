import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Col, Row, Card, CardBody, FormGroup, Button} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"

import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TutorNavbar from 'components/HorizontalLayout/TutorNavbar';
import Breadcrumb from 'components/Common/Breadcrumb';

import {analytics} from '../../Database/init-firebase'
import {logEvent} from "firebase/analytics";


import { FiInfo } from 'react-icons/fi'

function CreateNewLessons() {

  const [check, setCheck] = useState("")
  const getValue = (e, v) =>{
    setCheck(v)
  }
  const [available, setAvailable] = useState("")
  const toggleAvailable = (e, v) =>{
    setAvailable(v)
  }



  useEffect(()=>{
    logEvent(analytics, 'Create new lesson page', { name: 'Chad'});
  }, [])
  logEvent(analytics, 'Create new lesson page', { name: 'Chad'});

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

        <Row className="banner create-lesson-container">

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
                    <FormControlLabel 
                      control={<Switch/>} 
                      label={ !check ? "Zoom" : 'Youtube'}
                      color="" 
                      size="medium" 
                      onChange={getValue}  
                    />
                    </Col>
                    <Col md={6} className="d-flex align-center">

                      <FormControlLabel 
                        control={<Switch/>} 
                        label={ !available ? "Not available" : "Available" }
                        color="" 
                        size="medium" 
                        onChange={toggleAvailable}  
                      />
                       <Tooltip describeChild title="Once you choose Available it will make your lesson appear to students right after you publish it" >
                        <label htmlFor=""><FiInfo /> </label>
                      </Tooltip>
                    </Col>
                  </Row>
                 


                  <Row> 
                    <Col md={6}> 

                    {!check ?
                      <Col md={12}> 
                            <AvField
                              className="mb-3 p-2 bg-white input-style"
                              label="Enter your Zoom ID"
                              name="zoom"
                              type="number"
                              placeholder="1236589741"
                              errorMessage="name is required"
                              validate={{ required: { value: true } }}
                            />
                      </Col>  :

                      <Col md={12}> 
                            <AvField
                              className="mb-3 p-2 bg-white input-style"
                              label="Enter your Youtube link"
                              name="Youtube"
                              type="text"
                              placeholder="Past your youtube prerecorded link here"
                              errorMessage="name is required"
                              validate={{ required: { value: true } }}
                            />
                      </Col> 
                  }
                     
                    <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Tutor full name"
                          name="tutor_name"
                          type="text"
                          errorMessage="name is required"
                          validate={{ required: { value: true } }}
                        />
                        
                    </Col> 

                    <Col md={6}> 
                    <AvField type="select" name="level" label="Select level" className="mb-3 p-2 bg-white input-style"   errorMessage="level is required"  
                      validate={{   required: { value: true }}}>
                      <option></option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </AvField>
                    
                    <AvField type="select" name="language" label="Select Language" className="mb-3 p-2 bg-white input-style"   errorMessage="language is required"  
                      validate={{   required: { value: true }}}>
                      <option></option>
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                      <option>Zulu</option>
                      <option>Portuguese</option>
                    </AvField>
                   
                    </Col>
                    </Row>

                    <Row>
                      <Col xl={6} md={6}>
                        
                      <AvField 
                        className="mb-3 p-2 bg-white input-style"
                        name="date"
                        label="Choose Date and time" 
                        type="datetime-local" 
                        errorMessage="date is required"
                        validate={{ required: { value: true }}}
                        title="Use MM/DD/YYYY"
                       /> 
                      <AvField
                        className="mb-3 p-2 bg-white input-style"
                        name="Requirement"
                        label="Requirement"
                        type="text"
                        errorMessage="is required"
                        validate={{
                          required: { value: true },
                       }}
                    />   

                      <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Requirement (optional)"
                          name="Requirement"
                          type="text"
                      
                      />
                      </Col>

                     <Col xl={6} md={6}>

                     <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="Topic lesson"
                          name="topic"
                          type="text"
                          errorMessage="topic is required"
                          validate={{ required: { value: true } }}
                        />  

                        <AvField
                          className="mb-3 p-2 bg-white input-style"
                          name="length"
                          label="Video length"
                          type="number"
                          errorMessage="is required"
                          validate={{ required: { value: true }}}
                        />
 
                      <AvField
                          className="mb-3 p-2 bg-white input-style"
                          label="What you will learn  (don't forget to separate by comma)"
                          name="material"
                          type="text"
                          errorMessage="is required"
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

                    <FormGroup className="mb-4">
                      <div className="d-flex justify-content-center p-2 text-center">
                        {/* <Button type="submit" color="primary" className="m-2  btn-mobile-width"  disabled={perc !== null && perc < 100}> */}
                        <Button type="submit" className="m-2  hover-clr">
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