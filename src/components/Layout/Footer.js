import React from 'react';
import logo from '../../Images/Sitelogo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
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
    </>
  )
}

export default Footer
