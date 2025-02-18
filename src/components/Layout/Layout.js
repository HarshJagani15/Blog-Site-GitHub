import React, { memo } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';


function Layout({ children }) {

  return (
    <>
      {console.log('Layout rendered')}
      <div className=' flex flex-col relative gap-0 bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3]'>

        <Header />

        <Outlet />

        <Footer />

      </div >
    </>
  )
}

export default memo(Layout);