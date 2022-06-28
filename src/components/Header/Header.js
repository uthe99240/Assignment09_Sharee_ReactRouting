import React from 'react';
import { Link } from "react-router-dom";
import Home from '../Home/Home';


const Header = () => {
    return (
        <div>
            <nav className=' py-6 font-semibold bg-gray-500'>
                <Link className='p-8 text-2xl underline underline-offset-8 focus:text-white' to="/home">HOME</Link>
                <Link className='p-8 text-2xl underline underline-offset-8 focus:text-white' to="/reviews">REVIEWS</Link>
                <Link className='p-8 text-2xl underline underline-offset-8 focus:text-white' to="/dashboard">DASHBOARD</Link>
                <Link className='p-8 text-2xl underline underline-offset-8 focus:text-white' to="/blogs">BLOGS</Link>
            </nav>
        </div>
    );
};

export default Header;