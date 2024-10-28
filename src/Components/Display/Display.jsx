import React from 'react';
import Navbar from '../Navbar/Navbar';
import { IoMenu } from "react-icons/io5";
const Display = () => {
    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/users/:id', name: 'UserProfile' },
        { path: '/contact', name: 'Contact' },
        { path: '*', name: 'NotFound' }
    ];


    return (
        <div className=' w-11/12 mx-auto p-5 bg-slate-50'>
            <ul className='md:flex items-center bg-orange-50'>
            <IoMenu />
            {
                routes.map ( (route , index) => <Navbar  key={index} route={route}></Navbar>)
            }
            </ul>
          
        </div>
    );
};

export default Display;