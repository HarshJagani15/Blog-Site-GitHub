import React, { memo, useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import logo from '../Images/Sitelogo.jpeg'
import { AUTHENTICATION_ROUTES } from '../Authentication/Routingconst'
import { AUTHORIZATION_ROUTES } from '../Authentication/Routingconst'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'


function Layout() {

  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState();
  const [togglenav, setToggleNav] = useState(false);

  useEffect(() => {
    console.log('useeffect rendered')
    async function getdata() {
      const data = await JSON.parse(localStorage.getItem('Data'));
      if (data) {
        setLogin(true);
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

  function AUTHENTICATION_ROUTES_Navigate(value) {
    if (isLogin) {
      navigate(value.route)
    }
    else {
      alert('login first')
    }

  }

  function AUTHORIZATION_ROUTES_Navigate(value) {
    if (isLogin) {
      navigate('/Dashboard')
    }
    navigate(value.route)
  }

  function handleLogOut() {
    navigate('/')
    setLogin(false);
    localStorage.clear();
  }

  // const isSidebarDisable = window.matchMedia('(max-width: 640px)').matches;



  function handleNavToggle(e) {
    setToggleNav(!togglenav);
  }

  const navref = useRef();

  // useEffect(() => {
  //   console.log('second useeffect')

  // }, [])

  return (
    <>
      {console.log('Layout rendered')}
      <div className=' flex flex-col relative gap-0 bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3]'>
        <div className=" sticky bg-gradient-to-r from-[#4ca1af]  to-[#cfdef3] top-0 flex md:flex-row flex-col flex-wrap justify-between md:items-center md:px-[40px] md:gap-0 gap-3 md:p-[0] md:pt-[5px] p-[30px]">

          <div ref={navref} className=' flex md:flex-row flex-col items-left gap-5 md:z-0 z-1 md:items-center md:relative md:top-0 md:left-0 absolute top-0 left-0'>
            <img src={logo} alt="" className='md:inline hidden h-8 w-20 rounded-[15px]' />

            <nav className='h-[50px] flex md:flex-row flex-col items-end md:items-center pt-[30px] md:pt-[0] '>

              <FontAwesomeIcon className='md:hidden h-[18px] w-[18px] pr-[16px] pt-[16px] absolute left-[30px] top-[24px]' onClick={(e) => handleNavToggle(e)} icon={faBars} />

              <ul className={'font-semibold md:text-[16px] text-[18px] md:flex flex-col md:flex-row gap-6 md:gap-10 md:text-white text-black md:px-[30px] md:py-[10px] pb-[30px] pt-[40px] pr-[25px] pl-[20px] md:bg-transparent ' + `${togglenav ? 'bg-white flex' : 'hidden'}`}>
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

        <div className="overflow-hidden md:py-[30px] p-0 pb-[40px]">
          <Outlet />
        </div>

        <footer className='overflow-hidden md:sticky static bottom-0 z-1  bottom-0 flex flex-wrap justify-between pt-[15px] pb-[10px] px-[40px] gap-24 border-[1px] border-[rgba(0,0,0,0.2)] rounded-[10px] bg-white'>
          <div className='flex flex-col gap-3'>
            <img src={logo} alt="" className='h-8 w-20 rounded-[15px]' />
            <p className='text-[15px] leading-[20px]'>Making the world a better place through constructing elegant hierarchies. </p>
            <div className='flex gap-5'>
              <FontAwesomeIcon className='h-[22px] text-[#0000ff]' icon={faFacebook} />
              <FontAwesomeIcon className='h-[22px] text-[#1DA1F2]' icon={faTwitter} />
              <FontAwesomeIcon className='h-[22px] text-[#FD1D1D]' icon={faInstagram} />
              <FontAwesomeIcon className='h-[22px] text-[#FF0000]' icon={faYoutube} />
            </div>
          </div>
          <div className='flex flex-wrap gap-24'>
            <div className='flex flex-col gap-4'>
              <b className='text-[20px]'>solution</b>
              <div className='flex flex-col gap-1 text-[14px]'>
                <span>Marketing</span>
                <span>Analysis</span>
                <span>Automation</span>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <b className='text-[20px]'>solution</b>
              <div className='flex flex-col gap-1 text-[14px]'>
                <span>Marketing</span>
                <span>Analysis</span>
                <span>Automation</span>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <b className='text-[20px]'>solution</b>
              <div className='flex flex-col gap-1 text-[14px]'>
                <span>Marketing</span>
                <span>Analysis</span>
                <span>Automation</span>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <b className='text-[20px]'>solution</b>
              <div className='flex flex-col gap-1 text-[14px]'>
                <span>Marketing</span>
                <span>Analysis</span>
                <span>Automation</span>
              </div>
            </div>
          </div>
        </footer>
      </div >
    </>
  )
}

export default memo(Layout);
