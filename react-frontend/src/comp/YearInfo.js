import React, { useEffect, useState } from 'react';
import './YearInfo.css'; // Import the CSS file
import axios from 'axios';

const YearInfo = () => {
  const country = "Canada"; // Specify the country
  const year = 1600; // Specify the year

  const [events, setEvents] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch data from the API endpoint
        const response = await axios.get(`/api/year-info`, {
          params: { country, year }
        });

        // Destructure response to extract relevant data
        const data = response.data;

        // Filter events and achievements based on the response
        const filteredEvents = data.map(item => ({
          title: item.Event_Title,
          details: item.Event_Details
        }));

        const filteredAchievements = data.map(item => ({
          title: item.Scientific_Title,
          details: item.Scientific_Details
        }));

        // Update state with filtered data
        setEvents(filteredEvents);
        setAchievements(filteredAchievements);
      } catch (err) {
        setError('Error loading data');
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country, year]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <video autoPlay loop muted className="background-video">
        <source src={`${process.env.PUBLIC_URL}/infoBG.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <h2 className="main-title">{country} - {year}</h2>

      <div className="section">
        <h3>Significant Events</h3>
        {events.map((event, index) => (
          <div key={index} className="event">
            <h4>{event.title}</h4>
            <p className="details">{event.details}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Scientific Achievements</h3>
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <h4>{achievement.title}</h4>
            <p className="details">{achievement.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearInfo;
