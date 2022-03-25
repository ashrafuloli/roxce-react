import React from 'react';

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectFade} from 'swiper';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import {Link} from "react-router-dom";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {images} from "../../../utilities/Images";
// import 'swiper/css/scrollbar';
// import * as url from "url";

const HeroSliderHome = () => {
    return (
        <>
            <div className="slider__area">
                <Swiper
                    className="slider__area"
                    // install Swiper modules
                    effect="fade"
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: false}}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div
                            className="single-slider  slider__height slider__overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${images.slider1})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content text-center">
                                            <span>25 Years Of Experience</span>
                                            <h2 className="slider__title">Painting Service Company</h2>
                                            <div className="slider__btn">
                                                <Link to="/contact" className="r-btn r-btn-green mr-10">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn">
                                                    our services <i className="far fa-arrow-right"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="single-slider slider__height slider__overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${images.slider2})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content text-center">
                                            <span>25 Years Of Experience</span>
                                            <h2 className="slider__title">Painting Service Company</h2>
                                            <div className="slider__btn" data-animation="fadeInUp" data-delay=".6s">
                                                <Link to="/contact" className="r-btn r-btn-green mr-10">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn">
                                                    our services <i className="far fa-arrow-right"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="single-slider slider__height slider__overlay d-flex align-items-center"
                            style={{backgroundImage: "url(assets/img/slider/slider-3.jpg)"}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content text-center">
                                            <span>25 Years Of Experience</span>
                                            <h2 className="slider__title">Painting Service Company</h2>
                                            <div className="slider__btn">
                                                <Link to="/contact" className="r-btn r-btn-green mr-10">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn">
                                                    our services <i className="far fa-arrow-right"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default HeroSliderHome;
