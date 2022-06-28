import React from 'react';
import useReviews from '../../hooks/useReviews';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';

const ReviewAll = () => {
    const [reviews, setReviews] = useReviews();
    const customerReview = [...reviews];
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3 gap-5 m-10'>
                {
                    customerReview.map(review => <CustomerReview
                        key={review._id} review={review}></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default ReviewAll;