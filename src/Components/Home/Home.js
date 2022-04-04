import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hook/useData/useData';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import "./Home.css"
const Home = () => {
    const [reviews] = useData()
    return (
        <div>
            <div className="row container mx-5">
                <div className="col-md-6 margin-top ">
                    <h2 className="header-one justify-start d-flex">The Best Laptop</h2>
                    <h2 className="header-two justify-start d-flex" >Your Next Laptop</h2>
                    <p className="home-details justify-start d-flex mx-0">This is the best palce to buy laptops. It has the best seller of laptops, and this site has a record for being the best Laptop website in the world!</p>
                    <button className="btn btn-primary d-flex align-start">Live Demo</button>
                </div>
                <div className="col-md-6 me-0">
                    <img src="https://p3-ofp.static.pub/fes/cms/2021/07/22/icysl39azuqnz4yrv7wc9zopwx8a45492484.png" alt="" className="img-fluid"></img>
                </div>
            </div>
            <div className="home-reviews mt-5 container">
                <h2>Customers Says</h2>
                <div className="row">
                    {
                        reviews.slice(0, 3).map(review => <ReviewsCard key={review.id} review={review}></ReviewsCard>)
                    }
                </div>
                <Link to="/reviews" className="btn btn-primary">Show more Reviews</Link>
            </div>
        </div>
    );
};

export default Home;