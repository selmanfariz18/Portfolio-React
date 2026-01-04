import React from 'react';
import './projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPlay } from '@fortawesome/free-solid-svg-icons';

// Import images directly
import dot_connect from '../../assets/projects/dot_connect.png';
import ictacme from '../../assets/projects/ICTACME.png';
import hack3_0 from '../../assets/projects/Hack_3.0.png';
import fluid_simulator from '../../assets/projects/fluid_simulator.png';
import mp3_player from '../../assets/projects/mp3_player.png';
import weather_web from '../../assets/projects/weather_web.png';
import qr_code_generator from '../../assets/projects/qr_code_generator.png';

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectsTitle'>My Projects</h2>
            <span className='projectsDesc'>The projects i have done towards now are listed here, most of them are open source and complete code available on GitHub.</span>
            <div className='projectsBlocks'>
                {/* Dot_connect */}
                <div className="card">
                    <img
                        src={dot_connect}
                        alt="Dot Connect Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>Dot_Connect</span>
                        <span>Game developed using React js</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/Dot_connect.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://dot-connect-omega.vercel.app/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* Fluid_simulator */}
                <div className="card">
                    <img
                        src={fluid_simulator}
                        alt="Fluid Simulator Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>Fluid_simulator</span>
                        <span>HTML, CSS, WEBGL-js</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/Fluid-simulator.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://selmanfariz18.github.io/Fluid-simulator/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* Qr_code_generator */}
                <div className="card">
                    <img
                        src={qr_code_generator}
                        alt="Qr Code Generator Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>QR Code Generator</span>
                        <span>HTML, CSS</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/Qr-generator-HTML-' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://selmanfariz18.github.io/Qr-generator-HTML-/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* Weather_web */}
                <div className="card">
                    <img
                        src={weather_web}
                        alt="Weather Web Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>Weather App</span>
                        <span>HTML, CSS, JS</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/weather_app_web.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://selmanfariz18.github.io/weather_app_web/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* ICTACME */}
                <div className="card">
                    <img
                        src={ictacme}
                        alt="ICTACME Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>ICTACME</span>
                        <span>HTML, Tailwind_CSS</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/ICTACME.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://ictacme.vercel.app/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* Hack 3.0 */}
                <div className="card">
                    <img
                        src={hack3_0}
                        alt="Hack 3.0 Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>Hack_3.0</span>
                        <span>HTML, CSS, JS</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/hack3.0.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            <a href='https://selmanfariz18.github.io/hack3.0/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a>
                        </div>
                    </span>
                </div>
                {/* MP3 player */}
                <div className="card">
                    <img
                        src={mp3_player}
                        alt="MP3 Player Project"
                        className="card__img"
                        loading="lazy"
                    />
                    <span className="card__footer">
                        <span>MP3-Player</span>
                        <span>Python</span>
                    </span>
                    <span className="card__action">
                        <div className='cardbtns'>
                            <a href='https://github.com/selmanfariz18/MP3-player.git' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faCode} /></a>
                            {/* <a href='/' target="_blank" rel="noopener noreferrer" role='button'><FontAwesomeIcon icon={faPlay} /></a> */}
                        </div>
                    </span>
                </div>
            </div>
            <a href='https://github.com/selmanfariz18?tab=repositories' className='projectsBtn'>See More on my Github Repo</a>
        </section>
    );
}

export default Projects;