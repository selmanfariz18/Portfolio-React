import React from 'react';
import './footer.css';
// Import the FontAwesomeIcon component and the icons you need
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <section className='social-buttons'>
                    <a className='social-button github' href='https://github.com/selmanfariz18' target="_blank" rel="noopener noreferrer" role='button'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    {/* Updated Button with FontAwesomeIcon */}
                    <a className='social-button linkedin' href='https://www.linkedin.com/in/selmanfariz/' target="_blank" rel="noopener noreferrer" role='button'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    {/* Example Twitter Button */}
                    <a className='social-button twitter' href='https://twitter.com/Selmanulfarizy' target="_blank" rel="noopener noreferrer" role='button'>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a className='social-button instagram' href='https://www.instagram.com/fariz.deb/' target="_blank" rel="noopener noreferrer" role='button'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </section>
            </div>

            <div className='footer-bottom'>
                © 2024 Copyright
                <br></br>
                <a href='/'>
                    salmanulfarizyka@gmail.com
                </a>
            </div>
        </footer>
    )
}

export default Footer;
