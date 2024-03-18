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
                        <h2>I can work with : </h2>
                        <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="HTML Badge" />
                        <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS Badge" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge" />
                        <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap Badge" />
                        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge" />
                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge" />
                        <img src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D" alt="Vue.js Badge" />
                        <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django Badge" />
                        <img src="https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white" alt="Python Badge" />
                        <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter Badge" />
                        <img src="https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white" alt="Dart Badge" />
                        <img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS Badge" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;