import React from 'react';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Aboutus from './Pages/Aboutus';
import Contactus from './Pages/Contactus';
import Blog from './Pages/Blog';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route
            index
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path='/Register'
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
          <Route
            path='/Dashboard'
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/Aboutus'
            element={
              <ProtectedRoutes>
                <Aboutus />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/Blog'
            element={
              <ProtectedRoutes>
                <Blog />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/Contactus'
            element={
              <ProtectedRoutes>
                <Contactus />
              </ProtectedRoutes>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App




export function ProtectedRoutes(props) {
  if (!localStorage.getItem('Data')) {
    return <Navigate to='/' />
  }
  else {
    return props.children;
  }
}

export function PrivateRoute(props) {
  if (localStorage.getItem('Data')) {
    return <Navigate to='/Dashboard' />
  }
  else {
    return props.children;
  }
}