import React from 'react';
import {images} from "../../../utilities/Images";

const AboutHomeThree = () => {
    return (
        <>
            <section className="about__area pt-255 green-bg-2 p-relative z-index-1">
                <div className="about__bg" style={{backgroundImage: `url(${images.about03AboutBg})`}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about__img w-img">
                                <img src={images.about03About1} alt=""/>
                            </div>
                        </div>
                        <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
                            <div className="about__wrapper-3">
                                <div className="section__title-wrapper mb-35">
                                    <span
                                        className="section__title-pre section__title-pre-3 section__title-pre-yellow yellow">Who We Are</span>
                                    <h2 className="section__title section__title-2 section__title-white">Explore About
                                        Painting Services</h2>
                                </div>
                                <p className="about__quote"> Accusantium doloremq laudantium totam rem esd aperiam eaque
                                    quae abillo inventore</p>
                                <p className="ab-text">Sed ut perspiciatis unde omnis iste natus error sit voluptate
                                    accusantium doloremq laudantium totam rem aperiam eaque quae ab illo inventore
                                    veritatis et quasi architecto</p>

                                <div className="about__features">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <div className="about__features-icon mr-15">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="about__features-content">
                                                <h5>Commercial Painting Services</h5>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="about__features-icon mr-15">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="about__features-content">
                                                <h5>Industrial Painting Services</h5>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="about__features-icon mr-15">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="about__features-content">
                                                <h5>Residencial Painting Services</h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHomeThree;
