import React from 'react';
import {images} from "../../../utilities/Images";

const PortfolioHomeElement = () => {
    return (
        <>
            <section className="portfolio__area portfolio__bg portfolio__padding pb-100 pl-55 pr-55">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6">
                            <div className="portfolio__item p-relative mb-30">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio1} alt="image"/>

                                    <div className="portfolio__plus transition-3">
                                        <a className="popup-image" href="assets/img/portfolio/portfolio-1.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio__content transition-3">
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6">
                            <div className="portfolio__item p-relative mb-30">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio2} alt="image"/>

                                    <div className="portfolio__plus transition-3">
                                        <a className="popup-image" href="assets/img/portfolio/portfolio-2.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio__content transition-3">
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6">
                            <div className="portfolio__item p-relative mb-30">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio3} alt="image"/>

                                    <div className="portfolio__plus transition-3">
                                        <a className="popup-image" href="assets/img/portfolio/portfolio-3.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio__content transition-3">
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="portfolio__item p-relative mb-30">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio4} alt="image"/>

                                    <div className="portfolio__plus transition-3">
                                        <a className="popup-image" href="assets/img/portfolio/portfolio-4.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio__content transition-3">
                                    <h3 className="portfolio__title">
                                        <a href="portfolio-details.html">Painting Outside In House</a>
                                    </h3>
                                    <p>Color Painting Services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="portfolio__item p-relative mb-30">
                                <div className="portfolio__thumb w-img">
                                    <img src={images.portfolio5} alt="image"/>

                                    <div className="portfolio__plus transition-3">
                                        <a className="popup-image" href="assets/img/portfolio/portfolio-5.jpg">
                                            <i className="far fa-plus"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio__content transition-3">
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

export default PortfolioHomeElement;
