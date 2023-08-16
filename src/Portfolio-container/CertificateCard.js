// CertificateCard.js

import React, { useState } from 'react';
import './CertificateCard.css';

const CertificateCard = ({ title, description, imageUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`certificate-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card-front">
        <img src={imageUrl} alt={title} className="certificate-image" />
        <div className="certificate-title">{title}</div>
      </div>
      <div className="card-back">
      <div className="certificate-title">{title}</div>
        <div className="certificate-description">{description}</div>
      </div>
    </div>
  );
};

export default CertificateCard;
