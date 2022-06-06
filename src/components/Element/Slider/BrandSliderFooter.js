import React from 'react';
import {A11y, Navigation, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {images} from "../../../utilities/Images";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BrandSliderFooter = () => {
    return (
        <>
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
                        <img src={images.brand1} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand2} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand3} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand4} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand5} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand6} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand1} alt="brand"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__item">
                        <img src={images.brand2} alt="brand"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default BrandSliderFooter;
