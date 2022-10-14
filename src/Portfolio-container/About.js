import React  from 'react';
import './About.css'

export default function About() {
    
        return (
            <section className='About-container' id='About'>
                <div className='seperator-skew4'>
                    <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <polygon className='fill-white' points="2560 0 2560 150 0 150"></polygon>
                    </svg>
                </div>
                <div className='aboutHeading'>
                    <h1 className='abouthead1'>A</h1>
                    <h1 className='abouthead2'>bout</h1>
                </div>
                <div className='aboutBlock'>
                   <div className='introbox'>
                    <h1>Anuj Guha</h1>
                    <h3>full stack Web Developer</h3>
                    <p>I am a Full Stack Developer and a Problem-Solving enthusiast pursuing Computer Science engineering from MITS, Gwalior. </p>
                    <p>I have a passion for software development with a diverse skillset ranging from the MEARN stack to a stronghold on data structures and algorithms. </p>
                    <p>My tech stack includes <li>languages like C++, Python, and Javascript </li> <li>frameworks like React and Angular</li><li> DBMS like MongoDB and MySQL. </li> <li> Tools like Figma, Postman, Git, etc.</li></p>
                    <p>Presently, I have started competitive coding and I have earned 2<span role='img' aria-label='Star'>⭐</span>'s on Codechef.I am also a student ambassador at Internshala and a member of the Google developer students club - Gwalior. I have been actively participating in online hackathons as well.</p>
                   </div>
                   <img src='./images/anuj_orangebg.PNG' alt='myImage2' className='myImage'></img>
                </div>
            </section>
        );
}
