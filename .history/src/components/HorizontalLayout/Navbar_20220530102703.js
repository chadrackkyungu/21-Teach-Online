import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Row, Col, Collapse } from "reactstrap"
import { Link, withRouter } from "react-router-dom"
import classname from "classnames"

//i18n
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"

const Navbar = props => {
  const [ui, setui] = useState(false)

  const [email, setemail] = useState(false)

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
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="dashboard"
                  >
                    <i className="ti-home me-2" />
                    {("Dashboard")} {props.menuOpen}
                  </Link>

                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <Link
                    to="/#"
                    onClick={e => {
                      e.preventDefault()
                      setui(!ui)
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="ti-package me-2"></i>
                    {("UI Elements")}
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu px-2 dropdown-menu-start dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <Row>
                      <Col lg={4}>
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Alerts")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Buttons")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Cards")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Carousel")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Dropdowns")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Grid")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Images")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Lightbox")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Modals")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Range Slider")}
                          </Link>
                          <Link
                            to="/"
                            className="dropdown-item"
                          >
                            {("Session Timeout")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Progress Bars")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Sweet-Alert")}
                          </Link>
                          <Link
                            to="/"
                            className="dropdown-item"
                          >
                            {("Tabs & Accordions")}
                          </Link>
                        </div>
                      </Col>
                      <Col lg={4}>
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Typography")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Video")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("General")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Colors")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Rating")}
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setcomponent(!component)
                    }}
                  >
                    <i className="ti-harddrives me-2"></i>
                    {("Components")}
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setemail(!email)
                        }}
                      >
                        {("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="/" className="dropdown-item">
                          {("Inbox")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Read Email")}
                        </Link>
                        <Link to="/" className="dropdown-item">{("Email Compose")} </Link>
                      </div>
                    </div>
                    <Link to="/" className="dropdown-item">
                      {("Calendar")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setform(!form)
                        }}
                      >
                        {("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="/" className="dropdown-item">
                          {("Form Elements")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Layouts")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Validation")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Advanced")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Editors")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form File Upload")}{" "}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Xeditable")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Repeater")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Wizard")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Form Mask")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setchart(!chart)
                        }}
                      >
                        {("Charts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="/" className="dropdown-item">
                         
                          {("Chartjs Chart")}
                        </Link>

                        <Link to="/" className="dropdown-item">
                          
                          {("E Chart")}
                        </Link>

                        <Link to="/" className="dropdown-item">
                          {("Chartjs Chart")}</Link>

                        <Link to="/" className="dropdown-item">
                         
                          {("Apex charts")}
                        </Link>


                        <Link to="/" className="dropdown-item">
                        
                          {("Sparkline Chart")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          settable(!table)
                        }}
                      >
                        {("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="/" className="dropdown-item">
                          {("Basic Tables")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Data Tables")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Responsive Table")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Editable Table")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          seticon(!icon)
                        }}
                      >
                        {("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link
                          to="/"
                          className="dropdown-item"
                        >
                          {("Material Design")}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Font awesome")}{" "}
                        </Link>

                        <Link to="/" className="dropdown-item">Ion Icons</Link>

                        <Link to="/" className="dropdown-item">Themify Icons</Link>

                        <Link to="/" className="dropdown-item">
                          {("Dripicons")}
                        </Link>

                        <Link to="/" className="dropdown-item">Typicons Icons</Link>

                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={e => {
                          e.preventDefault()
                          setmap(!map)
                        }}
                      >
                        {("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="/" className="dropdown-item">
                          {("Google Maps")}{" "}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Vector Maps")}{" "}
                        </Link>
                        <Link to="/" className="dropdown-item">
                          {("Leaflet Maps")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown mega-dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={e => {
                      e.preventDefault()
                      setauth(!auth)
                    }}
                  >
                    <i className="ti-archive me-2"></i>{" "}
                    {("Authentication")}
                  </Link>
                  <div
                    className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-lg", { show: auth })}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Login")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Register")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Recover Password")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Lock Screen")}
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Login 2")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Register 2")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Recover Password 2")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Lock Screen 2")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="#"
                    onClick={e => {
                      e.preventDefault()
                      setextra(!extra)
                    }}
                  >
                    <i className="ti-support me-2"></i>{" "}
                    {("Extra pages")}
                  </Link>

                  <div
                    className={classname("dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-lg", {
                      show: extra,
                    })}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div>
                          <Link to="/" className="dropdown-item">
                            {("Timeline")}
                          </Link>
                          <Link to="/" className="dropdown-item">
                            {("Starter Page")}
                          </Link>
                          <Link to="/" className="dropdown-item">{("Directory")}</Link>
                          <Link to="/" className="dropdown-item">{("Error 404")}</Link>
                          <Link to="/" className="dropdown-item">{("Error 500")}</Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div>
                          <Link to="/" className="dropdown-item">{("Pricing")}</Link>
                          <Link to="/" className="dropdown-item">{("Gallery")}</Link>
                          <Link to="/" className="dropdown-item">{("Maintenance")}</Link>
                          <Link to="/" className="dropdown-item">{("Coming Soon")}</Link>
                          <Link to="/" className="dropdown-item">{("FAQs")}</Link>
                        </div>
                      </div>
                    </div>

                  </div>

                </li>

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle arrow-none" to="#" id="topnav-emailtemplates" role="button"
                    onClick={e => {
                      e.preventDefault()
                      setemail(!email)
                    }}
                  >
                    <i className="ti-bookmark-alt me-2"></i>Email Templates
                  </Link>
                  <div className={classname("dropdown-menu", {
                    show: email,
                  })} aria-labelledby="topnav-emailtemplates">
                    <Link
                      to="/"
                      className="dropdown-item"
                    >
                      {("Basic Action")}
                    </Link>
                    <Link
                      to="/"
                      className="dropdown-item"
                    >
                      {("Alert Email")}
                    </Link>
                    <Link
                      to="/"
                      className="dropdown-item"
                    >
                      {("Billing Email")}
                    </Link>
                  </div>
                </li>

              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

// export default Navbar
export default withRouter(
  connect(mapStatetoProps, {})(withTranslation()(Navbar))
)