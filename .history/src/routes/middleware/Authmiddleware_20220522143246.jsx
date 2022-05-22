import React from "react"
import { Route, Redirect } from "react-router-dom";

//Redux
import  { user } from '../../Redux/Slices/userSlice';
import { useStore1Selector } from '../../index';

function Authmiddleware ({ component: Component, layout: Layout, ...rest})  {

  const user_detail = useStore1Selector(user);
  const token = JSON.parse(localStorage.getItem('token'));

  return(
    <Route  
      {...rest} 
      render={(props) => {
        if((!user_detail && !token)) return <Redirect to="/login"/>
        if((user_detail && token)) return <Layout> <Component {...props} /> </Layout>

        // !user_detail && !token ?  (<Redirect to="/login"/>) :  (<Layout> <Component {...props} /> </Layout>)
      }
  />
  );
}
export default Authmiddleware