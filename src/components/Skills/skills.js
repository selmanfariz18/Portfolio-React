import React from 'react';
import './skills.css';

import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What I Do?</span>
            <span className='skillDesc'>I will develope websites, apps, with backend and frontend.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Web Developer</h2>
                        <p>I am a Fullstack Developer, Can manage both frontend and backend via Django.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>App Developer</h2>
                        <p>I am An App Developer, Create Android/IOS apps using flutter.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;