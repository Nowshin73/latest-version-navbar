import React from 'react'

const Navbar = () => {
  return (
   <header 
   style={{background:'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 31.77%, rgba(0, 0, 0, 0.3) 81.77%, rgba(0, 0, 0, 0) 91.15%)',
    fontFamily: 'EuclidIgnited,sans-serif'
   }}
    className='absolute top-auto w-full z-5 
    text-white transition duration-300 ease-in-out 
   hover:bg-slate-50 hover:text-black'>
    <div className="header-top hidden text-xl mx-5 lg:flex flex-row items-center
     flex-nowrap h-14">
      <div className="ht-left z-2 ">

      </div>
    </div>
   </header>
  )
}

export default Navbar