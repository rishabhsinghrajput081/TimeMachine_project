import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three'; // Import Three.js
import './GlobeComponent.css';

const GlobeComponent = () => {
  const globeEl = useRef();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedYear, setSelectedYear] = useState(1934);
  const [globeWidth, setGlobeWidth] = useState(window.innerWidth);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setGlobeWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.2;
      globeEl.current.renderer().setClearColor('black');

      // Create a pulsing ring effect
      createPulsingRingEffect();
    }
  }, []);

  const createPulsingRingEffect = () => {
    const globe = globeEl.current;

    // Create a ring geometry to animate
    const ringGeometry = new THREE.RingGeometry(0.1, 0.15, 64); // Inner radius, outer radius, and segments
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      opacity: 0.5,
      transparent: true,
    });

    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.position.set(0, 0, 1); // Position the ring slightly above the globe

    // Add ring to the globe scene
    globe.scene().add(ring);

    let scale = 1;
    let growing = true;

    const animateRing = () => {
      if (growing) {
        scale += 0.01;
        if (scale > 1.5) growing = false;
      } else {
        scale -= 0.01;
        if (scale < 1) growing = true;
      }

      ring.scale.set(scale, scale, scale);
      requestAnimationFrame(animateRing);
    };

    animateRing();
  };

  const handleYearClick = (year) => {
    setSelectedYear(year);
    // Play the click sound when a year is selected
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/click.mp3`);
    audio.play();
  };

   const handlePointClick = (point) => {
    setSelectedCountry(point);
    
    // Play the click sound when a point is selected
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/click.mp3`);
    audio.play().catch((err) => {
      console.error('Audio play failed:', err); // Handle any potential errors gracefully
    });
  };
  return (
    <div 
      className="globe-container"
      style={{ height: '100vh', position: 'relative' }}
    >
      <Globe
        ref={globeEl}
        width={globeWidth}
        height={window.innerHeight * 0.75}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={[
          { name: "India", lat: 20.5937, lng: 78.9629, info: "India: A country in South Asia." },
          { name: "USA", lat: 37.0902, lng: -95.7129, info: "USA: A country in North America." },
          { name: "Brazil", lat: -14.2350, lng: -51.9253, info: "Brazil: The largest country in South America1." },
          { name: "Germany", lat: 51.1657, lng: 10.4515, info: "Germany: A country in Central Europe." },
          { name: "UK", lat: 55.3781, lng: -3.4360, info: "United Kingdom: A country in Europe made up of England, Scotland, Wales, and Northern Ireland." },
          { name: "Russia", lat: 61.5240, lng: 105.3188, info: "Russia: The largest country in the world, located in Eastern Europe and Northern Asia." },
          { name: "China", lat: 35.8617, lng: 104.1954, info: "China: The most populous country in East Asia." },
          { name: "Spain", lat: 40.4637, lng: -3.7492, info: "Spain: A country in Southwestern Europe on the Iberian Peninsula." },
          { name: "France", lat: 46.6034, lng: 1.8883, info: "France: A country in Western Europe known for its culture and history." },
          { name: "Italy", lat: 41.8719, lng: 12.5674, info: "Italy: A country in Southern Europe, home to ancient history and landmarks." },
          { name: "Japan", lat: 36.2048, lng: 138.2529, info: "Japan: An island nation in East Asia known for its culture and technology." },
          { name: "Portugal", lat: 39.3999, lng: -8.2245, info: "Portugal: A country on the Iberian Peninsula in Southwestern Europe." },
          { name: "Mexico", lat: 23.6345, lng: -102.5528, info: "Mexico: A country in North America known for its rich cultural heritage." },
          { name: "South Africa", lat: -30.5595, lng: 22.9375, info: "South Africa: A country on the southernmost tip of Africa." },
          { name: "Egypt", lat: 26.8206, lng: 30.8025, info: "Egypt: A country in North Africa, famous for its ancient civilization." },
          { name: "Iran", lat: 32.4279, lng: 53.6880, info: "Iran: A country in Western Asia known for its historical and cultural significance." }
        ]}
        
        pointLat={(d) => d.lat}
        pointLng={(d) => d.lng}
        pointAltitude={0.05}
        pointRadius={0.3}
        onPointClick={handlePointClick}
      />

{selectedCountry && (
  <div style={{ 
    position: 'absolute', 
    top: 20, 
    left: 20, 
    backgroundColor: 'rgba(255, 0, 0, 0.2)',  // Red color with 70% opacity
    padding: '10px 15px',  
    borderRadius: '5px', 
    width: '250px',       
    height: '150px',      
    overflow: 'hidden',   
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  }}>
    <h4 style={{ margin: '0 0 8px 0', color: '#fff' }}>{selectedCountry.name}</h4>  {/* White text for contrast */}
    <p style={{ margin: 0, fontSize: '14px', color: '#fff' }}>{selectedCountry.info}</p>  {/* White text */}
  </div>
)}




      <ScrollableTimeline onYearClick={handleYearClick} selectedYear={selectedYear} />
    </div>
  );
};

