import React from 'react';
import { NavLink } from 'react-router-dom';
import {links} from '../Configs/sidebar';

const Sidebar = ( ) => {
  
  
  return (
    <>
      <div className=' transition-transform'>Logo dsb.</div>
      <hr></hr>
      <div className='pb-10 ml-3 bg-main-bg md:overflow-hidden overflow-auto md:hover:overflow-auto'>
        <div className='pt-5 h-screen'>
          {links.map((item) => (
            <div key={item.label}>
              <NavLink
              key={item.label}
              to={`${item.href}`} 
              className='text-gray-400 m-3 mt-4 flex hover:text-black'>
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