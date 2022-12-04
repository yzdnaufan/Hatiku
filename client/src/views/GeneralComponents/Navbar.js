import React from 'react'

const Navbar = () => {
  return (

  
    <div >
        {/* logo */}
        <div>
            Hatiku
        </div>

        {/* Content list */}
        <div className='bg-[#555555] h-screen'>
            <ul className='px-3 list-item flex-nowrap py-6 font-sans font-semibold'>
                <li className=''>Dataset</li>
                <li>Member Management</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar