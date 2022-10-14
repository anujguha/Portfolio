import React from 'react';
import './Projects.css'
import projectData from './projectData.json';

function ProjectBox(props) {
    return (
        <div>
            {projectData.map((data, index) => {
                return (
                    <div className='project-box'>
                        <div><img src={data.logo} alt='project-logo' className='project-logo'></img></div>
                        <div className='right-box'>
                            <h1 className='head-123'>{data.title}</h1>
                            <h6 className='head-123'>{data.subtitle}</h6>
                            <div className='tech-logos'>
                                <li> <h3>MADE WITH:</h3></li>
                                <li> 
                            {data.tech.map((logo,index)=>{return(
                               <img src={logo.img} alt='tech-logo' className='tech-logo'></img>
                                )})}</li>
                             </div>   
                            <p>{data.description}</p>
                        </div>
                    </div>
                )

            })}
        </div>




    );
}

export default function Projects() {

    return (
        <section className='Projects-container' id='projects'>
            <div className='seperator-skew2'>
                <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                    <polygon className='fill-white' points="0 0 2560 150 0 150"></polygon>
                </svg>
            </div>
            <div className='Heading'>
                <h1 className='headone'>My</h1>
                <h1 className='head2'>Projects</h1>
            </div>
            <div className='pbox'>
                <ProjectBox/>
            </div>
        </section>
    );
}
