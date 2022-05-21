import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"
import  { name, email } from '../../Redux/Slices/userSlice';

import { useStore1Selector, useStore1Dispatch } from '../../index';

const Authmiddleware = ({ component: Component, layout: Layout,isAuthProtected,...rest}) => {
  const emailState = useStore1Selector(name)
  console.log(emailState);
  return(
    <Route {...rest} render={props => {
    
          // if (isAuthProtected && !localStorage.getItem("authUser")) {
          // if (emailState) {
          //   return (  <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>)
          // }

          return (
            <Layout>
              <Component {...props} />
            </Layout>
          )
      }}
  />
  )
  
}

Authmiddleware.propTypes = {isAuthProtected: PropTypes.bool,component: PropTypes.any,location: PropTypes.object,layout: PropTypes.any}

export default Authmiddleware
