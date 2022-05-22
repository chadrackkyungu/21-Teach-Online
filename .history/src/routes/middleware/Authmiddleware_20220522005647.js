import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

const Authmiddleware = ({ component: Component, layout: Layout,isAuthProtected,...rest}) => {

  const userdetail = useStore1Selector(user)
  
  return(
    <Route {...rest} render={props => {
    
          // if (isAuthProtected && !localStorage.getItem("authUser")) {
          if (!userdetail) {
            return (  <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>)
          }

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
