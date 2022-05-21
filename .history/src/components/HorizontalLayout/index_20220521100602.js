import PropTypes from 'prop-types'
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions"

import Navbar from "./Navbar"
import Header from "./Header"
import Footer from "./Footer"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const title = this.props.location.pathname
    let currentage = title.charAt(1).toUpperCase() + title.slice(2)
    document.title = currentage + " | Teaching online"

    
    this.props.changeLayout("horizontal")
    if (this.props.topbarTheme) {
      this.props.changeTopbarTheme(this.props.topbarTheme)
    }
    if (this.props.layoutWidth) {
      this.props.changeLayoutWidth(this.props.layoutWidth)
    }
  }

  openMenu = () => {
    this.setState({ isMenuOpened: !this.state.isMenuOpened })
  }

  render() {
    return (
      <React.Fragment>
        <div id="layout-wrapper">
          <Header theme={this.props.topbarTheme} isMenuOpened={this.state.isMenuOpened}  openLeftMenuCallBack={this.openMenu}/>  {/* Top Nav bar */}
          <Navbar menuOpen={this.state.isMenuOpened} />  {/* Down Nav bar */}
          <div className="main-content">{this.props.children}</div>  {/* Main Content */}
          <Footer />  {/* Footer */}
        </div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  children: PropTypes.object,
  layoutWidth: PropTypes.any,
  location: PropTypes.object,
  showRightSidebar: PropTypes.any,
  topbarTheme: PropTypes.any
}

const mapStatetoProps = state => {
  return {
    ...state.Layout,
  }
}
// export default Layout
export default connect(mapStatetoProps, mapDispatchtoProps,mergeProps,{
  changeTopbarTheme,
  changeLayout,
  changeLayoutWidth,
  context: store2Context
})(withRouter(Layout))
// export default connect(mapStatetoProps, {
//   changeTopbarTheme,
//   changeLayout,
//   changeLayoutWidth,
// })(withRouter(Layout))
