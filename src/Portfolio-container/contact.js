import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';


export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lyq6his', 'template_1y1k15c', form.current, 'tkMhX9KynhJSwV4yg')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (<section className='ContactUs' id='Contact'>
<div className='HeadingContact'>
                    <h1 className='heading1'>Contact </h1>
                    <h1 className='heading2'>Me </h1>
                </div>

        <div className='formDiv'>

            <form ref={form} onSubmit={sendEmail}>
                <li>
                    <label className='labelClass'>Name</label></li>
                <li><input className='inputclass' type="text" name="user_name" />
                </li>
                <li>
                    <label className='labelClass'>Email</label></li>
                <li><input className='inputclass' type="email" name="user_email" />
                </li>
                <li><label className='labelClass'>Message</label></li>
                <li><textarea className='inputclass2' name="message" />
                </li>
                <li>
                    <input className='submitButton' type="submit" value="Send" />
                </li>
                <li className='or'><h5>-OR-</h5></li>
                <li className='icon-block' >
                    <a className='icons' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                        <i className='fa fa-github-square'></i>
                    </a>
                    <a className='icons' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a className='icons' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a className='icons' href='https://www.linkedin.com/in/anuj-guha-47991a1ba/'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </li>
            </form>
        </div>



    </section>
    );
};