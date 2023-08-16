import React  from 'react';
import './courses.css'
import './heading.css'
import google from './images/google.PNG';
import infosys from './images/Infosys.PNG';
import isro from './images/isro.PNG';
import coursera from './images/coursera.PNG';
export default function Courses() {
    
        return (
            <section className='courses-container' id='courses'>
               
                
                
                <div className='Heading'>
                    <h1 className='head1'>Training &</h1>
                    <h1 className='head2'>Certifications</h1>
                </div>
                <div className='course-content'>
                
                <ul className='course-list'>
                    <li className='cert-block'>
                        <img src={ infosys } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Full-stack Web Development</h3>
                            <p><b>Skills Gained:</b>JavaScript and jQuery, Backend with Node.js, App-Development with Angular,Database Design with MySQL and NoSQL, Sass, Chrome developer tools.</p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ google } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>IT Automation with Python (SPECIALIZATION) </h3>
                            <p>Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud.</p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ isro } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Satellite Remote sensing of Atmosphere</h3>
                            <p>Topics Covered: Fundamentals of Remote sensing, Processes and types of Remote sensing, Imaging spectrometry, Interaction of EMR with Atmosphere, etc</p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ coursera } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Foundations of UX Design </h3>
                            <p>Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc</p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    
                    </ul>
                </div>
                
            </section>
        );
}
