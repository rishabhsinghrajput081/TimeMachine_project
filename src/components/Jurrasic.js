import React, { useState } from 'react';

const Jurrasic = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  // Period data
  const periods = [
    {
      name: 'Triassic',
      range: '250-201 million years ago',
      description:
        `The Triassic Period, spanning from approximately 250 to 201 million years ago, marked the beginning of the Mesozoic Era and followed the largest mass extinction event in Earth’s history. The period was characterized by a warm climate, with much of the land forming the supercontinent Pangaea. Life began to recover, and the first dinosaurs appeared during this time, although they were small and not yet the dominant species. Other reptiles, such as cynodonts and thecodonts, also thrived, and early mammals emerged, though they were small and nocturnal. Marine life slowly recovered, with the emergence of marine reptiles like ichthyosaurs and nothosaurs in the oceans.
        
        The end of the Triassic was marked by another extinction event, the Triassic-Jurassic Extinction, which paved the way for the rise of larger dinosaurs in the Jurassic period. The period saw the first signs of the dominance of dinosaurs, although they were not yet the ecological kings they would become in later periods. The Triassic laid the foundation for the evolution of life in the Mesozoic Era, setting the stage for the flourishing of dinosaurs and other species in the following periods.`,
      images: [
        { src: 'colelophysis.jpeg', name: 'Coelophysis' },
        { src: 'Plateosaurus.jpeg', name: 'Plateosaurus' },
      ],
    },
    {
      name: 'Jurassic',
      range: '201-145 million years ago',
      description: 
      `The Jurassic Period followed the Triassic and lasted from 201 to 145 million years ago. It was characterized by the diversification of dinosaurs and the appearance of some of the most famous species, such as the Brachiosaurus, Allosaurus, and Stegosaurus. The climate was warm and humid, with high sea levels and the breakup of the supercontinent Pangaea. As a result, large landmasses began to form, providing a variety of habitats for diverse ecosystems. The Jurassic saw the rise of large herbivorous sauropods and towering carnivorous theropods. Marine life also thrived with reptiles like **Ichthyosaurs and Plesiosaurs. Birds, such as Archaeopteryx, began to appear, marking the start of the evolutionary journey towards modern avians. Mammals, though small, also began to diversify during this period, but dinosaurs were the dominant species on land. By the end of the Jurassic, the world was a place where dinosaurs ruled, both in the skies, on land, and in the oceans.`,
      images: [
        { src: 'Brachiosaurus.jpeg', name: 'Brachiosaurus' },
        { src: 'Stegosaurus.jpeg', name: 'Stegosaurus'} // Example image for Jurassic Period
      ],
    },
    {
      name: 'Cretaceous',
      range: '145-66 million years ago',
      description: 
    `The Cretaceous Period is the last period of the Mesozoic Era, lasting from about 145 to 66 million years ago. It was marked by the continued diversification of dinosaurs, with some of the largest and most famous species evolving, such as the Tyrannosaurus rex, Triceratops, and Velociraptor. The Cretaceous period was characterized by a warm climate, with high sea levels and the break-up of the supercontinent Pangaea continuing. This period also saw the appearance of flowering plants, which began to dominate the landscape and provided food for herbivorous dinosaurs. 

    The Cretaceous was a time of intense ecological competition, with large carnivores like Tyrannosaurus rex preying on massive herbivores like Triceratops. Smaller but highly agile carnivores, like Velociraptor, hunted in packs, and flying reptiles like Pteranodons ruled the skies. The oceans were teeming with life, including giant marine reptiles like Mosasaurus and Plesiosaurs. Birds continued to evolve, and their ancestors started to resemble modern-day species. The period ended with the famous **Cretaceous-Paleogene extinction event**, which wiped out the non-avian dinosaurs and many other species, marking the end of the Mesozoic Era and the rise of mammals in the following Paleogene period.`,
  images: [
        { src: 't-rex.jpeg', name: 'Tyrannosaurus Rex' },
        { src: 'Spinosaurus.jpeg', name: 'Spinosaurus' }, // Example image for Cretaceous Period
      ],
    },
  ];

  // Function to handle period click
  const handlePeriodClick = (periodName) => {
    setSelectedPeriod((prev) => (prev === periodName ? null : periodName)); // Toggle visibility
    // Play the sound on click
    const audio = new Audio(`${process.env.PUBLIC_URL}/assets/sounds/click.mp3`);
    audio.play().catch((error) => {
      console.error('Failed to play audio:', error);
    });
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpeg)`, // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Dull overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
        }}
      ></div>

      {/* Period Information Section */}
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
        {/* Left Side - Text Description */}
        <div
          style={{
            width: '50%',
            padding: '20px',
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          {/* Display Period Names */}
          {periods.map((period) => (
            <div
              key={period.name}
              style={{
                padding: '20px',
                marginBottom: '30px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '24px',
                fontWeight: 'bold',
                color: selectedPeriod === period.name ? 'white' : 'gray',
                transition: 'color 0.3s ease', // Smooth transition for color change
              }}
              onClick={() => handlePeriodClick(period.name)}
              onMouseEnter={(e) => e.target.style.color = 'white'} // Change color to white on hover
              onMouseLeave={(e) => e.target.style.color = selectedPeriod === period.name ? 'white' : 'gray'} // Revert to original color when not hovering
            >
              {period.name}
              {/* Show details when selected */}
              {selectedPeriod === period.name && (
                <div style={{ marginTop: '20px', fontSize: '18px', color: 'lightgray' }}>
                  <p><strong>Period Range:</strong> {period.range}</p>
                  <p>{period.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Image related to selected Period */}
        {selectedPeriod && (
          <div
            style={{
              width: '40%',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            {/* Display Images of selected Period */}
            {periods
              .filter((period) => period.name === selectedPeriod)
              .map((period) => (
                <div key={period.name}>
                  {period.images.map((image, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${image.src}`}
                        alt={image.name}
                        style={{
                          width: '50%',  // Resize images to 50% width
                          height: 'auto',
                          borderRadius: '8px',
                        }}
                      />
                      <div
                        style={{
                          marginTop: '10px',
                          fontSize: '16px',
                          color: 'white',
                          fontWeight: 'bold',
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

export default Jurrasic;
