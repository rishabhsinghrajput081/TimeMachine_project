import React, { useState, useEffect } from 'react';

const WorldWar1 = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const events = [
    {
      name: 'Assassination of Archduke Franz Ferdinand',
      date: 'June 28, 1914',
      description: 'The assassination of Archduke Franz Ferdinand, heir to the Austro-Hungarian throne, on June 28, 1914, in Sarajevo, was a pivotal moment that directly triggered World War I. Ferdinand, along with his wife Sophie, was shot by Gavrilo Princip, a Bosnian Serb and member of the nationalist group known as the Black Hand. The assassination occurred while the couple was traveling in an open-top carriage through the streets of Sarajevo during a state visit. Princip’s act was motivated by the desire to end Austro-Hungarian rule over Bosnia, which had been annexed in 1908, and reflected broader nationalist tensions in the Balkans. The killing sent shockwaves across Europe, leading Austria-Hungary, with Germany’s backing, to issue a harsh ultimatum to Serbia. When Serbia’s response was deemed insufficient, Austria-Hungary declared war, setting off a chain reaction as alliances between major powers quickly drew Germany, Russia, France, and the United Kingdom into the conflict. This single moment in Sarajevo, a city already brimming with political tension, ignited a war that would engulf Europe and much of the world, reshaping the global order for decades to come.',
      images: [
        { src: 'ferdinand.jpeg', name: 'Archduke Franz Ferdinand' },
        { src: 'princip.jpeg', name: 'Gavrilo Princip' },
        { src: 'sarajevo.jpeg', name: 'Sarajevo, Site of Assassination' },
        { src: 'carriage.jpeg', name: 'Carriage in Which Franz Ferdinand Was Shot' },
      ],
    },
    {
      name: 'The Battle of the Somme',
      date: 'July 1 – November 18, 1916',
      description: 'The Battle of the Somme, fought between July 1 and November 18, 1916, was one of the largest and bloodiest battles of World War I. The British and French armies launched a joint offensive against German positions along the River Somme in northern France, aiming to break through the entrenched German defenses after years of stalemate on the Western Front. The battle began with a massive artillery bombardment intended to weaken the German lines, but the enemy forces were well-prepared, and the British army suffered unprecedented casualties on the first day—nearly 60,000 men, including 19,240 killed. Over the next four months, the battle ground on, with the introduction of new war technologies, such as the first use of tanks by the British, though these early models were limited in effectiveness. Soldiers endured relentless trench warfare, with the landscape transformed into a muddy, cratered wasteland by artillery fire. Despite the immense loss of life, the Allies made only minimal territorial gains. The Battle of the Somme became a symbol of the futility and human cost of trench warfare, with over one million soldiers wounded or killed by the time it ended.',
      images: [
        { src: 'somme.jpeg', name: 'The Battle of the Somme' },
        { src: 'trenches.jpeg', name: 'British Trenches at the Somme' },
        { src: 'tanks.jpeg', name: 'First Use of Tanks in Warfare' },
        { src: 'soldiers.jpeg', name: 'Soldiers Preparing for Battle' },
      ],
    },
    {
      name: 'Armistice of 11 November 1918',
      date: 'November 11, 1918',
      description: 'The Armistice of 11 November 1918, signed in a railway carriage in Compiègne, France, marked the official cessation of hostilities on the Western Front, effectively ending the fighting of World War I. The agreement, signed between the Allies and Germany, was the result of years of intense combat and strategic deadlock. The armistice required Germany to withdraw its troops from occupied territories, disarm its military, and surrender key military equipment. The signing took place in a symbolic location—the very same carriage where the 1914 German victory had been celebrated. News of the armistice spread quickly, triggering spontaneous celebrations across Europe and North America, as millions of people believed the "war to end all wars" had finally concluded. However, while it brought an end to the combat, the Treaty of Versailles, signed months later in 1919, would impose harsh terms on Germany, leading to economic hardship, political instability, and setting the stage for the events that would lead to World War II.',
      images: [
        { src: 'armistice.jpeg', name: 'Armistice of 1918 Signing' },
        { src: 'celebrations.jpeg', name: 'Celebrations in Paris After Armistice' },
        { src: 'compiègne.jpeg', name: 'Compiègne Forest, Where Armistice Was Signed' },
        { src: 'versailles.jpeg', name: 'The Treaty of Versailles, 1919' },
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

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
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
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/worldWar.jpeg)`,
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
    >
      {/* Glowing Cursor Effect */}
      <div
        style={{
          position: 'fixed',
          top: `${cursorPosition.y - 25}px`,
          left: `${cursorPosition.x - 25}px`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          boxShadow: '0 0 30px 10px rgba(255, 255, 255, 0.7)',
          pointerEvents: 'none',
          zIndex: 9999,
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
              onMouseLeave={(e) => (e.target.style.color = selectedEvent === event.name ? 'white' : 'gray')}
            >
              {event.name}
              {selectedEvent === event.name && (
                <div style={{ marginTop: '20px', fontSize: '18px', color: 'lightgray' }}>
                  <p><strong>Date:</strong> {event.date}</p>
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
                          objectFit: 'contain', // Ensure images are fully visible
                        }}
                      />
                      <div
                        style={{
                          marginTop: '8px',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          color: 'lightgray',
                        }}
                      >
                        {image.name}
                      </div>
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

export default WorldWar1;
