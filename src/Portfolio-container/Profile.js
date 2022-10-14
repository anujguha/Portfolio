import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'react-tsparticles';
import { useCallback } from 'react';
import './Profilecss.css';
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css';

export default function Profile() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        console.log(container);
    }, []);
    return (
        <section className='Home'>
            <div className="navbar">
                <ul className="nav-list">
                    <li><Link className="element" to='#home'>Home</Link></li>
                    <li><Link className="element" to='#projects'>Projects</Link></li>
                    <li><Link className="element" to='#About'>About</Link></li>
                    <li><Link className="element" to='#Contact'>Contact</Link></li>

                </ul>
            </div>
            <div className='profile-container' id='home'>

                <div className='seperator-skew'>
                    <svg x="0" y="0" viewBox='0 0 2560 150' preserveAspectRatio='none' version='1.1' xmlns='http://www.w3.org/2000/svg'>
                        <polygon className='fill-white' points="2560 0 2560 150 0 150"></polygon>
                    </svg>
                </div>
                <div className='profile-parent'>

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
                    <div className='profile-details'>
                        <div className='Colz'>
                            <div >
                                <a className='Colz-icon' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                                    <i className='fa fa-facebook-square'></i>
                                </a>
                                <a className='Colz-icon' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                                    <i className='fa fa-google-plus-square'></i>
                                </a>
                                <a className='Colz-icon' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                                    <i className='fa fa-instagram'></i>
                                </a>
                                <a className='Colz-icon' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                                    <i className='fa fa-twitter'></i>
                                </a>
                            </div>
                            <div className='profile-details-name'>
                                <span className='primary-text'><h3>
                                    {" "}
                                    Hello, I'm <span className='highlighted-text'>Anuj</span>
                                </h3>
                                </span>
                                <span className='highlighted-text'><h1>Full Stack <div className='dev'> Dev</div>eloper</h1></span>
                                <span className='profile-role-tagline'>
                                    Knack of building applications with front and back end operations.
                                </span>
                            </div>
                            <div className='profile-options'>
                                <button className='btn primary-btn'>Hire me</button>
                                <a href='Resume_anujguha_27june.pdf' download='Anuj Resume_anujguha_27june.PDF'>
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>

                </div>
            </div>
            <footer className='footer'><h3>THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO.</h3>
               </footer><footer className='footer'> <h6> -Steve Jobs</h6></footer>

        </section>


    );
}


