import React from 'react';
import './Card.css';

function Card({ figure }) {
  return (
    <div className="card">
      <img src={figure.image_url} alt={figure.name} className="card-image" />
      <h2>{figure.name}</h2>
      <p>{figure.description}</p>
    </div>
  );
}

export default Card;
