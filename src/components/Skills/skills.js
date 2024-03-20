import React from 'react';
import './skills.css';

import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className='skillTitle'>What can i Do?</span>
            <span className='skillDesc'>I can develope websites, apps, with backend and frontend.</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={WebDesign} alt="WebDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Web Developer</h2>
                        <p>I am a Fullstack Developer, Can manage both frontend and backend via Django.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={AppDesign} alt="AppDesign" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>App Developer</h2>
                        <p>I am An App Developer, Create Android/IOS apps using flutter.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <div className='skillBarBadgeText'>
                        <h2 className='skillBadgeh2'>I can work with : </h2>
                        <img src="https://img.shields.io/badge/HTML-white?style=for-the-badge&logo=html5&logoColor=black" alt="HTML Badge" />
                        <img src="https://img.shields.io/badge/CSS-white?&style=for-the-badge&logo=css3&logoColor=black" alt="CSS Badge" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-white?style=for-the-badge&logo=tailwind-css&logoColor=black" alt="Tailwind CSS Badge" />
                        <img src="https://img.shields.io/badge/Bootstrap-white?style=for-the-badge&logo=bootstrap&logoColor=black" alt="Bootstrap Badge" />
                        <img src="https://img.shields.io/badge/JavaScript-white?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                        <img src="https://img.shields.io/badge/React-white?style=for-the-badge&logo=react&logoColor=black" alt="React Badge" />
                        <img src="https://img.shields.io/badge/Vue.js-white?style=for-the-badge&logo=vue.js&logoColor=black" alt="Vue.js Badge" />
                        <img src="https://img.shields.io/badge/Django-white?style=for-the-badge&logo=django&logoColor=black" alt="Django Badge" />
                        <img src="https://img.shields.io/badge/Python-white?style=for-the-badge&logo=python&logoColor=black" alt="Python Badge" />
                        <img src="https://img.shields.io/badge/Flutter-white?style=for-the-badge&logo=flutter&logoColor=black" alt="Flutter Badge" />
                        <img src="https://img.shields.io/badge/Dart-white?style=for-the-badge&logo=dart&logoColor=black" alt="Dart Badge" />
                        <img src="https://img.shields.io/badge/Amazon_AWS-white?style=for-the-badge&logo=amazon-aws&logoColor=black" alt="AWS Badge" />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;