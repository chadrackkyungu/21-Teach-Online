import React, { useState } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { showRightSidebarAction, toggleLeftmenu } from "../../store/actions"
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu,DropdownItem } from "reactstrap"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

const Header = props => {
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/dashboard" className="logo logo-dark">
                <h3 className="logo" style={{color: 'white'}}> LEARN WITH US </h3>
              </Link>

              </div>
              <button
                type="button"
                onClick={() => {
                  props.toggleLeftmenu(!props.leftMenu)
                }}
                className="btn btn-sm me-2 font-size-24 d-lg-none header-item waves-effect waves-light"
                id="vertical-menu-btn"
              >
                <i className="mdi mdi-menu"></i>
              </button>
              </div>
            <div className="d-flex">
          
            <NotificationDropdown />      
            <ProfileMenu />        
           
            </div>
          </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  leftMenu: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const { layoutType, showRightSidebar, leftMenu } = state.Layout
  return { layoutType, showRightSidebar, leftMenu }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
})((Header))
