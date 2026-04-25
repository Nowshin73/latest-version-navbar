import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Navbar = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 31.77%, rgba(0, 0, 0, 0.3) 81.77%, rgba(0, 0, 0, 0) 91.15%)',
        fontFamily: 'EuclidIgnited,sans-serif'
      }}
      className='absolute top-auto w-full z-5 
            text-white transition duration-300 ease-in-out 
          hover:bg-slate-50 hover:text-black'>
      <div className="header-top hidden text-sm mx-5 lg:flex flex-row items-center
          flex-nowrap h-14">
        <div className="ht-left z-2 inline-flex flex-1 whitespace-nowrap 
        items-center text-left">
          <div className="ht-left-store-location">
            <a href='' className='inline-flex gap-2 items-center cursor-pointer text-sm vertical-align-middle'>
              <span><IoLocationOutline /></span>
              <span>Stores</span>
            </a>
          </div>
        </div>
        <div className="ht-center block text-center">
          <div></div>
        </div>
        <div className="ht-right z-2 inline-flex flex-1 whitespace-nowrap 
        items-center text-right justify-end">
          <div className="ht-right-actions px-6">
            <a href="" className='inline-flex items-center gap-2 cursor-pointer vertical-align-middle'>
              <span><MdPersonOutline /></span>
              <span>Login</span>
            </a>
          </div>
       
          <div className="ht-right-cartlist pl-14 mt-[1.1rem]  ">
            <a href="" className='inline-block whitespace-nowrap tracking-tight box-border text-right items-center cursor-pointer vertical-align-middle'>
              <span className='cart-logo w-6 '><HiOutlineShoppingBag /></span>
              <span className='relative left-[0.6rem] bottom-2 text-[0.7rem] h-[.9rem] w-[.9rem] leading-[0.9rem] bg-white text-black flex justify-center items-end rounded-[50%]'>0</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar