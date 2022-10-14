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
                    <li><img src='./images/Mongo.PNG' alt='mongoDB'></img><h4>MongDB</h4></li>
                    <li><img src='./images/express.PNG' alt='Express-logo'></img><h4>Express</h4></li>
                    <li><img src='./images/angular.PNG' alt='angular-logo'></img><h4>Angular</h4></li>
                    <li><img src='./images/react.PNG' alt='react-logo'></img><h4>React</h4></li>
                    <li><img src='./images/nodejs.PNG' alt='nodejs-logo'></img><h4>Nodejs</h4></li>
                    <li><img src='./images/mysql.PNG' alt='mysql-logo'></img><h4>MySQL</h4></li>
                    </li>
                    <li>
                    <li><img src='./images/cpp.PNG' alt='cpp-logo'></img><h4>C++</h4></li>
                    <li><img src='./images/Python-PNG.PNG' alt='Python-logo'></img><h4>Python</h4></li>
                    <li><img src='./images/bootstrap.PNG' alt='bootstrap-logo'></img><h4>Bootstrap</h4></li>
                    <li><img src='./images/HTML.PNG' alt='html-logo'></img><h4>HTML</h4></li>
                    <li><img src='./images/CSS.PNG' alt='CSS-logo'></img><h4>CSS</h4></li>
                    <li><img src='./images/JS.PNG' alt='JS-logo'></img><h4>JavaScript</h4></li>
                    <li><img src='./images/git.PNG' alt='git-logo'></img><h4>Git</h4></li>
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
