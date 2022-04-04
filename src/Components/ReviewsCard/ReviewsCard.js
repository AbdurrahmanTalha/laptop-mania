import React from 'react';
import "./ReviewsCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// Reviews Card Design
const ReviewsCard = (props) => {
    const { picture, name, comment, rating } = props.review;
    return (
        <div className="col-md-4">
            <img src={picture} alt="" className="review-img rounded-circle"></img>
            <div className="review-details">
                <h2>{name}</h2>
                <p className="review-desc" title={comment}>{comment.slice(0, 50)}..</p>
                <p>Rating: <FontAwesomeIcon icon={faStar} className="rating-icon"></FontAwesomeIcon> {rating}</p>
            </div>
        </div>
    );
};

export default ReviewsCard;