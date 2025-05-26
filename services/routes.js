import React from 'react';
import Home from '../pages/Home';
import Profile from "../pages/Profile.jsx";
import Catalog from "../pages/Catalog.jsx";
import Notfound from "../pages/Notfound.jsx";


export const publicRoutes = [
    {path: '/', element: Home},
    {path: '*', element: Notfound},
]
export const privateRoutes = [
    {path: '/', element: Home},
    {path: '/profile', element: Profile},
    {path: '/catalog', element: Catalog},
    {path: '*', element: Notfound},
]


