import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, RouterProvider, Routes } from 'react-router-dom';
import { router } from './Authentication/Route';
import { Provider, useDispatch } from 'react-redux';
import { store } from './Store/Store';
import Layout from './components/Layout/Layout';
import { loginAction } from './Store/Slices/LoginSlice';


function App() {

  // const [isLogin, setLogin] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useeffect rendered')
    async function getdata() {
      const data = await JSON.parse(localStorage.getItem('Data'));
      if (data) {
        dispatch(loginAction.setIsLogin(true))
      }
    }
    getdata();
  }, [])

  return (

    <>
      {console.log('App rendered')}
      <RouterProvider router={router} />
    </>

  )
}

export default App

