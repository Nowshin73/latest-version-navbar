import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import logo from './assets/nexlogo.png'
import MenuItem from './components/menu/MenuItem';

const Navbar = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const categories = [
    {
      id: 1,
      name: "Electronics",
      sub: ["Mobile Phones", "Laptops", "Accessories"]
    },
    {
      id: 2,
      name: "Fashion",
      sub: ["Men", "Women", "Shoes"]
    },
    {
      id: 3,
      name: "Home",
      sub: ["Furniture", "Kitchen", "Decor"]
    },
    {
      id: 4,
      name: "Books",
      sub: ["Fiction", "Non-Fiction", "Textbooks"]
    },
    {
      id: 5,
      name: "Beauty",
      sub: ["Skincare", "Makeup", "Fragrance"]
    }
  ];
  return (
    <header
      style={{

        fontFamily: 'apple-ui,times new roman, sans-serif'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`absolute top-auto w-full z-2 bg-transparent
            text-white transition-all duration-300 ease-in-out hover:text-black
          ${isHovered ? 'bg-white' : ''}`}>
      <div className={`absolute top-0 -bottom-14  w-full h-[calc(100% + 5.5rem)] z-1 pointer-events-none ${isHovered ? 'hidden' : 'block'}`}
        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 31.77%, rgba(0, 0, 0, 0.3) 81.77%, rgba(0, 0, 0, 0) 91.15%)' }}>

      </div>
      <div className="header-top z-2 hidden text-sm mx-5 lg:flex flex-row items-center
          flex-nowrap h-10">
        <div className="ht-left z-2 inline-flex flex-1 whitespace-nowrap 
        items-center text-left">
          <div className="ht-left-store-location">
            <a href='#stores' className='inline-flex gap-2 items-center cursor-pointer text-sm '>
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
            <a href="" className='inline-flex items-center gap-2 cursor-pointer '>
              <span><MdPersonOutline /></span>
              <span>Login</span>
            </a>
          </div>

          <div className="ht-right-cartlist pl-14 mt-[1.1rem]  ">
            <a href="" className='inline-block whitespace-nowrap tracking-tight box-border text-right items-center cursor-pointer '>
              <span className='cart-logo w-6 '><HiOutlineShoppingBag /></span>
              <span className={`relative left-[0.6rem] bottom-2 text-[0.7rem] h-[.9rem] w-[.9rem] leading-[0.9rem]  flex justify-center items-end rounded-[50%] ${isHovered ? 'bg-black text-white' : 'bg-white text-black'}`}>0</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header-bottom-hamburger z-2">
        <div id='main-nav-1' className={`header-main-nav max-w-200 text-black ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className='fixed top-0 left-0 w-[min(48rem,32dvw)] 
          overflow-x-hidden overflow-y-auto max-w-none 
           z-4 bg-white h-dvh scroll-smooth'>
            {/* top section */}
            <div className="header-main-nav-top box-border sticky top-0 
             w-full flex items-center justify-between p-5
             max-w-none z-5 bg-white transition-none 
              border-b border-gray-200 overflow-hidden">
              <a href="" className='js-close ml-6 h-full inline-block decoration-0 items-center '>
                <span className='close-icon relative text-2xl'> <TfiClose /> </span>
              </a>
            </div>
            <ul className="header-main-nav-middle w-full px-7 pt-3 overflow-visible min-h-[100dvh-30.5rem] transform-none">
              {categories.map((cat, index) =>
                (<MenuItem key={cat.id} category={cat}></MenuItem>)
              )
              }
            </ul>
          </nav>
        </div>
        <div className="header-compressed relative z-2  flex  h-20 flex-row items-center justify-between py-5 px-5 w-full">
          <div onClick={() => setIsMenuOpen(true)} className="burger-btn cursor-pointer text-xl inline-flex items-center gap-5 ">
            <a className='menu-link' href="#main-nav-1">
              <span className='menu-icon text-4xl' ><RxHamburgerMenu /> </span>
            </a>
            <span>Menu</span>
          </div>
          <div className="logo relative -ml-12 inline-flex items-center  gap-4">
            <img src={logo} alt="logo" className='w-28 h-28' />
            <span className='text-7xl font-stretch-100% '>Nexecom</span>
          </div>
          <div className="search-icon relative flex flex-row items-center ">
            <div className='mr-4 flex items-center'>
              <a href="" className='inline-flex relative items-center '>
                <span className='inline-block relative '>
                  <TfiSearch className='text-3xl' />
                </span>
              </a>
            </div>
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