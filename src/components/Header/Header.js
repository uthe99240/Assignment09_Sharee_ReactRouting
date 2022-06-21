import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='bg-yellow-400 h-20'>
            <nav className=' pt-6 font-semibold'>
                <Link className='p-8 text-2xl' to="/home">HOME</Link>
                <Link className='p-8 text-2xl' to="/reviews">REVIEWS</Link>
                <Link className='p-8 text-2xl' to="/dashboard">DASHBOARD</Link>
                <Link className='p-8 text-2xl' to="/blogs">BLOGS</Link>
                <Link className='p-8 text-2xl' to="/about">ABOUT</Link>
            </nav>
            
        </div>
    );
};

export default Header;