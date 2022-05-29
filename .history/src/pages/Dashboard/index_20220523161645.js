import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import Cards from "./Cards";
import Newslatter from "./Newslatter";
import SlideBanner from './Slide-banner';

import {perf} from '../../Database/init-firebase'

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Evening Lessons</title>
        </MetaTags>
        <Container fluid>

          <div className="page-title-box">
            <SlideBanner />
          </div>

            <Cards />

            <Newslatter />



        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard