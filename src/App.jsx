import { useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router";
import {privateRoutes,publicRoutes} from "../services/routes.js";
import './App.css'
import Header from "../components/Header.jsx";
import {useSelector} from "react-redux";

function App() {
    const auth = useSelector(state => state.user.auth)
  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
              {
                  auth===true?
                      privateRoutes.map(item=>(
                          <Route path={item.path} element={item.element()}/>
                      ))
                      :
                      publicRoutes.map(item=>(
                          <Route path={item.path} element={item.element()}/>
                      ))
              }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
