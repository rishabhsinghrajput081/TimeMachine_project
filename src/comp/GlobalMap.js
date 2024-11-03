import React, { useState } from 'react';
import PopupCard from './PopupCard';  // Ensure this is correctly imported
import './GlobalMap.css';  // Ensure this file exists

const GlobalMap = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);

    const points = [
        { id: 1, title: 'Warrior', name: 'Geralt of Rivia', description: 'A skilled Witcher and monster hunter.', imgUrl: '/profile.jpg', detailedPageUrl: '/point1', top: '20%', left: '40%' },
        { id: 2, title: 'Mage', name: 'Yennefer of Vengerberg', description: 'A powerful sorceress with a mysterious past.', imgUrl: '/img2.jpg', detailedPageUrl: '/point2', top: '50%', left: '60%' },
        { id: 3, title: 'Princess', name: 'Ciri of Cintra', description: 'A princess with a destiny tied to Geralt and Yennefer.', imgUrl: '/img2.jpg', detailedPageUrl: '/point3', top: '70%', left: '30%' },
    ];

    const handlePointClick = (point) => {
        setSelectedPoint(point);
    };

    const handleClosePopup = () => {
        setSelectedPoint(null);
    };

    return (
        <div className="global-map">
            <img src="/world.png" alt="World Map" className="map-image" /> {/* Ensure this image is in the public folder */}
            {points.map((point) => (
                <div
                    key={point.id}
                    className="map-point"
                    style={{ top: point.top, left: point.left }}
                    onClick={() => handlePointClick(point)}
                >
                    •
                </div>
            ))}

            {selectedPoint && (
                <PopupCard
                    title={selectedPoint.title}
                    name={selectedPoint.name}
                    description={selectedPoint.description}
                    imgUrl={selectedPoint.imgUrl}
                    detailedPageUrl={selectedPoint.detailedPageUrl}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
};

export default GlobalMap;
