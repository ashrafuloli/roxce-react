import React from 'react';
import {images} from "../../../utilities/Images";
import {A11y, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const TestimonialHomeOneSection = () => {
    return (
        <>
            <section className="testimonial__area pt-125 pb-130">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                            <div className="section__title-wrapper mb-70 text-center">
                                <span className="section__title-pre center">Testimonials</span>
                                <h2 className="section__title">What Our Clients Say About Roxce</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <Swiper
                                className="testimonial__slider swiper-container"
                                // install Swiper modules
                                modules={[Scrollbar, A11y]}
                                slidesPerView={3}
                                spaceBetween={30}
                                pagination={{clickable: true}}
                                scrollbar={{draggable: false}}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <div className="testimonial__item text-center grey-bg-2">
                                        <div className="testimonial__thumb mb-25">
                                            <img src={images.testimonial1} alt="thumb"/>
                                        </div>
                                        <div className="testimonial__content">
                                            <p>On the other hand denoune with righteou indignat and dislike menar so
                                                beguiled demoralized echarms of pleasure of the moment so blinded by
                                                desire that systems</p>
                                            <div className="testimonial__avater-info">
                                                <h4>David Warner</h4>
                                                <span>CEO & Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__item text-center grey-bg-2">
                                        <div className="testimonial__thumb mb-25">
                                            <img src={images.testimonial2} alt="thumb"/>
                                        </div>
                                        <div className="testimonial__content">
                                            <p>On the other hand denoune with righteou indignat and dislike menar so
                                                beguiled demoralized echarms of pleasure of the moment so blinded by
                                                desire that systems</p>
                                            <div className="testimonial__avater-info">
                                                <h4>Shahnewaz Sakli</h4>
                                                <span>Envato Author</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__item text-center grey-bg-2">
                                        <div className="testimonial__thumb mb-25">
                                            <img src={images.testimonial3} alt="thumb"/>
                                        </div>
                                        <div className="testimonial__content">
                                            <p>On the other hand denoune with righteou indignat and dislike menar so
                                                beguiled demoralized echarms of pleasure of the moment so blinded by
                                                desire that systems</p>
                                            <div className="testimonial__avater-info">
                                                <h4>Joss Butler</h4>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__item text-center grey-bg-2">
                                        <div className="testimonial__thumb mb-25">
                                            <img src={images.testimonial4} alt="thumb"/>
                                        </div>
                                        <div className="testimonial__content">
                                            <p>On the other hand denoune with righteou indignat and dislike menar so
                                                beguiled demoralized echarms of pleasure of the moment so blinded by
                                                desire that systems</p>
                                            <div className="testimonial__avater-info">
                                                <h4>Khan Mohammad</h4>
                                                <span>Senior Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__item text-center grey-bg-2">
                                        <div className="testimonial__thumb mb-25">
                                            <img src={images.testimonial5} alt="thumb"/>
                                        </div>
                                        <div className="testimonial__content">
                                            <p>On the other hand denoune with righteou indignat and dislike menar so
                                                beguiled demoralized echarms of pleasure of the moment so blinded by
                                                desire that systems</p>
                                            <div className="testimonial__avater-info">
                                                <h4>Steve Smith</h4>
                                                <span>Motion Expart</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialHomeOneSection;
