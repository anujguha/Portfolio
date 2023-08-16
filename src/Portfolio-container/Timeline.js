// Timeline.js

import React from 'react';
import './Timeline.css';
import './heading.css'
const timelineData = [
    {
        id: 1,
        logo: './images/Persistent.jpg',
        title: 'Persistent Martian intern',
        company: 'Persistent Systems',
        duration: 'July 2023 - August 2023',
        description: 'Tech. --> DSA, DBMS, Linux, Python',
    },
    {
        id: 2,
        logo: './images/Prism.png',
        title: 'Flutter Developer Intern',
        company: 'Prism Johnson Limited, Satna',
        duration: 'June 2023 - July 2023',
        description: 'Tech. --> Flutter (Dart) ',
    },
    {
        id: 3,
        logo: './images/oasisinfobyte.png',
        title: 'Web development intern',
        company: 'Oasis infobyte',
        duration: 'Feb 2023 - March 2023',
        description: 'Tech. --> HTML, CSS, JS, Git.',
    },
    {
        id: 4,
        logo: './images/iassesdigital.png',
        title: 'React Intern',
        company: 'IAsses digital, Banglore',
        duration: 'Dec 2022 - Jan 2023',
        description: 'Tech. --> React.js, Node.js, Git, CSS, UI',
    },
    // Add more entries as needed
];

const Timeline = () => {
    return (
        <section className='timeline-section'>
            <div className='heading'><h1 className='head1'>Internships</h1><h1 className='head2'>& Experience</h1></div>
            <div className="timeline">
                {timelineData.map((entry, index) => (
                    <div key={entry.id} className="timeline-item">
                        <div className="timeline-date">
                            <p>{entry.duration}</p>
                        </div>
                        <div className="timeline-content">
                            <img src={entry.logo} className='org-logo' alt='logo' ></img>
                            <div>
                                <h3>{entry.title}</h3>
                                <p>{entry.company}</p>
                                <p>{entry.description}</p>
                            </div>
                        </div>
                        {index % 2 === 0 ? (
                            <div className="timeline-dot orange-dot"></div>
                        ) : (
                            <div className="timeline-dot black-dot"></div>
                        )}

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
