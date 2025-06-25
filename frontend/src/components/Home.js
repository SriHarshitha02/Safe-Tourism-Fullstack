/*import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // for any custom styles


function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-4">Welcome to the Safe Tourism Portal</h1>
      <p className="lead">Explore secure and verified destinations with trusted reviews.</p>

      <div className="mt-4">
        <Link to="/destinations" className="btn btn-primary btn-lg m-2">
          Explore Destinations
        </Link>
        <Link to="/register" className="btn btn-outline-secondary btn-lg m-2">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;*/


/*import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to Safe Tourism</h1>
      <p>Explore destinations safely and share your experiences.</p>
      <div className="home-buttons">
        <a href="/destinations">Explore Destinations</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default Home;*/

// src/components/Home.js
/*import React from 'react';
import './Home.css';
import tourismImage from '../assets/tourism.jpg'; // Add an image in assets folder

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={tourismImage} alt="Tourism" className="hero-img" />
        <div className="hero-text">
          <h1>Explore Safely with Us</h1>
          <p>Your ultimate tourism companion for secure and unforgettable travel experiences.</p>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="https://source.unsplash.com/300x200/?safe,travel" className="card-img-top" alt="Safe Travel" />
              <div className="card-body">
                <h5 className="card-title">Safety First</h5>
                <p className="card-text">Our system filters destinations based on security, giving you peace of mind.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="https://source.unsplash.com/300x200/?tourism,destination" className="card-img-top" alt="Explore" />
              <div className="card-body">
                <h5 className="card-title">Explore Easily</h5>
                <p className="card-text">Interactive maps and filters make it easy to find the perfect place.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card feature-card h-100">
              <img src="https://source.unsplash.com/300x200/?review,feedback" className="card-img-top" alt="Reviews" />
              <div className="card-body">
                <h5 className="card-title">Real Reviews</h5>
                <p className="card-text">Read feedback from real travelers to make informed decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;*/


import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

// Import images from assets
import safety from '../assets/safety.jpg';
import explore from '../assets/explore.jpg';
import reviews from '../assets/reviews.jpg';
import tourism from '../assets/tourism.jpg';


function Home() {
  return (
    <div className="home-container container mt-4">

      <h1 className="text-center mb-4">Welcome to Safe Tourism</h1>

      <div className="banner mb-5">
  <img src={tourism} alt="Tourism Banner" className="img-fluid w-100 banner-img" />
  <div className="banner-text">
    <h2>Plan Your Trip Smartly & Safely</h2>
    <p>Discover, Explore, and Stay Safe</p>
  </div>
</div>

      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={safety} className="card-img-top" alt="Safety First" />
            <div className="card-body">
              <h5 className="card-title">Safety First</h5>
              <p className="card-text">Explore destinations with verified safety measures.</p>
              <Link to="/explore" className="btn btn-primary">Explore</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={explore} className="card-img-top" alt="Explore Easily" />
            <div className="card-body">
              <h5 className="card-title">Explore Easily</h5>
              <p className="card-text">Find top tourist spots based on your interests.</p>
              <Link to="/destinations" className="btn btn-primary">See Places</Link>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={reviews} className="card-img-top" alt="Real Reviews" />
            <div className="card-body">
              <h5 className="card-title">Real Reviews</h5>
              <p className="card-text">Read real reviews from other travelers.</p>
              <Link to="/reviews" className="btn btn-primary">Check Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

