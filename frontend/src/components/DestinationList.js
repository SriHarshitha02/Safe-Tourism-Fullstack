

// src/components/DestinationList.js
/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + 'destinations/')
      .then(res => setDestinations(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Explore Tourist Destinations</h2>
      <div className="row">
        {destinations.map(dest => (
          <div key={dest.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={dest.image || 'https://via.placeholder.com/300x200'}
                className="card-img-top"
                alt={dest.name}
              />
              <div className="card-body">
                <h5 className="card-title">{dest.name}</h5>
                <p className="card-text">{dest.description.slice(0, 100)}...</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-outline-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'; // Optional: use same CSS for now

function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}destinations/`)
      .then(response => setDestinations(response.data))
      .catch(error => console.error("Error fetching destinations:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore Destinations</h2>
      <div className="row">
        {destinations.map(destination => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <div className="card h-100">
              <img
                src={destination.image || "https://via.placeholder.com/300"}
                className="card-img-top"
                alt={destination.name}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;*/

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DestinationList.css";

function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}destinations/`)
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Explore Destinations</h2>
      <div className="row">
        {destinations.map((dest) => (
          <div className="col-md-4 mb-4" key={dest.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={dest.image_url}
                alt={dest.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{dest.name}</h5>
                <p className="card-text">{dest.location}</p>
                <Link
                  to={`/destinations/${dest.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;*/

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DestinationList.css'; // Make sure this file exists
import { Link } from 'react-router-dom';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}destinations/`)
      .then(response => {
        setDestinations(response.data);
      })
      .catch(error => {
        console.error('Error fetching destinations:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Tourist Destinations</h2>
      <div className="row">
        {destinations.map(destination => (
          <div className="col-md-4 mb-4" key={destination.id}>
            <div className="card h-100 shadow">
              <img 
                src={destination.image_url || "https://via.placeholder.com/300x200"} 
                className="card-img-top" 
                alt={destination.name} 
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <p className="card-text">{destination.description.slice(0, 100)}...</p>
                <Link to={`/destinations/${destination.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {destinations.length === 0 && (
          <p className="text-center w-100">No destinations available.</p>
        )}
      </div>
    </div>
  );
};

export default DestinationList;*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DestinationList.css";

function DestinationList() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/destinations/")
      .then(res => setDestinations(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 className="my-3">Tourist Destinations</h2>
      <div className="row">
        {destinations.map(dest => (
          <div className="col-md-4 mb-4" key={dest.id}>
            <div className="card h-100">
              <img src={dest.image} className="card-img-top" alt={dest.name}
               />
              <div className="card-body">
                <h5 className="card-title">{dest.name}</h5>
                <p className="card-text">{dest.description}</p>
                
                <a href={dest.map_link} target="_blank" rel="noopener noreferrer" 
                className="btn btn-primary">View on Map</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;




