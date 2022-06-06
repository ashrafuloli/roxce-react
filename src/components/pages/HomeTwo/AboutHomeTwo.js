import React from 'react';
import {images} from "../../../utilities/Images";

const AboutHomeTwo = () => {
    return (
        <>
            <section className="about__area mb--240 p-relative z-index-111">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 col-lg-6">
                            <div className="about__thumb-3 w-img pr-20">
                                <img src={images.about02About2} alt=""/>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-6">
                            <div className="about__wrapper-2 pl-20 ">
                                <div className="section__title-wrapper-2 mb-25">
                                    <span className="section__title-pre section__title-pre-2">About Company</span>
                                    <h2 className="section__title section__title-2">
                                        Better Painting Solution Company
                                    </h2>
                                </div>
                                <p>Sed ut perspicis unde omnis iste natus error sit volaccu sante dolore lautium totam
                                    rem aperiam eaque ques abillo inventore veritatis et quasi architeo beate vita dicta
                                    sunte</p>
                                <div className="about__item-wrapper">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="about__item white-bg text-center mb-30">
                                                <div className="about__icon mb-15">
                                                    <i className="flaticon-painting-bucket"/>
                                                </div>
                                                <div className="about__content-2">
                                                    <h3 className="about__title-2">
                                                        <a href="services-details.html">
                                                            Professional Painting
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Sed ut perspicis unde omnis iste natus error sit volaccu
                                                        sadolore
                                                    </p>
                                                    <a href="services-details.html" className="link-btn">
                                                        <i className="far fa-arrow-right"/>
                                                        <i className="far fa-arrow-right"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                            <div className="about__item white-bg text-center mb-30">
                                                <div className="about__icon yellow mb-15">
                                                    <i className="flaticon-sketch"/>
                                                </div>
                                                <div className="about__content-2">
                                                    <h3 className="about__title-2">
                                                        <a href="services-details.html">
                                                            PDCA Certified Member
                                                        </a>
                                                    </h3>
                                                    <p>
                                                        Sed ut perspicis unde omnis iste natus error sit volaccu
                                                        sadolore
                                                    </p>
                                                    <a href="services-details.html" className="link-btn">
                                                        <i className="far fa-arrow-right"/>
                                                        <i className="far fa-arrow-right"/>
                                                    </a>
                                                </div>
                                            </div>
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

export default AboutHomeTwo;
