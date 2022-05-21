import React,{useState} from "react"
import MetaTags from 'react-meta-tags';
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap"


import SlideBanner from './Slide-banner';


const Dashboard = () => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(!menu)
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Teaching online</title>
        </MetaTags>
        <Container fluid>
          <div className="page-title-box">
            <SlideBanner />
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Dashboard