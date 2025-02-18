import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import img from '../Images/blog.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../Store/Slices/DashboardSlice';
import { loginAction } from '../Store/Slices/LoginSlice';


function Login() {

  // const { isLogin, setIsLogin } = useContext(UserContext)
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginform = useRef();
  const [loginData, setLoginData] = useState();
  const [error, setError] = useState();

  const validateForm = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password) {
      errors.password = 'Passsword is required'
    }

    return errors;
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Data'));
    // console.log(data)
    setLoginData(data);
  }, [])

  function handleLogin(event) {

    event.preventDefault()
    const form = loginform.current;
    try {
      if (loginData.email === form['email'].value && loginData.password === form['password'].value) {
        // setIsLogin(true);
        dispatch(loginAction.setIsLogin());
        navigate('/')
      }
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      {console.log('Login rendered')}

      <div className=' w-full md:min-h-[68.5vh]  flex flex-col md:flex-row gap-16 items-center md:justify-end bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3] md:px-[40px] '>
        <div className='p-[15px_30px_30px_30px] bg-[#fff] rounded-[10px] h-full self-center  ' >
          <h1 className='text-[28px] mb-[20px]  font-[500] p-[0_20px] text-black'>Sign In</h1>
          <form className='flex flex-col w-auto gap-2 p-[0_20px]' onSubmit={(event) => handleLogin(event)} ref={loginform}>

            <div className=' flex flex-col gap-2'>
              <label className='text-[18px] font-[500] text-black' htmlFor="">Email:</label>
              <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[30px]' type="email" name='email' required />
            </div>

            <div className=' flex flex-col gap-2'>
              <label className='text-[18px] font-[500] text-black' htmlFor="">Password:</label>
              <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[30px] ' type="password" name='password' required />
            </div>

            <button className='p-[10px] mt-[10px] bg-[#1b53fff0] text-black flex flex-row justify-center items-center gap-2'><span className=''>Sign In</span> <FontAwesomeIcon className='h-[20px]' icon={faArrowRightToBracket} /></button>
            {/* <Link to='/Register'>Sign Up</Link> */}
            {/* <button onClick={() => handlesignup()}>Sign Up</button> */}

          </form>
        </div >

        <img src={img} alt="" className='px-[30px] object-cover md:h-[400px] md:w-auto h-auto w-auto' />
      </div >
    </>
  )
}

export default Login
