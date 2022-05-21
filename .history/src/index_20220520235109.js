import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"
import store from "./store" //Old Redux
import { Redux_store } from './Redux/store/store'; //My  Own Redux

const app = (
  <Provider store={store}>
      <BrowserRouter>
      <Provider store={Redux_store}>
        <App />
    </Provider>
      </BrowserRouter>
 </Provider>
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()