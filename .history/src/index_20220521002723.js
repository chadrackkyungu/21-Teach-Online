import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import store from "./store" //Old Redux
import { Redux_store } from './Redux/store/store';

const app = (
  [
    <Provider store={Redux_store} key="1">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    <Provider store={store} key="2">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ]
 
)

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()