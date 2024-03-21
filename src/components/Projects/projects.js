import React from 'react';
import './projects.css';


const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>My Projects</h2>
            <span className='projectsDesc'>The projects i have done towards now are listed here, most of them are open source and complete code available on GitHub.</span>
            <div className='projectsBlocks'>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
                <div className='projectsBlock'><h4>Weather App</h4><button className='workBtn1' href="#">Link</button></div>
            </div>
            <button className='projectsBtn'>See More</button>
        </section>
    );
}

export default Projects;