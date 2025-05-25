import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {combineReducers, createStore} from "redux";
import {userReducer} from "../store/reducers/userReducer.js";
import {Provider} from "react-redux";

const reducer = combineReducers({
    user: userReducer,
})

let store = createStore(reducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
  ,
)
