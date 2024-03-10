import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menuIcon from '../../assets/menu.png'; // Add your menu icon asset path

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${isMenuOpen ? 'expanded' : ''}`}> {/* Add a class based on isMenuOpen */}
            <img src={logo} alt="logo" className='logo' />
    
            <div className={`menuToggle`} onClick={toggleMenu}>
                <img src={menuIcon} alt="" className='menuIcon'/>
            </div>
    
            <div className={`desktopMenu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="home" className='desktopMenuListItem'>Home</Link>
                <Link to="about" className='desktopMenuListItem'>About</Link>
                <Link to="portfolio" className='desktopMenuListItem'>Portfolio</Link>
                <Link to="clients" className='desktopMenuListItem'>Clients</Link>
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
    )
}

export default NavBar;