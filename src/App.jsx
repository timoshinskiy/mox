import {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import {privateRoutes, publicRoutes} from "../services/routes.js";
import Header from "../components/Header.jsx";
import {useDispatch, useSelector} from "react-redux";
import action from '../services/actionCreator';
import './App.css'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfound from "../pages/Notfound.jsx";

function App() {
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state.user);
    return (
        <>
            <Header/>
            <ToastContainer position="top-center"/>
            <Routes>
                {
                    auth === true ?
                        privateRoutes.map(item => (
                            <Route path={item.path} element={item.element()}/>
                        ))
                        :
                        publicRoutes.map(item => (
                            <Route path={item.path} element={item.element()}/>
                        ))
                }
            </Routes>
        </>
    )
}

export default App
