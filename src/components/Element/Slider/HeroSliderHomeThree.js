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
import PopupVideoSlider from "../PopupVideo/PopupVideoSlider";
import {images} from "../../../utilities/Images";
// import 'swiper/css/scrollbar';
// import * as url from "url";

const HeroSliderHomeThree = () => {
    return (
        <>
            <div className="slider__area slider__padding pl-70 pr-70">
                <Swiper
                    className="slider__active-2 swiper-container"
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
                            className="single-slider slider__height slider__height-2 slider__overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${images.slider3})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content-2 text-center p-relative z-index-1">
                                            <div className="slider__youtube mb-50">
                                                <PopupVideoSlider/>
                                            </div>
                                            <h3 className="slider__title-2">Dream Colors</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                                abillo inventore
                                            </p>
                                            <div className="slider__btn">
                                                <Link to="/contact" className="r-btn r-btn-yellow mr-5">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn r-btn-border r-btn-border-3">
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
                            className="single-slider slider__height slider__height-2 slider__overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${images.slider4})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content-2 text-center p-relative z-index-1">
                                            <div className="slider__youtube mb-50">
                                                <PopupVideoSlider/>
                                            </div>
                                            <h3 className="slider__title-2">Dream Colors</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                                abillo inventore
                                            </p>
                                            <div className="slider__btn">
                                                <Link to="/contact" className="r-btn r-btn-yellow mr-5">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn r-btn-border r-btn-border-3">
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
                            className="single-slider slider__height slider__height-2 slider__overlay d-flex align-items-center"
                            style={{backgroundImage: `url(${images.slider5})`}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xxl-12">
                                        <div className="slider__content-2 text-center p-relative z-index-1">
                                            <div className="slider__youtube mb-50">
                                                <PopupVideoSlider/>
                                            </div>
                                            <h3 className="slider__title-2">Dream Colors</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                                                abillo inventore
                                            </p>
                                            <div className="slider__btn">
                                                <Link to="/contact" className="r-btn r-btn-yellow mr-5">
                                                    get started <i className="far fa-arrow-right"/>
                                                </Link>
                                                <Link to="/services" className="r-btn r-btn-border r-btn-border-3">
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

export default HeroSliderHomeThree;
