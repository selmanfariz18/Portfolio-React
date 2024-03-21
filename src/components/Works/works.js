import React from 'react';
import './works.css'

const Works = () => {
    return (
        <section id='works'>

            <div className='worksBlocks'>
                <a href='/projects'><div className='worksBlock'><h2>My Projects</h2></div></a>
                <a href='/certificates'><div className='worksBlock'><h2>My Certificates</h2></div></a>
            </div>
            <br></br>
        </section>
    );
}

export default Works