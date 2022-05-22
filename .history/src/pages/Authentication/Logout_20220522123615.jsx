import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { signOut } from 'firebase/auth';
import { auth } from '../../Database/init-firebase'

const Logout = props => {
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    signOut(auth)
    .then(() => {
      console.log("user signed out");
      history.replace(location.state?.from ?? "/login")
    })
    .catch((error) => {
      console.log("error", error);
    });
  })

  return <></>
}

export default Logout
