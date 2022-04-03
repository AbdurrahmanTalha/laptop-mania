import React from 'react';
import "./ReviewsCard.css"
const ReviewsCard = (props) => {
    const { picture, name, comment } = props.review;
    return (
        <div className="col-md-4">
            <img src={picture} alt="" className="review-img rounded-circle"></img>
            <div className="review-details">
                <h2>{name}</h2>
                <p className="review-desc" title={comment}>{comment.slice(0, 50)}..</p>
                <p></p>
            </div>
        </div>
    );
};

export default ReviewsCard;