import React from 'react';
import './works.css'

const Works = () => {
    return (
        <section id='works'>
            <h2 className='worksTitle'>My Works</h2>
            <span className='worksDesc'>The works i done towards now are listed here, most of them are open source and complete code available on GitHub.</span>
            <div className='worksBlocks'>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
                <div className='worksBlock'><h4>Weather App</h4><a href="#">Link</a></div>
            </div>
            <button className='workBtn'>See More</button>
        </section>
    );
}

export default Works