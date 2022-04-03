import React, { useEffect, useState } from 'react';
import useData from '../../Hook/useData/useData';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import "./Revies.css"
const Reviws = () => {
    const [reviews, setReviews] = useData()

    return (
        <div>
            <div className="home-reviews mt-5">
                <h2>What Our Customers Says</h2>
                <div className="row container d-flex justify-center align-middle margin-right">
                    {
                        reviews.map(review => <ReviewsCard  key={review.id} review={review}></ReviewsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviws;