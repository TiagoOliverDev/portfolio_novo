import React from 'react';
import CV from '../../assets/CvPauloTiago2024 (3).pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contate-me
      </a>
    </div>
  );
};

export default CTA;
