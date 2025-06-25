import React, { useState } from "react";
import "./CheckReviews.css";

const CheckReviews = () => {
  const [reviews, setReviews] = useState([
    { name: "Anjali", rating: 5, comment: "Beautiful place, very safe!" },
    { name: "Ravi", rating: 4, comment: "Good experience but food was costly." },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.rating || !formData.comment) return;
    setReviews([...reviews, formData]);
    setFormData({ name: "", rating: "", comment: "" });
  };

  return (
    <div className="reviews-container">
      <h1>Check Reviews</h1>

      <div className="reviews-list">
        {reviews.map((rev, index) => (
          <div key={index} className="review-card">
            <h3>{rev.name}</h3>
            <p>⭐ {rev.rating}/5</p>
            <p>"{rev.comment}"</p>
          </div>
        ))}
      </div>

      <div className="review-form">
        <h2>Add Your Review</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Rating</option>
            <option value="5">⭐ 5</option>
            <option value="4">⭐ 4</option>
            <option value="3">⭐ 3</option>
            <option value="2">⭐ 2</option>
            <option value="1">⭐ 1</option>
          </select>
          <textarea
            name="comment"
            placeholder="Your comment"
            value={formData.comment}
            onChange={handleChange}
          />
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default CheckReviews;
