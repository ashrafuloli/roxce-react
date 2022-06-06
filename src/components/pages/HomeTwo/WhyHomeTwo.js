import React from 'react';
import {images} from "../../../utilities/Images";

const WhyHomeTwo = () => {
    return (
        <>
            <section className="why__area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 col-lg-6">
                            <div className="why__thumb why__thumb-2 pr-70 w-img">
                                <img src={images.why2} alt="image"/>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6">
                            <div className="why__wrapper-2 pt-25 pr-30">
                                <div className="section__title-wrapper-2 mb-30">
                                    <span className="section__title-pre section__title-pre-2">What We Do</span>
                                    <h2 className="section__title section__title-2">Why People’s Loves Our
                                        Solutions</h2>
                                </div>
                                <p>Sed ut perspicis unde omnis iste natus error sit volaccu sante dolore lautium totam
                                    rem aperiam eaque ques abillo inventore veritatis et quasi architeo beate vita dicta
                                    sunte</p>

                                <div className="why__item-wrapper">
                                    <div className="why__item-2 d-flex align-items-start">
                                        <div className="why__icon-2 mr-30">
                                            <img src={images.whyIcon4} alt="image"/>
                                        </div>
                                        <div className="why__content-2">
                                            <h3 className="why__title-2">PDCA Certified Member</h3>
                                            <p>Perspicis unde omnis iste natus error sit volaccu san dolore lautium
                                                totam rem aperiam eaque ques</p>
                                        </div>
                                    </div>
                                    <div className="why__item-2 d-flex align-items-start">
                                        <div className="why__icon-2 mr-30">
                                            <img src={images.whyIcon5} alt="image"/>
                                        </div>
                                        <div className="why__content-2">
                                            <h3 className="why__title-2">Flexible Schedule Options.</h3>
                                            <p>Perspicis unde omnis iste natus error sit volaccu san dolore lautium
                                                totam rem aperiam eaque ques</p>
                                        </div>
                                    </div>
                                    <div className="why__item-2 d-flex align-items-start">
                                        <div className="why__icon-2 mr-30">
                                            <img src={images.whyIcon6} alt="image"/>
                                        </div>
                                        <div className="why__content-2">
                                            <h3 className="why__title-2">Eco Friendly & Clean Area</h3>
                                            <p>Perspicis unde omnis iste natus error sit volaccu san dolore lautium
                                                totam rem aperiam eaque ques</p>
                                        </div>
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

export default WhyHomeTwo;
