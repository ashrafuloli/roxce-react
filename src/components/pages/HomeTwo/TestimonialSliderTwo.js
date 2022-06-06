import React from 'react';
import {images} from "../../../utilities/Images";
import {A11y, EffectFade, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';

const TestimonialSliderTwo = () => {
    return (
        <>
            <section className="testimonial__area">
                <div className="container">
                    <div className="testimonial__inner green-bg-2 p-relative z-index-1 fix">
                        <div className="row">
                            <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-6">
                                <div className="testimonial__wrapper-2 pt-95 pr-85 pb-100">
                                    <div className="section__title-wrapper-2 mb-30">
                                        <span
                                            className="section__title-pre section__title-pre-2 section__title-pre-white">
                                            Our testimonials
                                        </span>
                                        <h2 className="section__title section__title-2 section__title-white">
                                            What Our Clients Say About Us
                                        </h2>
                                    </div>
                                    <div className="testimonial__quote-icon ">
                                        <img src={images.testimonialQuote} alt=""/>
                                    </div>
                                    <Swiper
                                        className="testimonial__slider-2 swiper-container"
                                        modules={[Scrollbar, A11y, EffectFade]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        scrollbar={{draggable: false}}
                                    >
                                        <SwiperSlide>
                                            <div className="testimonial__item-2">
                                                <div className="testimonial__content-2">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem
                                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                        abillo inventore veritatis et quasi architecto beataees vitae
                                                        dicta sunt explicabo </p>
                                                </div>
                                                <div className="testimonial__avater d-sm-flex">
                                                    <div className="testimonial__thumb testimonial__thumb-2 mr-30">
                                                        <img src={images.testimonial1} alt="testimonial"/>
                                                    </div>
                                                    <div
                                                        className="testimonial__avater-info testimonial__avater-info-2">
                                                        <h4>Shahnewaz Sakil</h4>
                                                        <span>Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial__item-2">
                                                <div className="testimonial__content-2">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem
                                                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                                        abillo inventore veritatis et quasi architecto beataees vitae
                                                        dicta sunt explicabo </p>
                                                </div>
                                                <div className="testimonial__avater d-sm-flex">
                                                    <div className="testimonial__thumb testimonial__thumb-2 mr-30">
                                                        <img src={images.testimonial2} alt="testimonial"/>
                                                    </div>
                                                    <div
                                                        className="testimonial__avater-info testimonial__avater-info-2">
                                                        <h4>David Warner</h4>
                                                        <span>Web Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="testimonial__img mt-45 ml-25 p-relative">
                                    <div className="testimonial__shape">
                                        <img className="testimonial__shape-1" src={images.testimonial6}
                                             alt="testimonial"/>
                                    </div>
                                    <img src={images.testimonial7} alt="testimonial"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialSliderTwo;
