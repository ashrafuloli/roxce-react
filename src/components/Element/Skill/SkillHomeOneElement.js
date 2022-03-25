import React from 'react';
import {images} from "../../../utilities/Images";

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
                                            <input type="text" className="knob" value="0" data-rel="85"
                                                   data-linecap="round" data-width="140" data-height="140"
                                                   data-bgcolor="#fff" data-fgcolor="#fc8459" data-thickness=".15"
                                                   data-readonly="true" disabled/>
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
                                            <input type="text" className="knob" value="0" data-rel="67"
                                                   data-linecap="round" data-width="140" data-height="140"
                                                   data-bgcolor="#fff" data-fgcolor="#24c373" data-thickness=".15"
                                                   data-readonly="true" disabled/>
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
                                            <input type="text" className="knob" value="0" data-rel="83"
                                                   data-linecap="round" data-width="140" data-height="140"
                                                   data-bgcolor="#fff" data-fgcolor="#8f3cff" data-thickness=".15"
                                                   data-readonly="true" disabled/>
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
