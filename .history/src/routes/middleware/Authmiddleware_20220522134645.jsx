import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

function Authmiddleware ({ component: Component, layout: Layout, isAuthProtected, ...rest})  {
  const user_detail = useStore1Selector(user);
  console.log(user_detail);

  return(
    <Route  {...rest} 
      render={(props) => 
          user_detail ? <Layout> <Component {...props} /> </Layout> : <Redirect to="/login"/>
      }
  />
  );
}

Authmiddleware.propTypes = {isAuthProtected: PropTypes.bool,component: PropTypes.any,location: PropTypes.object,layout: PropTypes.any}
export default Authmiddleware

 // if (!user_detail) {
          //   return (  <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>)
          // }
          //   return (
          //     <Layout>
          //       <Component {...props} />
          //     </Layout>
          //   )