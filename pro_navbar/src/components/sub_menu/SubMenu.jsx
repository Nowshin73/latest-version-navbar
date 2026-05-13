import React from 'react'

const SubMenu = ({ subItem }) => {
  return (
   
        <li className="submenu-list px-8 w-full flex items-center justify-between">
          <div className='py-3 text-xl text-black flex items-center cursor-pointer justify-between w-full h-20'>
            <a className='relative text-left' href="">
              <span>{subItem}</span>
            </a>
          </div>
        </li>
      
  )
}

export default SubMenu