import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import img from '../Images/blog.jpg'

function Register() {

  const registerform = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const validateForm = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = 'Username is required';
    } else if (data.username.length < 4) {
      errors.username = 'Username must be at least 4 characters long';
    }

    if (!data.email) {
      errors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.password) {
      errors.password = 'Passsword is required'
    } else if (data.password.length < 8) {
      errors.password = 'Password must be 8 character long';
    }

    if (data.confirmpassword !== data.password) {
      errors.confirmpassword = 'Password do not match'
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = registerform.current;
    const formData = {
      username: form['username'].value,
      email: form['email'].value,
      password: form['password'].value,
      confirmpassword: form['confirmpassword'].value
    }

    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('Data', JSON.stringify(formData));
      navigate('/');
    } else {
      setError(newErrors);
      form['username'].value = '';
      form['email'].value = '';
      form['password'].value = '';
      form['confirmpassword'].value = '';
    }
  }

  function handleonClick() {
    setError(null);
  }

  return (
    <>
      {console.log('register rendered')}
      <div className=' w-full md:min-h-[68.5vh] flex flex flex-col md:flex-row gap-16 items-center md:justify-end md:px-[40px]  bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3]'>
        <div className=' md:p-[10px_40px_15px_40px] p-[15px_40px_15px_40px] bg-[#fff] rounded-[10px] '>
          <h1 className='text-[28px] mb-[15px]  font-[500] '>Register</h1>
          <form className=' flex  flex-col w-auto gap-5' onSubmit={(e) => handleSubmit(e)} ref={registerform}>

            <div className='flex gap-2 flex-col'>
              {/* <div className='flex flex-col gap-2 md:gap-5 '> */}
              <div className=' flex flex-col gap-0 md:grow'>
                <label className='text-[18px] font-[500]' htmlFor="">Name:</label>
                <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[27px]' type="text" name={'username'} required onClick={() => handleonClick()} />
                {error?.username && (
                  <span className='text-[#B71C1C]'>
                    {error.username}
                  </span>
                )}
              </div>

              <div className=' flex flex-col gap-0 md:grow'>
                <label className='text-[18px] font-[500]' htmlFor="">Email:</label>
                <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[27px]' type="email" name={'email'} required />
                {error?.email && (
                  <span className='text-[#B71C1C]'>
                    {error.email}
                  </span>
                )}
              </div>
              {/* </div> */}

              {/* <div className='flex flex-col gap-2 md:gap-5'> */}
              <div className=' flex flex-col gap-0 md:grow'>
                <label className='text-[18px] font-[500]' htmlFor="">Password:</label>
                <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[27px]' type="password" name={'password'} required />
                {error?.password && (
                  <span className='text-[#B71C1C]'>
                    {error.password}
                  </span>
                )}
              </div>

              <div className=' flex flex-col gap-0 md:grow'>
                <label className='text-[18px] font-[500]' htmlFor="">Confirm Password:</label>
                <input className='p-[10px] border-[1px] border-[#000] bg-[rgb(50,50,50,6%)] h-[27px]' type="password" name={'confirmpassword'} required />
                {error?.confirmpassword && (
                  <span className='text-[#B71C1C]'>
                    {error.confirmpassword}
                  </span>
                )}
              </div>
              {/* </div> */}
            </div>

            <button className='font-medium p-[10px] mt-[10px] bg-[#1b53fff0] text-black self-left' onClick={handleSubmit}>Sign Up</button>
            {/* <Link className='p-[10px] mt-[10px] bg-[rgb(0,0,0)] text-white ' to='/'>Sign In</Link> */}
          </form>
        </div>
        <img src={img} alt="" className=' px-[30px] object-cover md:h-[400px] md:w-auto h-auto w-auto' />
      </div>
    </>
  )
}

export default Register
