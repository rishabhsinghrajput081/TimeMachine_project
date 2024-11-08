import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingPage from './comp/LoadingPage';
import NavBar from './comp/NavBar';
import GlobalMap from './comp/GlobalMap';
import HistoricalFigures from './comp/HistoricalFigures';
import YearInfo from './comp/YearInfo'; // Import the YearInfo component
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<LoadingPage />} />
                    <Route path="/map" element={<GlobalMap />} />
                    <Route path="/historical-figures" element={<HistoricalFigures />} />
                    <Route path="/year-info" element={<YearInfo />} /> {/* New route for YearInfo */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
