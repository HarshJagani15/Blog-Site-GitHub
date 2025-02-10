import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Blog from './components/Blog';
import Layout from './components/Layout';
import { router } from './Authentication/Router';
import { RouterProvider } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path='Aboutus' element={<Aboutus />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='Contactus' element={<Contactus />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
