import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom';

function IsAuthenticated() {
  const token = localStorage.getItem('Data');
  return token ? <Link to='/Dashboard' /> : <Navigate to='/Login' />
}

export default IsAuthenticated
