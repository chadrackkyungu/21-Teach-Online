import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"

import { Provider, createDispatchHook, createSelectorHook } from "react-redux"
const store1Context = React.createContext();

import store from "./store" //Old Redux
import { Redux_store } from './Redux/store/store'; //My own redux

const app = (
    // My own Redux
    <Provider  store={Redux_store} context={store1Context}>
      {/* ashboard Redux */}
      <Provider store={store}> 
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Provider>
)

//!  Note i want be using useselector & useDispatch from "react-redux" to get state & actions, instead i will used the one below
export const useStore1Dispatch = createDispatchHook(store1Context);
export const useStore1Selector = createSelectorHook(store1Context);

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()