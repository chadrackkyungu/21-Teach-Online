import React, {useEffect} from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import { userRoutes, authRoutes } from "./routes/allRoutes"

import Authmiddleware from "./routes/middleware/Authmiddleware"

import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

//Animation
import AOS from "aos"
import "aos/dist/aos.css"

// Import scss
import "./assets/scss/theme.scss"

//Redux
import { user } from './Redux/Slices/userSlice';
import { useStore1Dispatch, useStore1Selector } from './index';
import { login, logout } from '../../Redux/Slices/userSlice'
const App = props => {

  const userdetail = useStore1Selector(user);  console.log(userdetail);
  const dispatch = useStore1Dispatch();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged((userdetail) =>{
       if(userdetail){
         dispatch(login({
           uid:userdetail.uid, 
           name:userdetail.displayName ? userdetail.displayName : userdetail.email, 
           last_signIn:userdetail.metadata.lastSignInTime, 
           verify: String(userdetail.emailVerified),
           pic: userdetail.photoURL ? userdetail.photoURL : ""
         }))
       }else{
         dispatch(logout())
       }
    })
   }, []);
 
  return (
    <React.Fragment>
      <Router>
        <Switch>
          
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={HorizontalLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
