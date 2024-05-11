import React from 'react';

import './certificates.css';

import foss3_0 from '../../assets/certificates/Foss3_0.png'
import joy_of_programming from '../../assets/certificates/joy_of_programming.png'
import iedc_summit from '../../assets/certificates/IEDC_summit_2022.png'
import talk_session from '../../assets/certificates/talk_session.png'
import backend_api from '../../assets/certificates/backend_api_udemy_certificate.png'
import codestorm from '../../assets/certificates/codestorm.png'
import TinkerHack from '../../assets/certificates/Selmanul_Farizy_K_A_Tinkerhack.jpg'
import ai_workshop from '../../assets/certificates/Ai workshop certificate Tinkerhub collab-1.png'
import python_workshop from '../../assets/certificates/python_workshop-1.png'



const Certificates = () => {
    return (
        <section id='certificates'>
            <h2 className='projectsTitle'>Certificates</h2>
            <div className='projectsBlocks'>
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1PRQeuMVchNiaHWWhrbozfwzn_rxTRZEP' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1PRQeuMVchNiaHWWhrbozfwzn_rxTRZEP/view?usp=drive_link */}
                        <div >
                            <img src={TinkerHack} alt="TinkerHack organizer certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Organizer|Tink-Her-Hack 2.0</span>
                                <span>2nd and 3rd March 2024</span>
                            </span>
                        </div>
                    </a>
                </div>
                {/* foss 3.0 */}
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1CDdYNNFJ0hu753g3MrFwfP-k8X4k2Z-A' target="_blank" rel="noopener noreferrer" role='button'>
                        <div >
                            <img src={foss3_0} alt="Foss 3.0 certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Foss 3.0</span>
                                <span>28th, 29th, 30th of october 2023</span>
                            </span>
                        </div>
                    </a>
                </div>
                {/* joy_of_programming */}
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1RqnPaPeUN3zMWwOJ2BaqVLEzpNmNF96j' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1RqnPaPeUN3zMWwOJ2BaqVLEzpNmNF96j/view?usp=sharing */}
                        <div >
                            <img src={joy_of_programming} alt="joy_of_programming certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Joy Of Programming</span>
                                <span>Dec 2021 to Jan 2022</span>
                            </span>
                        </div>
                    </a>
                </div>
                {/* IEDC_summit_mentor */}
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1oXnw9YmtbD-wHOokS6_31IFZH65eCSuf' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1oXnw9YmtbD-wHOokS6_31IFZH65eCSuf/view?usp=sharing */}
                        <div >
                            <img src={iedc_summit} alt="mentor certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Mentor at IEDC summit</span>
                                <span>2022</span>
                            </span>
                        </div>
                    </a>
                </div>
                {/* talk session */}
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1NqNT9_H6IpxWgxQo0D9gmGvpRsfvn9JD' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1NqNT9_H6IpxWgxQo0D9gmGvpRsfvn9JD/view?usp=sharing */}
                        <div >
                            <img src={talk_session} alt="talk_Session certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Talk session by IEDC</span>
                                <span>31 Oct 2023</span>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1b-5NHIucyK2guOh9dBWuRjifnJgbs0za' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1b-5NHIucyK2guOh9dBWuRjifnJgbs0za/view?usp=sharing */}
                        <div >
                            <img src={backend_api} alt="mentor certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>RestAPI with Django and Python</span>
                                <span>22 Oct 2023</span>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1BY3Ow06gSyfTfX8AZTut12KtFRFn3SCx' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1BY3Ow06gSyfTfX8AZTut12KtFRFn3SCx/view?usp=sharing */}
                        <div >
                            <img src={codestorm} alt="mentor certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Codestorm (Hackathon)</span>
                                <span>19th-20th Aug 2023</span>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1YvOuJ9sxyFX9hcjYQpgYQX_VP_bhrPXq' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1YvOuJ9sxyFX9hcjYQpgYQX_VP_bhrPXq/view?usp=drive_link */}
                        <div >
                            <img src={ai_workshop} alt="mentor certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Ai workshop</span>
                                <span>15th january 2023</span>
                            </span>
                        </div>
                    </a>
                </div>
                <div className="card">
                    <a href='https://drive.google.com/uc?id=1MDw-gtVrJEuryJpbvyJ9yHHQDJPM5ZiA' target="_blank" rel="noopener noreferrer" role='button'>
                        {/* https://drive.google.com/file/d/1MDw-gtVrJEuryJpbvyJ9yHHQDJPM5ZiA/view?usp=drive_link */}
                        <div >
                            <img src={python_workshop} alt="mentor certificate" className="card__img"></img>
                            <span className="card__footer">
                                <span>Python Workshop</span>
                                <span>30th june and 1th july 2022</span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
            <a href='https://drive.google.com/drive/folders/1YSns-EeDuRiK4zzWZ-YSeke_adgq5ISD?usp=sharing' className='projectsBtn'>See my more Certificates</a>
        </section>
    );
}

export default Certificates;