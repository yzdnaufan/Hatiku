import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';
import {links} from '../Configs/sidebar'

const Sidebar = ( ) => {
  
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  
  return (
    <>
      <div className=' transition-transform flex justify-between items-center'>
        <Link to='/admin' className=' font-extrabold items-center m-3 mt-4  '>
          <span className=''>Hatiku</span>
        </Link>
      </div>
      <hr></hr>
      <div className='pb-10 ml-3  md:overflow-hidden overflow-auto md:hover:overflow-auto'>
        <div className='pt-5 h-screen'>
          {links.map((item) => (
            <div key={item.label} className=''>
              <NavLink
              key={item.label}
              to={`${item.href}`} 
              className='text-gray-600 m-3 mt-4 flex gap-5 items-center p-3 hover:text-black hover:bg-slate-300 hover:rounded-xl '>
                {item.icon}
                <span className="capitalize pl-2">{item.label}</span>
              </NavLink>
            </div>
          ))}
        </div>

      </div>
    </>
    
  )
}

export default Sidebar