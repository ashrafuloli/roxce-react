import React from 'react';
import {images} from "../../../utilities/Images";

const CounterHomeThree = () => {
    return (
        <>
            <section className="counter__area pb-100 p-relative pt-95 z-index-1">
                <div className="counter__bg" style={{backgroundImage: `url(${images.counterMap2})`}}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-6 ">
                            <div className="counter__wrapper-3 pt-50 pr-50">
                                <div className="section__title-wrapper mb-80 ">
                                    <span className="section__title-pre section__title-pre-3">Company Statistics</span>
                                    <h2 className="section__title section__title-2">Explore About Our Painting Services
                                        Achievement</h2>
                                </div>
                                <div className="counter__about d-sm-flex align-items-center mb-30">
                                    <div className="counter__about-thumb mr-30">
                                        <img src={images.counter5} alt=""/>
                                    </div>
                                    <div className="counter__about-text">
                                        <p>Sed ut perspiciais unde omnis iste natuero voluptat accusantium dolore
                                            lautium totam rem aperiam eaque ques abillo inventore veritatis et quasi
                                            architeo beate </p>
                                    </div>
                                </div>
                                <div className="counter__list mb-45">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <div className="counter__list-icon mr-20">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="counter__list-content">
                                                <p>Dolore lautium totam rem aperiam eaque ques abillo inventore
                                                    veritatis et quasi architeo beate vita</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="counter__list-icon mr-20">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="counter__list-content">
                                                <p>Quis autem vel eum iure reprehenderit quevo uptate velit esse quam
                                                    nihil molestiae consequatur</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <a href="about.html" className="r-btn r-btn-yellow">
                                    Read more <i className="far fa-arrow-right"/>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-xxl-3 offset-xxl-1 col-xl-3 offset-xl-1 col-lg-3 offset-lg-0 col-md-4 offset-md-2 col-sm-6">
                            <div className="counter__item-wrapper mt-115">
                                <div className="counter__item counter__item-3 text-center white-bg mb-30">
                                    <div className="counter__icon mb-15">
                                        <img src={images.counter1} alt=""/>
                                    </div>
                                    <div className="counter__content">
                                        <h3><span className="counter">3620</span></h3>
                                        <p>Project Complate</p>
                                    </div>
                                </div>
                                <div className="counter__item counter__item-3 text-center white-bg mb-30">
                                    <div className="counter__icon mb-15">
                                        <img src={images.counter3} alt=""/>
                                    </div>
                                    <div className="counter__content">
                                        <h3><span className="counter">8796</span></h3>
                                        <p>Awards Winning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="counter__item-wrapper">
                                <div className="counter__item counter__item-3 text-center white-bg mb-30">
                                    <div className="counter__icon mb-15">
                                        <img src={images.counter2} alt=""/>
                                    </div>
                                    <div className="counter__content">
                                        <h3><span className="counter">8756</span></h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                                <div className="counter__item counter__item-3 text-center white-bg mb-30">
                                    <div className="counter__icon mb-15">
                                        <img src={images.counter4} alt=""/>
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
            </section>
        </>
    );
};

export default CounterHomeThree;
