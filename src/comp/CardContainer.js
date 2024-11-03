import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CardContainer.css'; // Assuming your CSS for cards

const CardContainer = () => {
  const [figures, setFigures] = useState([]); // To hold the historical figures data
  const [currentIndex, setCurrentIndex] = useState(0); // For navigation

  // Fetch historical figures data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:3000/figures') // Adjust the URL based on your API
      .then((response) => {
        setFigures(response.data);
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);

  // Handler to move to the next card
  const handleNext = () => {
    if (currentIndex < figures.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handler to move to the previous card
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (figures.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      <button className="nav-button left" onClick={handlePrev}>&lt;</button>
      
      <div className="card">
        <h2>{figures[currentIndex].name}</h2>
        <p>{figures[currentIndex].description}</p>
        {/* Add more details from your database if needed */}
      </div>

      <button className="nav-button right" onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default CardContainer;
