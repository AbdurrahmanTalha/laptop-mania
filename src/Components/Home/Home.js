import React, { useEffect, useState } from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import "./Home.css"
const Home = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json') 
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div>
            <div className="row container mx-5">
                <div className="col-md-6 margin-top ">
                    <h2 className="header-one justify-start d-flex">The Best Laptop</h2>
                    <h2 className="header-two justify-start d-flex" >Your Next Laptop</h2>
                    <p className="home-details justify-start d-flex mx-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus nobis at assumenda dignissimos voluptas, qui quidem enim vel nostrum, omnis ipsum molestiae fuga dolorum impedit. Maxime quisquam consequatur sint quia?</p>
                    <button className="btn btn-primary d-flex align-start">Live Demo</button>
                </div>
                <div className="col-md-6 me-0">
                    <img src="https://p3-ofp.static.pub/fes/cms/2021/07/22/icysl39azuqnz4yrv7wc9zopwx8a45492484.png" alt="" className="img-fluid"></img>
                </div>
            </div>
            <div className="home-reviews mt-5">
                <h2>What Our Customers Says</h2>
                {
                    reviews.slice(0, 3).map(review => <ReviewsCard key={review.id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default Home;