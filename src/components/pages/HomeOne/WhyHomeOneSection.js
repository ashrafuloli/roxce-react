import React from 'react';
import {images} from "../../../utilities/Images";

const WhyHomeOneSection = () => {
    return (
        <>
            <section className="why__area why__bg p-relative z-index-1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xxl-4 offset-xxl-2 col-xl-5">
                            <div className="why__thumb m-img ml-35">
                                <img src={images.why1} alt="thumb"/>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-7 col-lg-8">
                            <div className="why__wrapper pt-125 pb-125 pl-125">
                                <div className="section__title-wrapper mb-30">
                                    <span className="section__title-pre">Know About Us</span>
                                    <h2 className="section__title section__title-white">Why Choose Our Printing Service
                                        Company</h2>
                                </div>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and
                                    praising pain was born and I will give you a complete account of the system, and
                                    expound the actual teachings of the great explorer of the truth, the master-builder
                                    of human happiness. No one rejects</p>
                                <div className="why__inner d-sm-flex align-items-center">
                                    <div className="why__item text-center">
                                        <div className="why__icon mb-15">
                                            <img src={images.whyIcon1} alt="icon"/>
                                        </div>
                                        <div className="why__content">
                                            <h4 className="why__title">PDCA Certified Member</h4>
                                        </div>
                                    </div>
                                    <div className="why__item text-center">
                                        <div className="why__icon mb-15">
                                            <img src={images.whyIcon2} alt="icon"/>
                                        </div>
                                        <div className="why__content">
                                            <h4 className="why__title">Flexible Schedule Options.</h4>
                                        </div>
                                    </div>
                                    <div className="why__item text-center">
                                        <div className="why__icon mb-15">
                                            <img src={images.whyIcon3} alt="icon"/>
                                        </div>
                                        <div className="why__content">
                                            <h4 className="why__title">Eco Friendly & Clean Work Area</h4>
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

export default WhyHomeOneSection;
