import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider, createDispatchHook, createSelectorHook } from "react-redux"
const store1Context = React.createContext();
const store2Context = React.createContext();


import store from "./store" //Old Redux
import { Redux_store } from './Redux/store/store';

const app = (
  [
    <Provider  store={Redux_store} context={store1Context}>
      <Provider store={store} context={store2Context}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </Provider>,
     
  ]
 
)

export const useStore1Dispatch = createDispatchHook(store1Context);
export const useStore1Selector = createSelectorHook(store1Context);

export const useStore2Dispatch = createDispatchHook(store2Context);
export const useStore2Selector = createSelectorHook(store2Context);

ReactDOM.render(app, document.getElementById("root"))
serviceWorker.unregister()