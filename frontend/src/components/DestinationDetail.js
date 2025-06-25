/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    api.get(`/destinations/${id}/`)
      .then(res => setDestination(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div>
      <h2>{destination.name}</h2>
      <p>{destination.description}</p>
      <p>Location: {destination.location}</p>
    </div>
  );
};

export default DestinationDetail;
*/

/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}destinations/${id}/`)
      .then(res => setDestination(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!destination) return <div>Loading...</div>;

  return (
    <div className="container mt-4">
      <h2>{destination.name}</h2>
      <img src={destination.image} alt={destination.name} className="img-fluid mb-3" />
      <p>{destination.description}</p>
      <p><strong>Location:</strong> {destination.location}</p>
    </div>
  );
}

export default DestinationDetail;*/

/*import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './DestinationDetail.css';

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}destinations/${id}/`)
      .then(response => setDestination(response.data))
      .catch(error => console.error('Error fetching destination:', error));
  }, [id]);

  if (!destination) {
    return <div className="text-center mt-5">Loading destination details...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{destination.name}</h2>
      <div className="card">
        <img 
          src={destination.image || 'https://source.unsplash.com/800x400/?tourism'} 
          className="card-img-top" 
          alt={destination.name} 
        />
        <div className="card-body">
          <p className="card-text">{destination.description}</p>
          <p><strong>Location:</strong> {destination.location}</p>
          <p><strong>Rating:</strong> {destination.rating}</p>
          {/* Future: Add review, favorite buttons here */
        /*</div>
      </div>
    </div>
  );
}

export default DestinationDetail;*/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DestinationDetail.css";

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}destinations/${id}/`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!destination) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container destination-detail mt-5">
      <div className="card shadow-lg">
        <img
          src={destination.image_url}
          alt={destination.name}
          className="card-img-top detail-image"
        />
        <div className="card-body">
          <h2 className="card-title text-primary">{destination.name}</h2>
          <p className="card-text">{destination.description}</p>
          <p><strong>Location:</strong> {destination.location}</p>
          <p><strong>Category:</strong> {destination.category}</p>
          <p><strong>Safety Rating:</strong> ⭐⭐⭐⭐⭐ {destination.safety_rating}</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;

