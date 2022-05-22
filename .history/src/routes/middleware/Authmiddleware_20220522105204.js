import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

const Authmiddleware = ({ component: Component, layout: Layout,isAuthProtected,...rest}) => {
  const user_detail = useStore1Selector(user); 
  console.log(user_detail);
  console.log(user_detail.name);
  
  return(
    <Route render={props => {

          // if (isAuthProtected && !localStorage.getItem("user")) {
          //   return (  <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>)
          // }
          if(user_detail){
            return (
              <Layout>
                <Component {...props} />
              </Layout>
            )
          }else{
            return   <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
          }
      }}
  />
  )
  
}

Authmiddleware.propTypes = {isAuthProtected: PropTypes.bool,component: PropTypes.any,location: PropTypes.object,layout: PropTypes.any}
export default Authmiddleware
