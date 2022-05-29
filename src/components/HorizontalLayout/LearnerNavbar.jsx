import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"

import { connect } from "react-redux"

const LearnerNavbar = props => {

  useEffect(() => {
    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  })

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
            <Collapse isOpen={props.leftMenu}className="navbar-collapse"d="topnav-menu-content">
              <ul className="navbar-nav">
                  <Link  className="nav-link" to="dashboard"> <i className="ti-home me-2"/> Dashboard </Link>
                  <Link to="/#"className="nav-link dropdown-toggle arrow-none"> <i className="ti-harddrives me-2"/> Components </Link>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
  
}

LearnerNavbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})((LearnerNavbar))
)