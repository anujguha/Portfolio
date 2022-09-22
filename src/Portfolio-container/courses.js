import React  from 'react';
import './courses.css'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import google from './images/google.png';
export default function Courses() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);
        return (
            <section className='courses-container' id='courses'>
               
                <div className='seperator-skew5'>
                    <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <polygon className='fill-white5' points="0 0 2560 150 0 150"></polygon>
                    </svg>
                </div>
                
                <div className='Heading'>
                    <h1 className='head1'>Training &</h1>
                    <h1 className='head2'>Certifications</h1>
                </div>
                <div className='course-content'>
                <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "transparent",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "pull",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    pull: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 50,
                                        duration: 1,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    directions: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 500,
                                    },
                                    value: 50,
                                },
                                opacity: {
                                    value: 0.1,
                                },
                                shape: {
                                    type: "polygon",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                <ul className='course-list'>
                    <li className='cert-block'>
                        <img src={ google } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Full-stack development</h3>
                            <p>blah blah blah balahkajhdfisugf fjha wf if fagf fshdgfig eefgfak iufilkblgfaif uuf  eif  uef sfr </p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ google } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Full-stack development</h3>
                            <p>blah blah blah balahkajhdfisugf fjha wf if fagf fshdgfig eefgfak iufilkblgfaif uuf  eif  uef sfr </p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ google } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Full-stack development</h3>
                            <p>blah blah blah balahkajhdfisugf fjha wf if fagf fshdgfig eefgfak iufilkblgfaif uuf  eif  uef sfr </p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    <li className='cert-block'>
                        <img src={ google } className='cert-logo' alt='logo'></img>
                        <div className='cert-text'>
                            <h3>Full-stack development</h3>
                            <p>blah blah blah balahkajhdfisugf fjha wf if fagf fshdgfig eefgfak iufilkblgfaif uuf  eif  uef sfr </p>
                            <button className='view-cert'>View Certificate</button>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className='seperator-skew10'>
                    <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <polygon className='fill-white10' points="0 0 2560 150 2560 0 "></polygon>
                    </svg>
                </div>
            </section>
        );
}
