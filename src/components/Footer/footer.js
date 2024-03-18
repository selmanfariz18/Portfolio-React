import React from 'react';
import './footer.css';
// Import the FontAwesomeIcon component and the icons you need
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <section className='social-buttons'>
                    {/* Updated Button with FontAwesomeIcon */}
                    <a className='social-button facebook' href='/projects' role='button'>
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    {/* Example Twitter Button */}
                    <a className='social-button twitter' href='/projects' role='button'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className='social-button github' href='/projects' role='button'>
                        <FontAwesomeIcon icon={faGithub} />
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
