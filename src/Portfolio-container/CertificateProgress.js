// App.js
import './heading.css'
import React from 'react';
import CertificateCard from './CertificateCard';

const courses = () => {
  const certificates = [
    {
      title: 'Blockchain and its Applications',
      description: 'Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud.',
      imageUrl: './images/nptel.PNG',
    },
    {
      title: 'Reinforcement Learning',
      description: 'Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc',
      imageUrl: './images/coursera.PNG',
    },
    {
      title: 'Google IT Automation with Python',
      description: 'Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud.',
      imageUrl: './images/google.PNG',
    },
    {
      title: 'Foundations of UX Design',
      description: 'Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc',
      imageUrl: './images/coursera.PNG',
    },
    {
      title: 'Satellite Remote sensing of Atmosphere',
      description: 'Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud.',
      imageUrl: './images/isro.PNG',
    },
    {
      title: 'Deep Learning',
      description: 'Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc',
      imageUrl: './images/coursera.PNG',
    },
    // Add more certificate objects as needed
  ];

  return (
    <div className="app">
      <div className='heading'><h1 className='head1'>My</h1><h1 className='head2'>Certificates</h1></div>
      <div className="certificate-grid">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={index}
            title={certificate.title}
            description={certificate.description}
            imageUrl={certificate.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default courses;

