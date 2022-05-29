import PropTypes from 'prop-types'
import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

import Navbar from 'components/HorizontalLayout/Navbar'

import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
} from "../../store/actions"

function tutor() {
  return (
    <><Navbar /><h1>tutor</h1></>
  )
}

export default tutor