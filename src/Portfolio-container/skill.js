import React from 'react';
import './skill.css'

export default function Skill() {

    return (
        <section className='skill-container' >


            <div className='Headingskill'>
                <h1 className='head1skill'>Key-</h1>
                <h1 className='head2skill'>Skills</h1>
            </div>
            <div className='block'>
                <ul className='icons-skills'>
                <li><img src='/logo/Mongo.png' alt='mongoDB'></img><h4>MongDB</h4></li>
                    <li><img src='/logo/express.png' alt='Express-logo'></img><h4>Express</h4></li>
                    <li><img src='/logo/angular.png' alt='angular-logo'></img><h4>Angular</h4></li>
                    <li><img src='/logo/react.png' alt='react-logo'></img><h4>React</h4></li>
                    <li><img src='/logo/nodejs.png' alt='nodejs-logo'></img><h4>Nodejs</h4></li>
                    <li><img src='/logo/mysql.png' alt='mysql-logo'></img><h4>MySQL</h4></li>
                    <li><img src='/logo/cpp.png' alt='cpp-logo'></img><h4>C++</h4></li>
                    <li><img src='/logo/Python-PNG.png' alt='Python-logo'></img><h4>Python</h4></li>
                    <li><img src='/logo/bootstrap.png' alt='bootstrap-logo'></img><h4>Bootstrap</h4></li>
                    <li><img src='/logo/HTML.png' alt='html-logo'></img><h4>HTML</h4></li>
                    <li><img src='/logo/CSS.png' alt='CSS-logo'></img><h4>CSS</h4></li>
                    <li><img src='/logo/JS.png' alt='JS-logo'></img><h4>JavaScript</h4></li>
                    
                   
                   

                </ul>
            </div>
            <div className='seperator-skew9'>
                <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <polygon className='fill-white' points="0 0 2560 150 0 150"></polygon>
                </svg>
            </div>
        </section>
    );
}
