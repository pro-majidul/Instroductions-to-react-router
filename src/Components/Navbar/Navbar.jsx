import React from 'react';

const Navbar = ({route}) => {
    return (
        <div className='mr-10 mt-3'>
            <li> <a href={route.path}>{route.name}</a></li>
        </div>
    );
};

export default Navbar;