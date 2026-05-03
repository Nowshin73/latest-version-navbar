import React from 'react'
import { BsChevronRight } from "react-icons/bs";
const MenuItem = ({ category }) => {
  return (
     <li className='menu-item relative py-5 w-full text-xl text-black flex items-center cursor-pointer justify-between'>
            <span className=''>{category.name}</span>
            <span> <BsChevronRight></BsChevronRight> </span>
        </li>
  )
}

export default MenuItem;