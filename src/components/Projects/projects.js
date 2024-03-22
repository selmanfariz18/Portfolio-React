import React from 'react';
import './projects.css';


const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>My Projects</h2>
            <span className='projectsDesc'>The projects i have done towards now are listed here, most of them are open source and complete code available on GitHub.</span>
            <div className='projectsBlocks'>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
                <div className='projectsBlock'><h4>Weather App</h4><a className='workBtn1' href="https://github.com/selmanfariz18?tab=repositories">Link</a></div>
            </div>
            <button className='projectsBtn'>See More</button>
        </section>
    );
}

export default Projects;