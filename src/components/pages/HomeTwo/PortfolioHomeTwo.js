import React from 'react';
import {images} from "../../../utilities/Images";
import portfolio6 from "../../../assets/img/portfolio/02/portfolio-1.jpg";

const PortfolioHomeTwo = () => {
    return (
        <>
            <section className="portfolio__area portfolio__bg portfolio__bg-2 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                            <div className="section__title-wrapper-2 mb-80 text-center">
                                <span className="section__title-pre section__title-pre-2 center">
                                    Latest Project
                                </span>
                                <h2 className="section__title section__title-2">
                                    Explore Our Professional Interior Projects
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="portfolio__item-2 p-relative mb-30">
                                <div className="portfolio__thumb-2 w-img">
                                    <img src={images.portfolio6} alt="portfolio"/>
                                </div>
                                <div className="portfolio__content-2 transition-3">
                                    <div className="portfolio__plus-2 transition-3 mb-20">
                                        <a className="popup-image" href="assets/img/portfolio/02/portfolio-1.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="portfolio__item-2 p-relative mb-30">
                                <div className="portfolio__thumb-2 w-img">
                                    <img src={images.portfolio7} alt="portfolio"/>
                                </div>
                                <div className="portfolio__content-2 transition-3">
                                    <div className="portfolio__plus-2 transition-3 mb-20">
                                        <a className="popup-image" href="assets/img/portfolio/02/portfolio-2.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="portfolio__item-2 p-relative mb-30">
                                <div className="portfolio__thumb-2 w-img">
                                    <img src={images.portfolio8} alt="portfolio"/>
                                </div>
                                <div className="portfolio__content-2 transition-3">
                                    <div className="portfolio__plus-2 transition-3 mb-20">
                                        <a className="popup-image" href="assets/img/portfolio/02/portfolio-3.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <div className="portfolio__item-2 p-relative mb-30">
                                <div className="portfolio__thumb-2 w-img">
                                    <img src={images.portfolio9} alt="portfolio"/>
                                </div>
                                <div className="portfolio__content-2 transition-3">
                                    <div className="portfolio__plus-2 transition-3 mb-20">
                                        <a className="popup-image" href="assets/img/portfolio/02/portfolio-4.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioHomeTwo;
