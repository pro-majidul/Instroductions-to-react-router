import React, { useState } from 'react';
import Link from './Link';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
    const [ open , setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/users/:id', name: 'UserProfile' },
        { path: '/contact', name: 'Contact' },
        { path: '*', name: 'NotFound' }
    ];

    return (
        <nav className='bg-gray-500 my-5'>
            <div onClick={() => setOpen(!open)} className='md:hidden  text-2xl p-5 font-bold'>
                {
                    open === true ? <RxCross2 ></RxCross2> :  <RiMenu2Fill className=''></RiMenu2Fill> 
                }
           
            </div>
            <ul className={`md:flex duration-1000 ${open ? 'top-16' : '-top-96'}  py-5 bg-orange-50 absolute md:static`}>
                {
                    routes.map( (route ,index) => <Link key={index} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;