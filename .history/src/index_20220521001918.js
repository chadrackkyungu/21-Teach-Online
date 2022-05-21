import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"


import { Provider } from "react-redux"

import store from "./store" //Old Redux
import { Redux_store } from './Redux/store/store'; //My  Own Redux

const Redux_store = React.createContext();
const store = React.createContext();

const app = (
  <Provider store={Redux_store} context={Redux_store}>
    <Provider store={store} context={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
 </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()