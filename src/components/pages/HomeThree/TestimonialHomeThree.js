import React from 'react';
import {images} from "../../../utilities/Images";
import {A11y, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import testimonial9 from "../../../assets/img/testimonial/03/testi-1.jpg";

const TestimonialHomeThree = () => {
    return (
        <>
            <section className="testimonial__area testimonial__area-2 pt-310 pb-130"
                     style={{backgroundImage: `url(${images.testimonial8})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-8">
                            <div className="testimonial__wrapper-3">
                                <div className="section__title-wrapper mb-60 ">
                                    <span className="section__title-pre section__title-pre-3">Our Testimonials</span>
                                    <h2 className="section__title section__title-2">What Our Clients Say About Us</h2>
                                </div>

                                <div className="testimonial__slider-wrapper p-relative">
                                    <Swiper
                                        className="testimonial__slider-3 swiper-container p-relative"
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        // navigation
                                        pagination={{clickable: true}}
                                        scrollbar={{draggable: false}}
                                        // onSwiper={(swiper) => console.log(swiper)}
                                        // onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                            <div className="testimonial__item-3">
                                                <div className="testimonial__content-3 white-bg">
                                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                                        fugiat quo voluptas nulla pariatu inventore veritatis et quasi
                                                        architecto beatae vitae </p>
                                                    <div className="testimonial__avater-info-3">
                                                        <h4>David Warner</h4>
                                                        <span>CEO & Founder</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avater-3 pl-25">
                                                    <div className="testimonial__avater-3-thumb">
                                                        <img src={images.testimonial9} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial__item-3">
                                                <div className="testimonial__content-3 white-bg">
                                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                                        fugiat quo voluptas nulla pariatu inventore veritatis et quasi
                                                        architecto beatae vitae </p>
                                                    <div className="testimonial__avater-info-3">
                                                        <h4>David Warner</h4>
                                                        <span>CEO & Founder</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avater-3 pl-25">
                                                    <div className="testimonial__avater-3-thumb">
                                                        <img src={images.testimonial10} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial__item-3">
                                                <div className="testimonial__content-3 white-bg">
                                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                                        fugiat quo voluptas nulla pariatu inventore veritatis et quasi
                                                        architecto beatae vitae </p>
                                                    <div className="testimonial__avater-info-3">
                                                        <h4>David Warner</h4>
                                                        <span>CEO & Founder</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avater-3 pl-25">
                                                    <div className="testimonial__avater-3-thumb">
                                                        <img src={images.testimonial11} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial__item-3">
                                                <div className="testimonial__content-3 white-bg">
                                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                                        fugiat quo voluptas nulla pariatu inventore veritatis et quasi
                                                        architecto beatae vitae </p>
                                                    <div className="testimonial__avater-info-3">
                                                        <h4>David Warner</h4>
                                                        <span>CEO & Founder</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avater-3 pl-25">
                                                    <div className="testimonial__avater-3-thumb">
                                                        <img src={images.testimonial12} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="testimonial__item-3">
                                                <div className="testimonial__content-3 white-bg">
                                                    <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                                        esse quam nihil molestiae consequatur, vel illum qui dolorem eum
                                                        fugiat quo voluptas nulla pariatu inventore veritatis et quasi
                                                        architecto beatae vitae </p>
                                                    <div className="testimonial__avater-info-3">
                                                        <h4>David Warner</h4>
                                                        <span>CEO & Founder</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial__avater-3 pl-25">
                                                    <div className="testimonial__avater-3-thumb">
                                                        <img src={images.testimonial13} alt="image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TestimonialHomeThree;
