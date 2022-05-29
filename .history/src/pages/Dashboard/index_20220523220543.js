import React,{useState, useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"
import Cards from "./Cards";
import Newslatter from "./Newslatter";
import SlideBanner from './Slide-banner';

import {perf, analytics} from '../../Database/init-firebase'
import { logEvent } from "firebase/analytics";

const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }

  useEffect(()=>{
    // analytics.logEvent('Home_page_visited')
    logEvent(analytics, 'Home Page Visited', { name: 'lever_puzzle'});
  })


  logEvent(analytics, 'Home Page Visited', { name: 'lever_puzzle'});

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

    { console.log("Performance app",perf) }
    { console.log("analytics",analytics) }

        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard