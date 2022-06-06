import React from 'react';
import {images} from "../../../utilities/Images";

const ContactHomeThree = () => {
    return (
        <>
            <section className="contact__area pt-125 pb-130" style={{backgroundImage: `url(${images.contact3})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 offset-xxl-4 col-xl-8 offset-xl-4 col-lg-10 offset-lg-2">
                            <div className="contact__wrapper-3 pl-50">
                                <div className="section__title-wrapper mb-50">
                                    <span className="section__title-pre section__title-pre-3 section__title-pre-white">
                                        Make An Appointment
                                    </span>
                                    <h2 className="section__title section__title-2 section__title-white">
                                        Need Any Helps For <br/> Dream Painting
                                    </h2>
                                </div>
                                <div className="contact__form-3">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-3">
                                                    <input type="text" placeholder="Your Full Name"/>
                                                    <i className="far fa-user"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-3">
                                                    <input type="tel" placeholder="Phone Number"/>
                                                    <i className="far fa-phone"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                                <div className="contact__input-3">
                                                    <input type="email" placeholder="Your Email Address"/>
                                                    <i className="far fa-envelope"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-3">
                                                    <select>
                                                        <option>Select Services</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                        <option>Option 4</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact__input-3">
                                                    <input type="text" placeholder="Locations / Area"/>
                                                    <i className="far fa-map-marker-alt"/>
                                                </div>
                                            </div>
                                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                                                <div className="contact__btn-3">
                                                    <button type="submit" className="r-btn r-btn-yellow">
                                                        Make appointment <i className="far fa-arrow-right"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactHomeThree;