const ScrollableTimeline = ({ onYearClick, selectedYear }) => {
  const years = Array.from({ length: 31 }, (_, i) => 1600 + i * 10); // Generate years from 1600 to 1900
  const timelineRef = useRef(null);
  const yearRefs = useRef([]);

  // Handle clicking a year (playing sound only on click)
  const handleYearClick = (year, index) => {
    if (year !== selectedYear) {
      onYearClick(year);

      // Play the click sound when a year is selected
      const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/click.mp3`);
      audio.play().catch((err) => {
        console.error('Audio play failed:', err); // Handle any potential errors gracefully
      });

      // Center the clicked year in the timeline
      const yearElement = yearRefs.current[index];
      const timelineElement = timelineRef.current;

      if (yearElement && timelineElement) {
        const yearElementRect = yearElement.getBoundingClientRect();
        const timelineElementRect = timelineElement.getBoundingClientRect();

        // Calculate the distance needed to scroll to center the clicked year
        const yearCenter = yearElementRect.left + yearElementRect.width / 2;
        const timelineCenter = timelineElementRect.left + timelineElementRect.width / 2;
        const scrollOffset = yearCenter - timelineCenter;

        // Scroll the timeline to center the clicked year
        timelineElement.scrollBy({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    }
  };

  useEffect(() => {
    const timelineElement = timelineRef.current;

    if (timelineElement) {
      // Enable smooth scrolling
      timelineElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div
      className="scrollable-timeline-container"
      style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        right: '5%',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '10px 0',
        backgroundColor: 'black',
        borderRadius: '5px',
      }}
      ref={timelineRef} // Reference to the timeline container
    >
      <div
        className="timeline-line"
        style={{
          position: 'absolute',
          top: '50%',
          height: '2px',
          backgroundColor: '#000',
          width: `${years.length * 50}px`, // Adjust based on years
          left: '0',
        }}
      ></div>

      <div
        className="timeline-scroll"
        style={{ display: 'flex', gap: '20px', position: 'relative' }}
      >
        {years.map((year, index) => (
          <div
            key={year}
            ref={(el) => (yearRefs.current[index] = el)} // Store each year element in the ref array
            style={{
              display: 'inline-block',
              textAlign: 'center',
              cursor: 'pointer',
              width: '50px', // Set a consistent width for each year point
            }}
            onClick={() => handleYearClick(year, index)} // Play sound only on click
          >
            <div
              className="timeline-point"
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: year === selectedYear ? 'white' : '#333',
                margin: '0 auto',
              }}
            />
            <div
              style={{
                marginTop: '5px',
                fontSize: '12px',
                color: year === selectedYear ? 'white' : 'gray',
              }}
            >
              {year}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobeComponent;
