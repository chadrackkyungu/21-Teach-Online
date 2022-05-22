import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

const Authmiddleware = ({ component: Component, layout: Layout,isAuthProtected}) => {
  const user_detail = useStore1Selector(user); console.log(user_detail);
  
  return(
    <Route  render={props => {
          if (isAuthProtected && !user_detail) {
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