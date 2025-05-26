import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "../store/reducers/userReducer.js";
import {Provider} from "react-redux";
import {thunk} from "redux-thunk";
import action from "../services/actionCreator.js";
import {BrowserRouter} from "react-router";
import {productsReducer} from "../store/reducers/productsReducer.js";


const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
})

let store = createStore(reducer, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    ,
)
