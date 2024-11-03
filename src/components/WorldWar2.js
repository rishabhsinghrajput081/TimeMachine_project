import React, { useState, useEffect } from 'react';

const WorldWar2 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // State for cursor position

  const events = [
    {
      name: 'Invasion of Poland',
      date: 'September 1, 1939',
      description: `The Invasion of Poland on September 1, 1939, marked the beginning of World War II. Nazi Germany, under Adolf Hitler, launched a blitzkrieg attack on Poland, quickly overwhelming the Polish army. This invasion prompted Britain and France to declare war on Germany on September 3, 1939. The invasion was characterized by rapid advances, mechanized units, and air raids, which decimated Polish defenses. By the end of the month, Poland was partitioned between Germany and the Soviet Union, following the secret protocols of the Molotov-Ribbentrop Pact.`,
      images: [
        { src: 'poland_invasion.jpeg', name: 'Invasion of Poland' },
        { src: 'blitzkrieg.jpeg', name: 'Blitzkrieg Tactics' },
        { src: 'polish_tanks.jpeg', name: 'Polish Defenses' },
        { src: 'german_troops.jpeg', name: 'German Troops Advancing' },
      ],
    },
    {
      name: 'D-Day (Normandy Invasion)',
      date: 'June 6, 1944',
      description: `D-Day, on June 6, 1944, was the Allied invasion of Normandy in Nazi-occupied France. This operation, codenamed Operation Overlord, was the largest seaborne invasion in history and marked the beginning of the end for Nazi Germany. Led by General Dwight D. Eisenhower, Allied forces landed on five beachheads—Utah, Omaha, Gold, Juno, and Sword. Despite fierce resistance from German forces, the Allies successfully secured a foothold in France, which paved the way for the liberation of Western Europe.`,
      images: [
        { src: 'dday.jpeg', name: 'D-Day Landings' },
        { src: 'normandy.jpeg', name: 'Normandy Beaches' },
        { src: 'troops_landing.jpeg', name: 'Allied Troops Landing' },
        { src: 'german_defense.jpeg', name: 'German Defenses' },
      ],
    },
    {
      name: 'Hiroshima and Nagasaki Bombings',
      date: 'August 6 & 9, 1945',
      description: `On August 6, 1945, the United States dropped an atomic bomb on Hiroshima, Japan, followed by another on Nagasaki on August 9, 1945. These bombings marked the first and only use of nuclear weapons in war. The devastating power of the bombs led to the immediate deaths of tens of thousands of people, with many more dying later from radiation exposure. Japan surrendered on August 15, 1945, effectively ending World War II. These events remain a significant and controversial moment in history, symbolizing both the horrors of war and the dawn of the nuclear age.`,
      images: [
        { src: 'hiroshima.jpeg', name: 'Hiroshima Aftermath' },
        { src: 'nagasaki.jpeg', name: 'Nagasaki Aftermath' },
        { src: 'atomic_bomb.jpeg', name: 'Atomic Bomb Explosion' },
        { src: 'japan_surrender.jpeg', name: 'Japan Surrenders' },
      ],
    },
  ];

  const handleEventClick = (eventName) => {
    setSelectedEvent((prev) => (prev === eventName ? null : eventName));
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/click.mp3`);
    audio.play().catch((error) => {
      console.error('Failed to play audio:', error);
    });
  };

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/WorldWar22.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: `url('http://localhost:3000/images/target.png'), auto`,
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: 'absolute',
          top: cursorPos.y - 20, // Adjust as needed
          left: cursorPos.x - 20, // Adjust as needed
          width: '40px', // Size of the glowing effect
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.6)', // Glow color
          boxShadow: '0 0 25px 10px rgba(255, 255, 255, 2)', // Glowing effect
          pointerEvents: 'none', // Prevent it from interfering with mouse events
          transition: 'background-color 0.3s ease', // Smooth transition
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          top: '10%',
          height: '80vh',
          width: '100%',
          overflowY: 'auto',
          padding: '20px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '50%',
            padding: '20px',
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          {events.map((event) => (
            <div
              key={event.name}
              style={{
                padding: '20px',
                marginBottom: '30px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '24px',
                fontWeight: 'bold',
                color: selectedEvent === event.name ? 'white' : 'gray',
                transition: 'color 0.3s ease',
              }}
              onClick={() => handleEventClick(event.name)}
              onMouseEnter={(e) => (e.target.style.color = 'white')}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  selectedEvent === event.name ? 'white' : 'gray')
              }
            >
              {event.name}
              {selectedEvent === event.name && (
                <div style={{ marginTop: '20px', fontSize: '18px', color: 'lightgray' }}>
                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p>{event.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedEvent && (
          <div
            style={{
              width: '40%',
              padding: '20px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px', // Space between images
              overflowY: 'scroll', // Allow scrolling for more images
              maxHeight: '80vh', // Limit container height
            }}
          >
            {events
              .filter((event) => event.name === selectedEvent)
              .map((event) => (
                <div key={event.name}>
                  {event.images.map((image, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${image.src}`}
                        alt={image.name}
                        style={{
                          width: '100%', // Full width images
                          maxHeight: '250px', // Set a max height
                          height: 'auto',
                          borderRadius: '8px',
                          objectFit: 'contain', // Maintain aspect ratio
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorldWar2;
