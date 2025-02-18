import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../Store/Slices/DashboardSlice';

function Dashboard() {

  const blogData = useSelector((state) => state.BlogItem);
  const dispatch = useDispatch();
  const formData = useRef();
  const [editBlog, setEditBlog] = useState(false);


  function handleSubmit(e) {

    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const todaydate = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

    e.preventDefault();
    const form = formData.current;
    const file = form['image'].files?.[0];
    const addingblog = {
      blogTitle: form['title'].value,
      blogdetail: form['blog-detail'].value,
      image: file ? URL.createObjectURL(file) : null,
      date: todaydate,
      isExpanded: false
    }
    dispatch(action.setBlogItem(addingblog))
    form['title'].value = '';
    form['blog-detail'].value = '';
    form['image'].value = null;
  }


  function handleDelete(index) {
    dispatch(action.deleteBlog({ index }))
  }

  const editBlogIndex = useRef();

  function handleEdit(index) {
    setEditBlog(true);
    blogData.forEach((val, ind) => {
      const form = formData.current;
      if (ind === index) {
        form['title'].value = val.blogTitle;
        form['blog-detail'].value = val.blogdetail;
        editBlogIndex.current = index;
      }
    })
  }


  function handleEditBlog() {
    const form = formData.current;
    const file = form['image'].files?.[0];

    const editValue = {
      index: editBlogIndex.current,
      blogTitle: form['title'].value,
      blogdetail: form['blog-detail'].value,
      image: file ? URL.createObjectURL(file) : blogData[editBlogIndex.current].image
    }
    dispatch(action.editBlog(editValue));

    form['title'].value = '';
    form['blog-detail'].value = '';
    form['image'].value = null;

    setEditBlog(false);
  }

  function handleExpanding(index) {
    dispatch(action.handleExpanding({ index }))
  }

  return (
    <>
      {console.log('Dashboard rendered')}

      <div className='md:min-h-[100vh] px-[50px] '>
        {/* <h1 className='justify-self-center text-[24px] mt-[10px]'>Dashboard</h1> */}
        <div className='md:items-start items-center flex flex-col md:flex-row justify-between mt-[30px] md:gap-36 gap-20'>

          <div className='md:hidden items-center flex flex-col gap-5 w-[300px]'>
            <h1 className='text-[22px] font-medium self-start  '>Add New Blog</h1>
            <form className=' flex flex-col gap-3 items-stretch' action="" onSubmit={(e) => handleSubmit(e)} ref={formData}>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">Title</label>
                <input className='h-[30px] text-[14px] p-[5px] border-[1px] border-solid border-black' type="text" name='title' />
                <label htmlFor="">Description</label>
                <textarea className='h-[50px] text-[14px] p-[5px] border-[1px] border-solid border-black' type="text" name='blog-detail' />
                <label htmlFor="">Upload Image</label>
                <input type="file" name="image" />
              </div>
              <div className='flex justify-center '>
                {
                  editBlog ?
                    (<button className='font-medium w-[200px] p-[10px] mt-[10px] bg-[#1b53fff0] text-black w-full' onClick={() => handleEditBlog()} >Edit</button>)
                    :
                    (<input className='font-medium w-[200px] p-[10px] mt-[10px] bg-[#1b53fff0] text-black w-full' type="submit" value="Add" />)
                }
              </div>
            </form>
          </div>

          <div className='flex flex-col items-start'>
            <div className='grid grid-cols-1  2xl:grid-cols-2 gap-10'>
              {blogData.map((value, index) => {
                return <div className='w-fit bg-[#ffffffe6] p-[30px] bg-white flex flex-col md:flex-row gap-6 content-start '>
                  <img src={value.image} alt="" srcset="" className='object-contain min-w-[200px] h-[200px]' />
                  <div className=' flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                      <span>{value?.date}</span>
                      <h1 className='text-[22px] font-semibold'>{value?.blogTitle}</h1>
                      {/* 'text-[14px] break-words ' */}
                      <p className={value?.isExpanded ? ('text-[14px] break-words h-full') : ('text-[14px] break-words h-[20px] overflow-hidden')}>{value?.blogdetail} </p><span className='font-bold cursor-pointer' onClick={() => handleExpanding(index)}>{value?.isExpanded ? 'Read less' : 'Read more'}</span>
                    </div>
                    <div className='flex flex-row gap-1'>
                      <button className=' py-[2px] px-[4px]' onClick={() => handleDelete(index)}><FontAwesomeIcon icon={faTrash} /></button>
                      <button className=' py-[2px] px-[15px] ' onClick={() => handleEdit(index)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>

          <div className='hidden md:flex flex-col gap-5 w-[300px]'>
            <h1 className='text-[22px] font-medium '>Add New Blog</h1>
            <form className=' flex flex-col gap-3 items-stretch' action="" onSubmit={(e) => handleSubmit(e)} ref={formData}>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">Title</label>
                <input className='h-[30px] text-[14px] p-[5px] border-[1px] border-solid border-black' type="text" name='title' />
                <label htmlFor="">Description</label>
                <textarea className='h-[50px] text-[14px] p-[5px] border-[1px] border-solid border-black' type="text" name='blog-detail' />
                <label htmlFor="">Upload Image</label>
                <input type="file" name="image" />
              </div>
              <div className='flex justify-center '>
                {
                  editBlog ?
                    (<button className='font-medium w-[200px] p-[10px] mt-[10px] bg-[#1b53fff0] text-black w-full' onClick={() => handleEditBlog()} >Edit</button>)
                    :
                    (<input className='font-medium w-[200px] p-[10px] mt-[10px] bg-[#1b53fff0] text-black w-full' type="submit" value="Add" />)
                }
              </div>
            </form>
          </div>

        </div>
      </div >
    </>
  )
}

export default Dashboard
