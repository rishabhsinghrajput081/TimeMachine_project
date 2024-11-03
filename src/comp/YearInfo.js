import React from 'react';
import './YearInfo.css'; // Import the CSS file

const YearInfo = () => {
  // Hardcoded data for demonstration
  const country = "India";
  const year = 1600;

  const significantEvents = [
    {
      title: "Formation of the British East India Company",
      description: "Incorporated by royal charter on December 31, 1600, the East India Company was formed for the exploitation of trade with East and Southeast Asia and India.",
      details: "East India Company, English company formed for the exploitation of trade with East and Southeast Asia and India, incorporated by royal charter on December 31, 1600. Starting as a monopolistic trading body, the company became involved in politics and acted as an agent of British imperialism in India from the early 18th century to the mid-19th century."
    },
    
    {
        title: "Formation of the British East India Company",
        description: "Incorporated by royal charter on December 31, 1600, the East India Company was formed for the exploitation of trade with East and Southeast Asia and India.",
        details: "East India Company, English company formed for the exploitation of trade with East and Southeast Asia and India, incorporated by royal charter on December 31, 1600. Starting as a monopolistic trading body, the company became involved in politics and acted as an agent of British imperialism in India from the early 18th century to the mid-19th century."
      },
      {
        title: "Formation of the British East India Company",
        description: "Incorporated by royal charter on December 31, 1600, the East India Company was formed for the exploitation of trade with East and Southeast Asia and India.",
        details: "East India Company, English company formed for the exploitation of trade with East and Southeast Asia and India, incorporated by royal charter on December 31, 1600. Starting as a monopolistic trading body, the company became involved in politics and acted as an agent of British imperialism in India from the early 18th century to the mid-19th century."
      },
  ];

  const scientificAchievements = [
    {
      title: "Advancements in Textiles",
      description: "During this period, India was renowned for its textiles, especially cotton and silk, known for their quality and craftsmanship.",
      details: "Innovations in dyeing techniques and intricate weaving patterns established Indian textiles as highly desirable in global markets."
    },
    {
      title: "Mathematical Innovations",
      description: "Indian mathematicians made significant contributions, including advancements in algebra and the introduction of the concept of zero.",
      details: "These innovations laid the foundation for future developments in mathematics globally."
    }
  ];

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
        {significantEvents.map((event, index) => (
          <div key={index} className="event">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            {event.details && <p className="details">{event.details}</p>}
          </div>
        ))}
      </div>

      <div className="section">
        <h3>Scientific Achievements</h3>
        {scientificAchievements.map((achievement, index) => (
          <div key={index} className="achievement">
            <h4>{achievement.title}</h4>
            <p>{achievement.description}</p>
            {achievement.details && <p className="details">{achievement.details}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearInfo;
