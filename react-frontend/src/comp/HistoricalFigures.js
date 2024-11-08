import React, { useEffect, useState } from 'react';
import './HistoricalFigures.css'; // Ensure you have a CSS file for styling

const HistoricalFigures = () => {
    const [figures, setFigures] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0); // Default to the first card
    const [hoverIndex, setHoverIndex] = useState(null); // Track the card being hovered over
    const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/assets/sounds/u.mp3`)); // Load audio once

    // Fetch historical figures data
    useEffect(() => {
        const fetchFigures = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/historical-figures`);
                const data = await response.json();
                console.log('Fetched data:', data);
                setFigures(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Error fetching historical figures:', error);
            }
        };
    
        fetchFigures();
    }, []);

    // Function to scroll container
    const autoScroll = (direction) => {
        const container = document.querySelector('.figures-cards');
        const scrollAmount = direction === 'left' ? -300 : 300; // Increase scroll amount for smoother movement
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    const handleCardHover = (index) => {
        setHoverIndex(index);
        // Play sound on hover
        audio.play().catch((error) => {
            console.error('Failed to play audio:', error);
        });
    };

    const handleCardHoverLeave = () => {
        setHoverIndex(null);
    };

    const handleMouseMove = (e) => {
        const container = document.querySelector('.figures-cards');
        const { left, right } = container.getBoundingClientRect();

        if (e.clientX < left + 10) {
            autoScroll('left'); // Auto scroll left if near the left edge
        } else if (e.clientX > right - 10) {
            autoScroll('right'); // Auto scroll right if near the right edge
        }
    };

    return (
        <div className="historical-figures-container" onMouseMove={handleMouseMove}>
            {/* Video Background */}
            <video autoPlay loop muted playsInline className="background-video">
                <source src={`${process.env.PUBLIC_URL}/historyBG.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div> {/* This is the dark overlay */}

            {/* Main Content */}
            <h1 style={{ color: 'black' }}>Historical Figures</h1>
            <div className="figures-cards">
                {figures.length === 0 ? (
                    <p>No historical figures found.</p>
                ) : (
                    figures.map((figure, index) => {
                        console.log(`Rendering figure: ${figure.name}, ID: ${figure._id}`); // Log each figure being rendered
                        return (
                            <div
                                key={figure._id} // Use _id as key
                                className={`figure-card ${activeIndex === index ? 'active' : ''} ${hoverIndex === index ? 'hovered' : ''}`}
                                onClick={() => handleCardClick(index)}
                                onMouseEnter={() => handleCardHover(index)}
                                onMouseLeave={handleCardHoverLeave}
                            >
                                {/* Updated image source to include the full path */}
                                <img 
                                    src={`http://localhost:3000${figure.image_path}`} 
                                    alt={figure.name} 
                                    className="figure-image" 
                                />

                                <h2>{figure.name}</h2>
                                <p>{figure.description}</p>
                                <p><strong>Born:</strong> {figure.birth_year ? new Date(figure.birth_year).toLocaleDateString() : 'Date not available'}</p>
                                <p><strong>Died:</strong> {figure.death_year ? new Date(figure.death_year).toLocaleDateString() : 'Date not available'}</p>
                                <div className="content">
                                    <p>{figure.additionalInfo}</p> {/* Optional additional information */}
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default HistoricalFigures;
