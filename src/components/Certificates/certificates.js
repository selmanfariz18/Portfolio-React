import React from 'react';

import './certificates.css';

import foss3_0 from '../../assets/certificates/Foss3_0.png'



const Certificates = () => {
    return (
        <section id='certificates'>
            <h2 className='projectsTitle'>Certificates</h2>
            <div className='projectsBlocks'>
                <a href='https://drive.google.com/uc?id=1CDdYNNFJ0hu753g3MrFwfP-k8X4k2Z-A' target="_blank" rel="noopener noreferrer" role='button'>
                <div className="card">
                    <img src={foss3_0} alt="Foss 3.0 certificate" className="card__img"></img>
                    <span className="card__footer">
                        <span>Foss 3.0</span>
                        <span>Game developed using React js</span>
                    </span>
                   
                </div>
                </a>
            </div>
        </section>
    );
}

export default Certificates;