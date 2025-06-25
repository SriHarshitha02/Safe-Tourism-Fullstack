


// src/App.js
/*import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import DestinationDetail from "./components/DestinationDetail";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/


/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Home.css';


function App() {
  return (
    <div>
      {/* Navbar */
      /*nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Safe Tourism</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */
      /*<header className="hero-section text-white text-center d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Explore Safely, Travel Freely</h1>
          <p>Your trusted portal for smart & safe tourism experiences.</p>
          <a href="/destinations" className="btn btn-warning mt-3">Explore Destinations</a>
        </div>
      </header>

      {/* Featured Destinations */
      /*<div className="container my-5">
        <h2 className="text-center mb-4">Featured Destinations</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img src="https://source.unsplash.com/400x250/?beach" className="card-img-top" alt="Beach" />
              <div className="card-body">
                <h5 className="card-title">Sunny Beach</h5>
                <p className="card-text">Enjoy sun, sand, and safety with our top beach picks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img src="https://source.unsplash.com/400x250/?mountain" className="card-img-top" alt="Mountains" />
              <div className="card-body">
                <h5 className="card-title">Mountain Escapes</h5>
                <p className="card-text">Breathe fresh air and explore the serene peaks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img src="https://source.unsplash.com/400x250/?city,travel" className="card-img-top" alt="City" />
              <div className="card-body">
                <h5 className="card-title">Urban Adventures</h5>
                <p className="card-text">Discover the best of city life safely and smartly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */
      /*<footer className="bg-dark text-white text-center py-3">
        &copy; 2025 Safe Tourism. All rights reserved.
      </footer>
    </div>
  );
}

export default App;*/


// src/App.js
/*import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import DestinationList from "./components/DestinationList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">Safe Tourism</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/

// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import DestinationList from "./components/DestinationList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DestinationDetail from "./components/DestinationDetail";
import Explore from "./components/Explore";
import CheckReviews from "./components/CheckReviews";
import Login from "./components/Login";
import Navbar from "./components/Navbar"; // adjust path if needed

// Inside Routes:



function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">Safe Tourism</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/destinations">Destinations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/reviews" element={<CheckReviews />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </div>
    </Router>
  );
}
export default App;

//<div className="container mt-4" ></div>//
