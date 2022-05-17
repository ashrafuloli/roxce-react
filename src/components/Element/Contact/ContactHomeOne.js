import React from 'react';
import {images} from "../../../utilities/Images";

const ContactHomeOne = () => {
    return (
        <>
            <section className="contact__area pt-235 pb-130 pink-bg p-relative z-index-1 fix">
                <div className="contact__bg" style={{backgroundImage: `url(${images.map})`}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6">
                            <div className="contact__wrapper pr-70 p-relative">
                                <div className="section__title-wrapper mb-35">
                                    <span className="section__title-pre section__title-pre-white">
                                        Get In Touch
                                    </span>
                                    <h2 className="section__title section__title-white">
                                        Don’t Hesite Feel Free To Contact With us
                                    </h2>
                                </div>
                                <div className="contact__form">
                                    <form action="#">
                                        <div className="contact__input">
                                            <input type="text" placeholder="Your Full Name"/>
                                            <i className="far fa-user"/>
                                        </div>
                                        <div className="contact__input">
                                            <input type="text" placeholder="Your Email Address"/>
                                            <i className="fal fa-envelope"/>
                                        </div>
                                        <div className="contact__input">
                                            <textarea placeholder="Your Message"/>
                                        </div>
                                        <button type="submit" className="r-btn r-btn-white r-btn-plr-90">
                                            send message <i className="far fa-arrow-right"/>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6">
                            <div className="contact__thumb">
                                <div className="contact__thumb-1 m-img text-xl-end mb-80 mt-30">
                           <span>
                              <img src={images.contact1} alt="contact"/>
                           </span>
                                </div>
                                <div className="contact__thumb-2 m-img text-end">
                                    <img src={images.contact2} alt="contact"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactHomeOne;
