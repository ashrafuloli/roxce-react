import React from 'react';
import {images} from "../../../utilities/Images";

const PortfolioHomeThree = () => {
    return (
        <>
            <section className="portfolio__area mb--215">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="section__title-wrapper mb-80 text-center">
                                <span className="section__title-pre section__title-pre-3 center">Latest Project</span>
                                <h2 className="section__title section__title-2">Explore Our Professional Interior
                                    Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="portfolio__item-3 mb-30 p-relative fix">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio6} alt="image"/>
                                </div>
                                <div
                                    className="portfolio__content-3 transition-3 d-flex align-items-center justify-content-between">
                                    <div className="portfolio__content-3-inner">
                                        <h3 className="portfolio__title-3">
                                            <a href="portfolio-details.html">Painting Outside</a>
                                        </h3>
                                        <p>Color Painting Services</p>
                                    </div>
                                    <div className="portfolio__plus-3 transition-3">
                                        <a href="assets/img/portfolio/02/portfolio-1.jpg" className="popup-image">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="portfolio__item-3 mb-30 p-relative fix">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio7} alt="image"/>
                                </div>
                                <div
                                    className="portfolio__content-3 transition-3 d-flex align-items-center justify-content-between">
                                    <div className="portfolio__content-3-inner">
                                        <h3 className="portfolio__title-3">
                                            <a href="portfolio-details.html">Painting Outside</a>
                                        </h3>
                                        <p>Color Painting Services</p>
                                    </div>
                                    <div className="portfolio__plus-3">
                                        <a href="assets/img/portfolio/02/portfolio-2.jpg" className="popup-image">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="portfolio__item-3 mb-30 p-relative fix">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio8} alt="image"/>
                                </div>
                                <div
                                    className="portfolio__content-3 transition-3 d-flex align-items-center justify-content-between">
                                    <div className="portfolio__content-3-inner">
                                        <h3 className="portfolio__title-3">
                                            <a href="portfolio-details.html">Painting Outside</a>
                                        </h3>
                                        <p>Color Painting Services</p>
                                    </div>
                                    <div className="portfolio__plus-3 transition-3">
                                        <a href="assets/img/portfolio/02/portfolio-3.jpg" className="popup-image">
                                            <i className="far fa-plus"/>
                                        </a>
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

export default PortfolioHomeThree;
