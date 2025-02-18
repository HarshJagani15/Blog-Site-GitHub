import React, { useContext, useEffect, useRef, useState } from 'react';
import logo from '../../Images/Sitelogo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { AUTHENTICATION_ROUTES } from '../../Authentication/Routingconst';
import { AUTHORIZATION_ROUTES } from '../../Authentication/Routingconst';
import { loginAction } from '../../Store/Slices/LoginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {

  const isLogin = useSelector((state) => state.isLogin.state)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navref = useRef();
  const [togglenav, setToggleNav] = useState(false);
  const [user, setUser] = useState();

  function handleLogOut() {
    dispatch(loginAction.setLogOut())
    localStorage.clear();
  }

  function handleNavToggle(e) {
    setToggleNav(!togglenav);
  }

  function AUTHENTICATION_ROUTES_Navigate(value) {
    if (isLogin) {
      navigate(value.route)
    }
    else {
      alert('login first')
    }
  }

  function AUTHORIZATION_ROUTES_Navigate(value) {
    if (!isLogin) {
      navigate(value.route)
    }
  }

  useEffect(() => {
    console.log('useeffect rendered')
    async function getdata() {
      const data = await JSON.parse(localStorage.getItem('Data'));
      if (data) {
        setUser(data);
      }
    }
    getdata();

    function clickedOutside(event) {
      if (navref.current && !navref.current.contains(event.target)) {
        setToggleNav(false);
      }
    }
    document.addEventListener('mousedown', clickedOutside);

  }, [])


  return (
    <>
      <div className=" sticky bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3] top-0 flex md:flex-row flex-col flex-wrap justify-between md:items-center md:px-[40px] md:gap-0 gap-3 md:p-[0] md:pt-[5px] p-[30px]">

        <div ref={navref} className=' flex md:flex-row flex-col items-left gap-5 md:z-0 z-1 md:items-center md:relative md:top-0 md:left-0 absolute top-0 left-0'>
          <img src={logo} alt="" className='md:inline hidden h-8 w-20 rounded-[15px]' />

          <nav className='h-[50px] flex md:flex-row flex-col items-end md:items-center pt-[30px] md:pt-[0] '>

            <FontAwesomeIcon className='md:hidden h-[18px] w-[18px] pr-[16px] pt-[16px] absolute left-[30px] top-[24px]' onClick={(e) => handleNavToggle(e)} icon={faBars} />

            <ul className={`font-semibold md:text-[16px] text-[18px] md:flex flex-col md:flex-row gap-6 md:gap-10 md:text-white text-black md:px-[30px] md:py-[10px] pb-[30px] pt-[40px] pr-[25px] pl-[20px] md:bg-transparent  + ${togglenav ? 'bg-white flex' : 'hidden'}`}>
              {AUTHENTICATION_ROUTES.map((Value, index) => {
                return <li onClick={() => AUTHENTICATION_ROUTES_Navigate(Value)} className='cursor-pointer px-[10px] py-[5px] border-b-transparent hover:border-b-[2px] hover:border-b-white border-b-[2px] ' key={Value.id}>{Value.title}</li>
              })
              }
            </ul>
          </nav>
        </div>

        <div className=' flex self-end gap-5'>
          {!isLogin ?
            (<ul className='flex gap-2   rounded-[30px] md:px-[30px] md:py-[10px]'>
              {AUTHORIZATION_ROUTES.map((Value) => {
                return <li onClick={() => AUTHORIZATION_ROUTES_Navigate(Value)} className='cursor-pointer px-[18px] py-[6px] bg-[#fffffff5] text-[#000] rounded-[30px] list-none text-[16px] font-semibold' key={Value.id}>{Value.title}</li>
              })}
            </ul>
            )
            :
            (<span className='flex gap-2 items-center justify-center'><button className='cursor-pointer px-[18px] py-[6px] bg-[#000] text-[#FFFFFF] rounded-[30px] list-none text-[16px] font-semibold' onClick={() => handleLogOut()}>Logout</button><span className='text-[18px]'>{user?.username}</span><FontAwesomeIcon icon={faUser} /></span>)
          }

        </div>
      </div>
    </>
  )
}

export default Header
