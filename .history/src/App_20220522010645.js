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


const App = props => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])

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
