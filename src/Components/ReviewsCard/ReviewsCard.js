import React from 'react';
import "./ReviewsCard.css"
const ReviewsCard = (props) => {
    const { picture, name } = props.review;
    return (
        <div>
            <img src={picture} alt="" className="review-img"></img>
            <div className="review-details">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default ReviewsCard;