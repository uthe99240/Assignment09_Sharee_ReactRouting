import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomerReview = (props) => {
    const {name , about, rating, img} = props.review;
    return (
        <div className='rounded-lg bg-gray-300 my-5'>
            <img className='rounded-full h-28 w-28 mx-40 my-5' src={img} alt="" />
            <h2 className='mb-2 px-2'>{about}</h2>
            <h1 className='text-black font-bold text-2xl'>{name}</h1>
            <h6 className='mb-4'>{rating >=4 ? <span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon  icon={faStar}/><FontAwesomeIcon icon={faStar}/></span> : <span><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/><FontAwesomeIcon icon={faStar}/></span> }</h6>
        </div>
    );
};

export default CustomerReview;