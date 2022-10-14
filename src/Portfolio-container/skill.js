import React from 'react';
import './skill.css'

export default function Skill() {

    return (
        <section className='skill-container' >


            <div className='Headingskill'>
                <h1 className='head1skill'>Technical-</h1>
                <h1 className='head2skill'>Skills</h1>
            </div>
            <div className='block'>
                <ul className='icons-skills'>
                    <li>
                    <li><img src='./images/Mongo.png' alt='mongoDB'></img><h4>MongDB</h4></li>
                    <li><img src='./images/express.png' alt='Express-logo'></img><h4>Express</h4></li>
                    <li><img src='./images/angular.png' alt='angular-logo'></img><h4>Angular</h4></li>
                    <li><img src='./images/react.png' alt='react-logo'></img><h4>React</h4></li>
                    <li><img src='./images/nodejs.png' alt='nodejs-logo'></img><h4>Nodejs</h4></li>
                    <li><img src='./images/mysql.png' alt='mysql-logo'></img><h4>MySQL</h4></li>
                    </li>
                    <li>
                    <li><img src='./images/cpp.png' alt='cpp-logo'></img><h4>C++</h4></li>
                    <li><img src='./images/Python-PNG.png' alt='Python-logo'></img><h4>Python</h4></li>
                    <li><img src='./images/bootstrap.png' alt='bootstrap-logo'></img><h4>Bootstrap</h4></li>
                    <li><img src='./images/HTML.png' alt='html-logo'></img><h4>HTML</h4></li>
                    <li><img src='./images/CSS.png' alt='CSS-logo'></img><h4>CSS</h4></li>
                    <li><img src='./images/JS.png' alt='JS-logo'></img><h4>JavaScript</h4></li>
                    </li>
                   
                   

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
