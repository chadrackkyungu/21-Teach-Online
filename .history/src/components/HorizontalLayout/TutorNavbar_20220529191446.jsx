import React, { useState, useEffect } from "react"
import { Collapse } from "reactstrap"
import { Link} from "react-router-dom"

const TutorNavbar = () => {
 
  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
              <ul className="navbar-nav">
                  <Link  className="nav-link" to="dashboard"><i className="ti-home me-2"/> Dashboard </Link>
                  <Link to="/tutor"className="nav-link"> <i className="ti-harddrives me-2"/> Components </Link>
              </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}
export  default TutorNavbar
