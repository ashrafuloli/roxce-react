import React from 'react';
import {images} from "../../../utilities/Images";

const CounterHomeTwo = () => {
    return (
        <>
            <section className="counter__area pt-340 pb-100 grey-bg p-relative z-index-1">
                <div className="counter__bg" style={{backgroundImage: `url(${images.counterMap})`}}></div>
                <div className="container">
                    <div className="counter__wrapper p-relative z-index-1">
                        <div className="row">
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                                <div className="counter__item-wrapper mt-150">
                                    <div className="counter__item text-center white-bg mb-30">
                                        <div className="counter__icon mb-15">
                                            <img src={images.counter1} alt="counter"/>
                                        </div>
                                        <div className="counter__content">
                                            <h3><span className="counter">3620</span></h3>
                                            <p>Project Complate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                                <div className="counter__item-wrapper mt-35">
                                    <div className="counter__item text-center white-bg mb-30">
                                        <div className="counter__icon mb-15">
                                            <img src={images.counter2} alt="counter"/>
                                        </div>
                                        <div className="counter__content">
                                            <h3><span className="counter">8756</span></h3>
                                            <p>Satisfied Clients</p>
                                        </div>
                                    </div>
                                    <div className="counter__item counter__item-text text-center green-bg-2 mb-30">
                                        <h3 className="counter__text white-color">25 <br/> Year Of Experience</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                                <div className="counter__item-wrapper">
                                    <div className="counter__item counter__item-text text-center yellow-bg mb-30">
                                        <h3 className="counter__text">Professional <br/> & <br/> Trusted</h3>
                                    </div>
                                    <div className="counter__item text-center white-bg mb-30">
                                        <div className="counter__icon mb-15">
                                            <img src={images.counter3} alt="counter"/>
                                        </div>
                                        <div className="counter__content">
                                            <h3><span className="counter">8796</span></h3>
                                            <p>Awards Winning</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4">
                                <div className="counter__item-wrapper mt-125">
                                    <div className="counter__item text-center white-bg mb-30">
                                        <div className="counter__icon mb-15">
                                            <img src={images.counter4} alt="counter"/>
                                        </div>
                                        <div className="counter__content">
                                            <h3><span className="counter">4563</span></h3>
                                            <p>Multi Color System</p>
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

export default CounterHomeTwo;
