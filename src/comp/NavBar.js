import React, { useState } from 'react';
import './NavBar.css';
import { FaGlobe, FaSearch, FaBars, FaArrowLeft, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for navigation

const NavBar = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
        setSearchQuery(''); // Clear the search query when closing
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    {/* Link the globe icon to the GlobalMap component */}
                    <Link to="/map" className="nav-logo">
                        <FaGlobe className="icon" />
                    </Link>
                    <div className="nav-search" onClick={toggleSearch}>
                        <FaSearch className="icon" />
                    </div>
                    <div className="nav-menu" onClick={toggleMenu}>
                        <FaBars className="icon" />
                    </div>
                </div>
            </nav>

            {/* Search Overlay */}
            {searchVisible && (
                <div className="search-overlay">
                    <div className="back-button" onClick={toggleSearch}>
                        <FaArrowLeft className="icon" />
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="overlay-close" onClick={toggleSearch}></div>
                </div>
            )}

            {/* Menu Overlay */}
            {menuVisible && (
                <div className={`slide-in-menu ${menuVisible ? 'active' : ''}`}>
                    <div className="close-button" onClick={toggleMenu}>
                        <FaTimes className="icon" />
                    </div>
                    <div className="menu-content">
                        <h2> </h2>
                        <ul>
                            {/* Update menu links to use React Router's Link */}
                            <li><Link to="/map">MAP</Link></li>
                            <li><Link to="/historical-figures">Historical Figures</Link></li>
                            <li><Link to="/world-war-1">World War 1</Link></li>
                            <li><Link to="/world-war-2">World War 2</Link></li>
                            <li><Link to="/dinosaur-era">The Dinosaur Era (Mesozoic Era)</Link></li>
                            <li><Link to="/year-info">year based info</Link></li>

                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;
