import './image_page.css';
import React from 'react';

const Player = () => {
  return (
  <div>
  <video width="100%" height="100%" controls>
  <source src="./video.mp4" type="video/mp4" />
  </video>
  </div>
  )
 }

export default Player;
