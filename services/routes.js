import React from 'react';
import Home from '../pages/Home';
import Profile from "../pages/Profile.jsx";
import {useSelector} from "react-redux";


export const publicRoutes=[
    {path: '/', element: Home},
]
export const privateRoutes=[
    {path: '/', element: Home},
    {path: '/profile', element: Profile}
]


