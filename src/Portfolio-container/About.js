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
                    <h3>subtitles</h3>
                    <p> description this is ajsdo luiah odhfp9 d ouh fpahfhpoo fihaoihpsoidf  sf opashd fo sdpfoh foahd fodjnj98y farf jnl; dhv9 p d  sodihfojrfl uofia foajnv;si afnanufjyhiuen  dn fh vhskknvujd chf   gdjdnhf hlksjdhu sdjhauidh</p>
                   </div>
                   <img src='/images/anuj_orangebg.png' alt='myImage2' className='myImage'></img>
                </div>
            </section>
        );
}
