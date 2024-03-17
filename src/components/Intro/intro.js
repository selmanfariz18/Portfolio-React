import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-router-dom';
import resume from '../../assets/SELMANULResume.pdf'

const Intro = () => {
    return (
        <section id="intro">
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Selman</span><br />Developer</span>
                <p className='introPara'>I am a computer science engineering student,<br/> who focuses on development, cyber security, etc.</p>
                <div className="buttonsContainer">
                    <Link to="/contact"><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
                    <a href={resume} ><button className='btn'>Resume</button></a>
                </div>
            </div>
            <img src={bg} alt="profile" className='bg'/>
        </section>
    )
}

export default Intro
