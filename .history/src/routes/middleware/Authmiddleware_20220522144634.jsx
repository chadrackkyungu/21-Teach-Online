import React from "react"
import { Route, Redirect,useLocation } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

function Authmiddleware ({ component: Component, layout: Layout, ...rest})  {

  const user_detail = useStore1Selector(user);
  const token = JSON.parse(localStorage.getItem('token'));

  const location = useLocation()

  return (
      <Route  
        {...rest} 
        render={(props) => 
          user_detail && token ?  (<Layout> <Component {...props} /> </Layout>) : (<Redirect to={{ pathname: "/login", state: { from: props.location } }}/>) 
        }
      />
  )
}
export default Authmiddleware



{/* <Route
{...rest}
render={props => {
  if (!user_detail && !token) {
    return (
      <Redirect
        to={{ pathname: "/login", state: { from: props.location } }}
      />
    )
  }

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}}
/> */}