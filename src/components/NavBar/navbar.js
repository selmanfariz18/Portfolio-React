import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/menu.png'; // Add your menu icon asset path

const NavBar = ({ isMenuOpen, setIsMenuOpen }) => { // Use props passed from the parent
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isMenuOpen ? 'expanded' : ''}`}> {/* Use isMenuOpen from props */}
            <img src={logo} alt="logo" className='logo' />

            <div className={`menuToggle`} onClick={toggleMenu}>
                <img src={menuIcon} alt="" className='menuIcon' />
            </div>

            <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className='desktopMenuListItem'>Home</Link>
                <Link to="/certificates" className='desktopMenuListItem'>Certificates</Link>
                <Link to="/projects" className='desktopMenuListItem'>Projects</Link>
                <Link to="/contact" className='desktopMenuListItem'>Contact Me</Link>
                <button className='mobileMenuBtn'>
                    <img src={contactImg} alt="" className='desktopMenuImg' />
                    Contact Me
                </button>
            </div>

            <div className="contactMeDesktop">
                <button className='desktopMenuBtn'>
                    <img src={contactImg} alt="" className='desktopMenuImg' />
                    Contact Me
                </button>
            </div>
        </nav>
    );
}

export default NavBar;
