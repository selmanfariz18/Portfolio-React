import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './contact.css';

const Contact = () => {
    return (
        <section id='contact' className='contact-section'>
            <div className='ContactForm'>
                <h1>Contact Me</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <p style={{ color: 'white', marginBottom: '2rem', fontSize: '1.2rem' }}>
                                Feel free to reach out to me!
                            </p>
                            <a href='mailto:salmanulfarizyka@gmail.com'>
                                <button className='submit-btn' type='button'>
                                    salmanulfarizyka@gmail.com
                                </button>
                            </a>
                            
                            <section className='contact-social-buttons'>
                                <a className='contact-social-button' href='https://github.com/selmanfariz18' target="_blank" rel="noopener noreferrer" role='button'>
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a className='contact-social-button' href='https://www.linkedin.com/in/selmanfariz/' target="_blank" rel="noopener noreferrer" role='button'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className='contact-social-button' href='https://twitter.com/Selmanulfarizy' target="_blank" rel="noopener noreferrer" role='button'>
                                    <FontAwesomeIcon icon={faXTwitter} />
                                </a>
                                <a className='contact-social-button' href='https://www.instagram.com/fariz.deb/' target="_blank" rel="noopener noreferrer" role='button'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;