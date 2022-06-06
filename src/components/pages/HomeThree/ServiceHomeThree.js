import React from 'react';
import {images} from "../../../utilities/Images";
import services4 from "../../../assets/img/services/03/services-1.jpg";

const ServiceHomeThree = () => {
    return (
        <>
            <section className="services__area p-relative z-index-11 pt-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                            <div className="section__title-wrapper mb-80 text-center">
                                <span className="section__title-pre section__title-pre-3 center">What We Offer</span>
                                <h2 className="section__title section__title-2">We Help You For Made Your Dream
                                    Painting</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-3 mb-30 transition-3 p-relative">
                                <div className="services__thumb-3 w-img fix">
                                    <img src={images.services4} alt="image"/>
                                </div>
                                <div className="services__content-3">
                                    <div className="services__icon services__icon-3">
                                        <i className="flaticon-paint-1"/>
                                    </div>
                                    <h3 className="services__title-3">
                                        <a href="services-details.html">Commercial Interior</a>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-3 mb-30 transition-3 p-relative">
                                <div className="services__thumb-3 w-img fix">
                                    <img src={images.services5} alt="image"/>
                                </div>
                                <div className="services__content-3">
                                    <div className="services__icon services__icon-3">
                                        <i className="flaticon-varnish"/>
                                    </div>
                                    <h3 className="services__title-3">
                                        <a href="services-details.html">Residential Interior</a>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="services__item-3 mb-30 transition-3 p-relative">
                                <div className="services__thumb-3 w-img fix">
                                    <img src={images.services6} alt="image"/>
                                </div>
                                <div className="services__content-3">
                                    <div className="services__icon services__icon-3">
                                        <i className="flaticon-paint-2"/>
                                    </div>
                                    <h3 className="services__title-3">
                                        <a href="services-details.html">Industrial Interior</a>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit volupt ateaccu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceHomeThree;
