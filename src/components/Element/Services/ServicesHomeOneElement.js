import React from 'react';
import {images} from "../../../utilities/Images";

const ServicesHomeOneElement = () => {
    return (<>
        <section className="services__area p-relative z-index-11 pt-130 pb-55">
            <div className="services__bg" style={{backgroundImage: `url(${images.servicesBg})`}}/>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section__title-wrapper mb-80 text-center">
                            <span className="section__title-pre section__title-pre-white center">What We Offer</span>
                            <h2 className="section__title section__title-white">We Help You For Made Your Dream
                                Painting</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services__item p-relative mb-30">
                            <div className="services__thumb w-img">
                                <img src={images.services1} alt="service"/>
                            </div>
                            <div className="services__content text-center">
                                <div className="services__icon">
                                    <i className="flaticon-paint-1"/>
                                </div>
                                <h3 className="services__title">
                                    <a href="services-details.html">Residential Interior</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                <a href="services-details.html" className="link-btn-2">
                                    read more
                                    <i className="far fa-arrow-right"/>
                                    <i className="far fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services__item p-relative mb-30">
                            <div className="services__thumb w-img">
                                <img src={images.services2} alt="service"/>
                            </div>
                            <div className="services__content text-center">
                                <div className="services__icon">
                                    <i className="flaticon-varnish"/>
                                </div>
                                <h3 className="services__title">
                                    <a href="services-details.html">Commercial Interior</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                <a href="services-details.html" className="link-btn-2">
                                    read more
                                    <i className="far fa-arrow-right"/>
                                    <i className="far fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services__item p-relative mb-30">
                            <div className="services__thumb w-img">
                                <img src={images.services3} alt="service"/>
                            </div>
                            <div className="services__content text-center">
                                <div className="services__icon">
                                    <i className="flaticon-paint-2"/>
                                </div>
                                <h3 className="services__title">
                                    <a href="services-details.html">Industrial Interior</a>
                                </h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                <a href="services-details.html" className="link-btn-2">
                                    read more
                                    <i className="far fa-arrow-right"/>
                                    <i className="far fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default ServicesHomeOneElement;
