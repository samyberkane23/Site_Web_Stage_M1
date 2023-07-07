import React from 'react';
import Image3 from './Image3.jpg';

const Component3 = () => {
  return (
    <div className="position-relative border border-black rounded">
      <img src={Image3} alt="Image 3" className="project-image img-fluid" />
      <div className="text-overlay position-absolute bottom-0 start-0 w-200 text-center">
        <h2 className="text mb-5 " style={{ maxWidth: '100%' }}>
          Vous avez un projet informatique ou un besoin à nous confier ?
        </h2>
      </div>
    </div>
  );
};

export default Component3;
