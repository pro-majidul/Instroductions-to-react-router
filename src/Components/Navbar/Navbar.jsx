import React, { useState } from 'react';
import Link from './Link';
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/users/:id', name: 'UserProfile' },
        { path: '/contact', name: 'Contact' },
        { path: '*', name: 'NotFound' }
    ];

    return (
        <nav className='bg-gray-500 my-5 px-5'>
            <div className='flex items-center justify-between'>
                <div className='flex md:gap-4 items-center'>

                    <div onClick={() => setOpen(!open)} className='md:hidden  text-2xl p-5 font-bold'>
                        {
                            open === true ? <RxCross2 ></RxCross2> : <RiMenu2Fill className=''></RiMenu2Fill>
                        }

                    </div>
                    <div className='h-10 flex items-center gap-5'>

                    <img className='h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZnJZTZPCTGcOIaqjiyv9MY2KNIR8F6DX5Q&s" alt="" /> <p className='font-bold text-5xl text-orange-100'>GYM!!</p>
                    </div>
                </div>
                <ul className={`md:flex duration-1000 ${open ? 'top-20' : '-top-96'}  py-5 bg-orange-50 md:bg-gray-500 absolute md:static`}>
                    {
                        routes.map((route, index) => <Link key={index} route={route}></Link>)
                    }
                </ul>
                <button className='btn'>About </button>
            </div>
        </nav>
    );
};

export default Navbar;