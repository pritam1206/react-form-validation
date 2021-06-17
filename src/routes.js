import React from 'react'
import { Navigate } from 'react-router-dom'
import DashboardLayout from './Layouts/DashboardLayout'
import MainLayout from './Layouts/MainLayout'
import Welcome from './Pages/Welcome'
import About from './Pages/about'
import Contact from './Pages/contact'
import Login from './Pages/auth/Login'
import Register from './Pages/auth/Register'
import PageNotFound from './Pages/auth/PageNotFound'

// All Pages routes goes here!
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Welcome />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '404', element: <PageNotFound /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: '/', element: <Navigate to="/login" /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '404', element: <PageNotFound /> },
    ],
  },
]

export default routes
