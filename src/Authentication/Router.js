import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import Aboutus from "../components/Aboutus";
import Blog from "../components/Blog";
import ContactUS from "../components/Contactus";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Register',
      element: <Register />
    },
    {
      path: '/Dashboard',
      element: <Dashboard />
    },
    {
      path: '/Aboutus',
      element: <Aboutus />
    },
    {
      path: '/Blog',
      element: <Blog />
    },
    {
      path: '/Contactus',
      element: <ContactUS />
    }

  ]
)