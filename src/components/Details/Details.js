import React from 'react';
import image from '../../../src/images/tangail_sharee.jpeg';

const Details = () => {
    return (
        <div className='bg-gray-400 p-8'>
            <div className='grid grid-cols-2 gap-4'>
                <div className='pl-16 pt-10'>
                    <h2 className='text-6xl items-start flex font-extrabold'>YOUR NEXT SHAREE</h2>
                    <h2 className='text-6xl items-start flex font-extrabold text-white'>YOUR NEXT SHAREE</h2>
                    <p className='text-justify pt-4'><big>Tired of walking around in the crowded local market? Let’s get acquainted with the most splendid collection of this aristocratic clothing in Sharee</big></p>
                    <p className='text-justify pt-4'><big>Sharee is globally accepted as the symbol of elegance for authentic Bengali women. Not only that, because of the ever increasing demand among Bengali and Indian community, it’s popularity is getting magnificent impression over foreign folks. Besides, everything is getting digitalized. So, in order to facilitate people with this authentic fabric of highest quality, Sharee has initiated its journey.</big></p>
                    <button className='rounded-lg items-start flex text-xl my-4 py-4 px-8 bg-black text-white'>Live Demo</button>
                </div>
                <div>
                    <img className='h-90 w-80 ml-80' src={image} alt="" />
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-10'>Customer Review(3)</h2>
        </div>
    );
};

export default Details;