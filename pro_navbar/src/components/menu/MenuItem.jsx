import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import SubMenu from '../sub_menu/SubMenu';
const MenuItem = ({ category }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  return (
    <>
      <li className='menu-item relative py-3 w-full text-xl text-black flex items-center cursor-pointer justify-between'
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
        <span className=''>{category.name}</span>
        <span> <BsChevronRight></BsChevronRight> </span>
      </li>
      {isSubMenuOpen ?
        <nav className='absolute top-0 visible z-5 bottom-auto h-[calc(100dvh - 5.7rem)]  
           block border-l-gray-200 opacity-100 pointer-events-auto 
           left-[min(48rem,32dvw)] w-[min(48rem,32dvw)] bg-white box-border overflow-visible scroll-smooth'>
          <ul className='relative z-5 max-h-[calc(100dvh-5.7rem)] w-[min(48rem,32dvw)] bg-white overflow-y-auto overflow-x-hidden pt-5 pb-[calc(5rem,0)]'>
            {isSubMenuOpen && category.sub.map((subItem, index) => (
              <SubMenu key={index} subItem={subItem}></SubMenu>
            ))}
          </ul>
        </nav>
        : <div className='hidden'></div>
      }
    </>
  )
}

export default MenuItem;