/*import React from 'react';

const Explore = () => {
  return (
    <div className="container">
      <h1>Explore Safely</h1>

      <section>
        <h2>🛡️ Safety Tips</h2>
        <ul>
          <li>Keep your emergency contacts handy</li>
          <li>Always inform someone about your travel plans</li>
          <li>Avoid travelling alone at night</li>
        </ul>
      </section>

      <section>
        <h2>✅ Do's</h2>
        <ul>
          <li>Keep digital and physical copies of your documents</li>
          <li>Use only registered guides</li>
          <li>Respect local customs and traditions</li>
        </ul>
      </section>

      <section>
        <h2>❌ Don'ts</h2>
        <ul>
          <li>Don’t share personal info with strangers</li>
          <li>Don’t ignore warning signs</li>
          <li>Don’t leave luggage unattended</li>
        </ul>
      </section>

      <section>
        <h2>🎥 Watch this travel safety guide</h2>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your desired travel video
          title="Travel Safety Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Explore;*/

/*import React from "react";

const Explore = () => {
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <div className="bg-green-100 p-6 rounded-2xl shadow-md text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-2">Explore Safe Travel</h1>
        <p className="text-lg text-green-700">Your guide to a safe and memorable journey</p>
      </div>

      {/* Safety Tips 
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Safety Tips</h2>
        <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700">
          <li>Always carry a basic first-aid kit.</li>
          <li>Share your itinerary with a friend or family member.</li>
          <li>Keep digital and physical copies of your important documents.</li>
          <li>Use official transport or verified ride-sharing services.</li>
          <li>Avoid isolated areas after dark.</li>
        </ul>
      </section>

      {/* Do's and Don'ts 
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Do's and Don'ts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Do's</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Stay hydrated and eat light meals.</li>
              <li>Learn basic phrases of the local language.</li>
              <li>Follow local laws and customs.</li>
              <li>Use maps to plan your route.</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Don'ts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Don’t flash expensive belongings.</li>
              <li>Don’t trust strangers blindly.</li>
              <li>Don’t ignore travel advisories.</li>
              <li>Don’t leave your luggage unattended.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* YouTube Video 
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Watch: Safety During Travel</h2>
        <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6gKalfwYNMg"
            title="Travel Safety Tips"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Explore;*/

import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <div className="explore-container">
      <h1 className="explore-title">Explore Safe Travel</h1>

      <section className="explore-section">
        <h2>Top Safety Tips</h2>
        <ul className="explore-list">
          <li>Always carry a basic first-aid kit.</li>
          <li>Share your itinerary with a friend or family member.</li>
          <li>Keep digital and physical copies of your important documents.</li>
          <li>Use official transport or verified ride-sharing services.</li>
          <li>Avoid isolated areas after dark.</li>
        </ul>
      </section>

      <section className="explore-section">
        <h2>Do's and Don'ts</h2>
        <div className="grid">
          <div className="do-card">
            <h3>Do's</h3>
            <ul className="explore-list">
              <li>Stay hydrated and eat light meals.</li>
              <li>Learn basic phrases of the local language.</li>
              <li>Follow local laws and customs.</li>
              <li>Use maps to plan your route.</li>
            </ul>
          </div>
          <div className="dont-card">
            <h3>Don'ts</h3>
            <ul className="explore-list">
              <li>Don’t flash expensive belongings.</li>
              <li>Don’t trust strangers blindly.</li>
              <li>Don’t ignore travel advisories.</li>
              <li>Don’t leave your luggage unattended.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="explore-section explore-video">
        <h2>Watch: Safety During Travel</h2>
        <iframe
          src="https://www.youtube.com/embed/6gKalfwYNMg"
          title="Travel Safety Tips"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Explore;
