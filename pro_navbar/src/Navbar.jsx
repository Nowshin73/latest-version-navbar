import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from './assets/nexlogo.png'
const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <header
      style={{
       
        fontFamily: 'EuclidIgnited,sans-serif'
      }}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      className={`absolute top-auto w-full z-2 bg-transparent
            text-white transition-all duration-300 ease-in-out hover:text-black
          ${isHovered ? 'bg-white' : ''}`}>
            <div className={`absolute top-0 -bottom-14  w-full h-[calc(100% + 5.5rem)] z-1 pointer-events-none ${isHovered ? 'hidden' : 'block'}`}
            style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 31.77%, rgba(0, 0, 0, 0.3) 81.77%, rgba(0, 0, 0, 0) 91.15%)'}}>

            </div>
      <div className="header-top z-2 hidden text-sm mx-5 lg:flex flex-row items-center
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
      <div className="header-bottom-hamburger z-2">
        <div className="header-main-nav hidden">

        </div>
        <div className="header-compressed relative z-2 mt-3 flex  h-32 flex-row items-center justify-between py-6 px-14 w-full">
          <div className="burger-btn cursor-pointer text-xl inline-flex items-center gap-5 vertical-middle"> 
            <a className='menu-link' href="">
              <span className='menu-icon text-4xl' ><RxHamburgerMenu/> </span>
            </a>
             <span>Menu</span>
          </div>
          <div className="logo relative inline-flex items-center ">
            <img src={logo} alt="logo" className='w-20 h-20' />
            <span>Ecommerce</span>
          </div>
          <div className="search">
            <input type="text" placeholder='Search for products, brands and more' className='search-input w-[20rem] h-10 rounded-md text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
          </div>
        </div>
        <div className="header-search-layer">

        </div>
        <div className="header-nav-overlay"></div>
      </div>
    </header>
  )
}

export default Navbar