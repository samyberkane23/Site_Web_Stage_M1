import React, { useState } from 'react';


const Component3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`component-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>Vous cherchez un futur consultant et vous avez besoin d’accompagnement ?</h2>
      {isHovered && <p>Bonjour 3</p>}
    </div>
  );
};

export default Component3;