import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"

const TutorNavbar = props => {
 
  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">

            <Collapse isOpen={props.leftMenu}className="navbar-collapse"d="topnav-menu-content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link  className="nav-link" to="dashboard"><i className="ti-home me-2" /> Dashboard </Link>
                </li>

                <li className="nav-item">
                  <Link to="/#"className="nav-link dropdown-toggle arrow-none"> <i className="ti-harddrives me-2"></i> Components </Link>
                </li>
              </ul>
            </Collapse>

          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}
export  default TutorNavbar
