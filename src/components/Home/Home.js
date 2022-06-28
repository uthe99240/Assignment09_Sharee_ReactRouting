import React, { useState } from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
import image from '../../../src/images/tangail_sharee.jpeg';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const customerReview = reviews.slice(0, 3);
    let navigate = useNavigate();
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-2 gap-4 p-8'>
                <div className='pl-16 pt-10'>
                    <h2 className='text-6xl items-start flex font-extrabold'>YOUR NEXT SHAREE</h2>
                    <h2 className='text-6xl items-start flex font-extrabold text-red-600'>YOUR NEXT SHAREE</h2>
                    <p className='text-justify pt-4'><big>Tired of walking around in the crowded local market? Let’s get acquainted with the most splendid collection of this aristocratic clothing in Sharee</big></p>
                    <p className='text-justify pt-4'><big>Sharee is globally accepted as the symbol of elegance for authentic Bengali women. Not only that, because of the ever increasing demand among Bengali and Indian community, it’s popularity is getting magnificent impression over foreign folks. Besides, everything is getting digitalized. So, in order to facilitate people with this authentic fabric of highest quality, Sharee has initiated its journey.</big></p>
                    <button className='rounded-lg items-start flex text-xl my-4 py-4 px-8 bg-black text-white'>Live Demo</button>
                </div>
                <div>
                    <img className='h-90 w-80 ml-80' src={image} alt="" />
                </div>
            </div>
            <h2 className='text-3xl font-bold mt-4'>Customer Review(3)</h2>
            <div className='grid grid-cols-3 gap-5 mx-24'>
                {
                    customerReview.map(review => <CustomerReview
                        key={review._id} review={review}></CustomerReview>)
                }
            </div>
            <div>
                <button onClick={() => navigate(`/reviews`)} className='rounded-lg text-xl my-4 py-4 px-8 bg-black text-white'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;