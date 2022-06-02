import React, {useEffect} from "react"
import { Switch, BrowserRouter as Router } from "react-router-dom"
import { userRoutes, authRoutes } from "./routes/allRoutes"

import Authmiddleware from "./routes/middleware/Authmiddleware"

import HorizontalLayout from "./components/HorizontalLayout"
import NonAuthLayout from "./components/NonAuthLayout"

//Animation
import AOS from "aos"
import "aos/dist/aos.css"

// Import scss
import "./assets/scss/theme.scss"


import { onAuthStateChanged } from "firebase/auth"
import { auth } from "Database/init-firebase"
import { useStore1Dispatch } from "index"
import { saveUser } from "Redux/Slices/userSlice"

const App = props => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })

    
    AOS.refresh()
  }, [])

  const dispatch = useStore1Dispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        localStorage.setItem('token', JSON.stringify(user.refreshToken));
      }
      if (user) {
        dispatch(saveUser({
          uid:user.uid, 
          name:user.displayName ? user.displayName : user.email, 
          last_signIn:user.metadata.lastSignInTime, 
          verify: String(user.emailVerified),
          pic: user?.photoURL ? user?.photoURL : "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
          token: user.refreshToken
        }));
        

      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);


  return (
    <React.Fragment>
      <Router>
        <Switch>
          
          {authRoutes.map((route, i) => (
            <Authmiddleware
              path={route.path}
              component={route.component}
              exact={route.exact}
              layout={NonAuthLayout}
              key={i}
            />
          ))}

          {userRoutes.map((route, i) => (
            <Authmiddleware
              path={route.path}
              exact={route.exact}
              component={route.component}
              layout={HorizontalLayout}
              key={i}
            />
          ))}
          
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App
