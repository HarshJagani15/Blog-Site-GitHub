import { createBrowserRouter, Navigate, redirect, useNavigate } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import Aboutus from "../Pages/Aboutus";
import Blog from "../Pages/Blog";
import ContactUS from "../Pages/Contactus";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import Layout from "../components/Layout/Layout";


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
        },
        {
          path: '/Register',
          element: <PrivateRoute><Register /></PrivateRoute>,
        },
        {
          path: '/Login',
          element: <PrivateRoute><Login /></PrivateRoute>
        },
        {
          path: '/Aboutus',
          element: <ProtectedRoute><Aboutus /></ProtectedRoute>
        },
        {
          path: '/Blog',
          element: <ProtectedRoute><Blog /></ProtectedRoute>
        },
        {
          path: '/Contactus',
          element: <ProtectedRoute><ContactUS /></ProtectedRoute>
        },
        {
          path: '/*',
          element: <><h1>page not found</h1></>
        }
      ]
    }
  ]
)



