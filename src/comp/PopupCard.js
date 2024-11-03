import React from 'react';
import './PopupCard.css';

const PopupCard = ({ title, name, description, imgUrl, detailedPageUrl, onClose }) => {
    return (
        <div className="popup-card-container">
            <div className="popup-overlay" onClick={onClose}></div>
            
            <div className="popup-card">
                {/* Ellipse area for the image */}
                <div className="popup-image" style={{ backgroundImage: `url(${imgUrl})` }}>
                    <div className="popup-image-overlay"></div>
                </div>
                
                {/* Content area */}
                <div className="popup-content">
                    <h4 className="popup-occupation">{title}</h4>
                    <h3 className="popup-name">{name}</h3>
                    <p className="popup-description">{description}</p>
                    
                    <a href={detailedPageUrl} target="_blank" rel="noopener noreferrer" className="popup-more-info">
                        More Info
                    </a>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default PopupCard;
