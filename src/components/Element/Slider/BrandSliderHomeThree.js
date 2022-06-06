import React from 'react';
import {A11y, Navigation, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {images} from "../../../utilities/Images";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BrandSliderHomeThree = () => {
    return (<>
        <section className="brand__area p-relative z-index-11 mb--125">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="brand__wrapper brand__bg brand__bg-2">
                            <div className=" pt-75 pb-80 white-bg">
                                <Swiper
                                    className="brand__slider swiper-container"
                                    // install Swiper modules
                                    modules={[Navigation, Scrollbar, A11y]}
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    // navigation
                                    pagination={{clickable: true}}
                                    scrollbar={{draggable: false}}
                                    // onSwiper={(swiper) => console.log(swiper)}
                                    // onSlideChange={() => console.log('slide change')}
                                >
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand7} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand8} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand9} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand10} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand11} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="brand__item">
                                            <img src={images.brand12} alt="brand"/>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default BrandSliderHomeThree;


