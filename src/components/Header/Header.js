import React from 'react';
import { Link } from "react-router-dom";
import Home from '../Home/Home';


const Header = () => {
    return (
        <div>
            <nav className=' py-6 font-semibold bg-gray-500'>
                <Link className='p-8 text-2xl ' to="/home">HOME</Link>
                <Link className='p-8 text-2xl' to="/reviews">REVIEWS</Link>
                <Link className='p-8 text-2xl' to="/dashboard">DASHBOARD</Link>
                <Link className='p-8 text-2xl' to="/blogs">BLOGS</Link>
                <Link className='p-8 text-2xl' to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;