import React from 'react';
import {images} from "../../../utilities/Images";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";

const SkillHomeOneElement = () => {
    return (
        <>
            <section className="skill__area pb-135 pt-50 p-relative z-index-1">
                <div className="skill__shape">
                    <img className="skill__shape-1" src={images.skillShape1} alt="skill"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-6 col-lg-7">
                            <div className="skill__wrapper pr-35">
                                <div className="section__title-wrapper mb-30">
                                    <span className="section__title-pre">Best Skills</span>
                                    <h2 className="section__title">
                                        Discover Our <br/> Best Working Skills & Experience
                                    </h2>
                                </div>
                                <p> But must explain to you how all this mistaken idea of denoun cing pleasure and
                                    praising pain was born and I will give you a complete account of the system and
                                    expound the actual teach ings of the great explorer of the truth the master-builder
                                    of human happiness one rejects dislikes</p>
                                <a href="about.html" className="r-btn">
                                    learn more <i className="far fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-7">
                            <div className="skill__progress pr-30">
                                <div className="skill__progress-item d-sm-flex align-items-center mb-30">
                                    <div className="skill__progress-circle mr-30">
                                        <div className="progress-circular">
                                            <CircularProgressbar
                                                value={85}
                                                text={`${85}%`}
                                                styles={
                                                    buildStyles({
                                                        rotation: 0,
                                                        textSize: '16px',
                                                        pathTransitionDuration: 0.5,
                                                        pathTransition: 'none',
                                                        pathColor: `#fc8459`,
                                                        textColor: '#000',
                                                        trailColor: '#fff',
                                                        backgroundColor: '#fff',
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="skill__progress-content">
                                        <h3>Resindential Interior</h3>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium
                                        </p>
                                    </div>
                                </div>
                                <div className="skill__progress-item d-sm-flex align-items-center mb-30">
                                    <div className="skill__progress-circle mr-30">
                                        <div className="progress-circular">
                                            <CircularProgressbar
                                                value={67}
                                                text={`${67}%`}
                                                styles={
                                                    buildStyles({
                                                        rotation: 0,
                                                        textSize: '16px',
                                                        pathTransitionDuration: 0.5,
                                                        pathTransition: 'none',
                                                        pathColor: `#24c373`,
                                                        textColor: '#000',
                                                        trailColor: '#fff',
                                                        backgroundColor: '#fff',
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="skill__progress-content">
                                        <h3>Commercial Interior</h3>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium
                                        </p>
                                    </div>
                                </div>
                                <div className="skill__progress-item d-sm-flex align-items-center mb-30">
                                    <div className="skill__progress-circle mr-30">
                                        <div className="progress-circular">
                                            <CircularProgressbar
                                                value={83}
                                                text={`${83}%`}
                                                styles={
                                                    buildStyles({
                                                        rotation: 0,
                                                        textSize: '16px',
                                                        pathTransitionDuration: 0.5,
                                                        pathTransition: 'none',
                                                        pathColor: `#8f3cff`,
                                                        textColor: '#000',
                                                        trailColor: '#fff',
                                                        backgroundColor: '#fff',
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="skill__progress-content">
                                        <h3>Industrial Interior</h3>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SkillHomeOneElement;
