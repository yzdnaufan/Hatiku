import {FaDesktop, FaUserCircle, FaDatabase} from 'react-icons/fa';


export const links = [
    {
        label: 'Home',
        href: '/admin/',
        icon : <FaDesktop/>
    },
    {
        label: 'Dataset Management',
        href: '/admin/datasets',
        icon: <FaDatabase/>
    },
    {
        label: 'User Management',
        href: '/admin/users',
        icon : <FaUserCircle/>
    },
]
