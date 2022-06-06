import React from 'react';
import {images} from "../../../utilities/Images";
import PopupFeatureHomeTwo from "../../Element/PopupVideo/PopupFeatureHomeTwo";

const FeaturesHomeTwo = () => {
    return (
        <>
            <section className="features__area pt-125 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-6 col-lg-7">
                            <div className="features__wrapper-2 pr-55">
                                <div className="section__title-wrapper-2 mb-25">
                                    <span className="section__title-pre section__title-pre-2">Core Features</span>
                                    <h2 className="section__title section__title-2">Explore About Our Core Features</h2>
                                </div>
                                <p>Sed ut perspiciais unde omnis iste natus error sit voluptat
                                    accusantium dolore lautium totam rem aperiam eaque ques
                                    abillo inventore veritatis et quasi architeo beate vita dicta
                                    sunt explicaboemo enim ipsam voluptatem</p>
                                <div className="features__list mb-35">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <div className="features__list-icon mr-20">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="features__list-text">
                                                <p>Dolore lautium totam rem aperiam eaque ques abillo inventore
                                                    veritatis et quasi architeo beate vita</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="features__list-icon mr-20">
                                                <i className="far fa-check"/>
                                            </div>
                                            <div className="features__list-text">
                                                <p>Quis autem vel eum iure reprehenderit quevo uptate velit esse quam
                                                    nihil molestiae consequatur</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="features__btn">
                                    <a href="about.html" className="r-btn r-btn-border-2">
                                        read more <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="features__item-wrapper p-relative">
                                <div className="features__item-2 fea-1 yellow-bg text-center">
                                    <div className="features__icon-2 mb-15">
                              <span>
                                 <img src={images.featuresFea1} alt=""/>
                              </span>
                                    </div>
                                    <h3 className="features__title features__title-2">
                                        <a href="services-details.html">Commercial Painting</a>
                                    </h3>
                                </div>
                                <div className="features__item-2 fea-2 green-bg-2 text-center">
                                    <div className="features__icon-2 mb-15">
                                      <span>
                                         <img src={images.featuresFea2} alt=""/>
                                      </span>
                                    </div>
                                    <h3 className="features__title features__title-2 white-color">
                                        <a href="services-details.html">Industrial Painting</a>
                                    </h3>
                                </div>
                                <div className="features__item-2 fea-3 blue-bg text-center">
                                    <div className="features__icon-2 mb-15">
                                      <span>
                                         <img src={images.featuresFea3} alt=""/>
                                      </span>
                                    </div>
                                    <h3 className="features__title features__title-2 white-color">
                                        <a href="services-details.html">Residential Painting</a>
                                    </h3>
                                </div>
                                <div className="features__shape">
                                    <img className="features__shape-1" src={images.featuresShape1} alt=""/>
                                </div>
                                <PopupFeatureHomeTwo/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesHomeTwo;
