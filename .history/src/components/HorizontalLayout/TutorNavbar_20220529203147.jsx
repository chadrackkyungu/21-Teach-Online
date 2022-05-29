import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"

import { connect } from "react-redux"

const TutorNavbar = props => {

    const [dashboard, setDashboard] = useState(false)
    const [component, setcomponent] = useState(false)
    const [form, setform] = useState(false)
    const [table, settable] = useState(false)
    const [chart, setchart] = useState(false)
    const [icon, seticon] = useState(false)
    const [map, setmap] = useState(false)
    const [extra, setextra] = useState(false)
    const [auth, setauth] = useState(false)

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

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
            <Collapse isOpen={props.leftMenu}className="navbar-collapse"d="topnav-menu-content">
              <ul className="navbar-nav">
                  <Link  
                   onClick={e => {
                    e.preventDefault()
                    setDashboard(!ui)
                  }}
                  className="nav-link" to="dashboard"> <i className="ti-home me-2"/> Dashboard </Link>
                  <Link to="/#"className="nav-link dropdown-toggle arrow-none"> <i className="ti-harddrives me-2"/> Components </Link>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )

}

TutorNavbar.propTypes = {
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
  connect(mapStatetoProps, {})((TutorNavbar))
)