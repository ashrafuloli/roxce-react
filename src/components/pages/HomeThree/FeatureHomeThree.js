import React from 'react';
import {images} from "../../../utilities/Images";

const FeatureHomeThree = () => {
    return (
        <>
            <section className="features__area pt-125 pb-100 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-6 col-lg-6">
                            <div className="features__wrapper-3 features__wrapper-border pr-45">
                                <div className="section__title-wrapper mb-80 text-lg-end">
                                    <span className="section__title-pre section__title-pre-3 right">Who We Are</span>
                                    <h2 className="section__title section__title-2">
                                        Explore About <br/> Our Core Features
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6">
                            <div className="features__wrapper-3">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan
                                    tium dolormque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi arhitecto beatae vitae dicta sunt explicabo.
                                    Nemo enim ipsam voluptatem quia voluptas sitas pernatur aut odit aut
                                    sed quia consequuntur magni dolores eos Sed ut perspiciatis</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features__item-3 text-center grey-bg mb-30">
                                <div className="features__icon-3 mb-30 p-relative">
                           <span>
                              <img src={images.featuresFea1} alt="image"/>
                           </span>
                                    <div className="features__shape">
                                        <img className="features__shape-2" src={images.featuresShape2} alt="image"/>
                                        <img className="features__shape-3" src={images.featuresShape3} alt="image"/>
                                    </div>
                                </div>
                                <div className="features__content-3">
                                    <h3 className="features__title features__title-3">
                                        <a href="services-details.html">Residential Painting</a>
                                    </h3>
                                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque lauda ntium totam rem aperiam, eaque</p>
                                    <a href="services-details.html" className="r-btn r-btn-grey">
                                        read more <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features__item-3 text-center grey-bg mb-30">
                                <div className="features__icon-3 mb-30 p-relative">
                           <span>
                              <img src={images.featuresFea2} alt="image"/>
                           </span>
                                    <div className="features__shape">
                                        <img className="features__shape-2" src={images.featuresShape2} alt="image"/>
                                        <img className="features__shape-3" src={images.featuresShape3} alt="image"/>
                                    </div>
                                </div>
                                <div className="features__content-3">
                                    <h3 className="features__title features__title-3">
                                        <a href="services-details.html">Industrial Painting</a>
                                    </h3>
                                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque lauda ntium totam rem aperiam, eaque</p>
                                    <a href="services-details.html" className="r-btn r-btn-grey">
                                        read more <i  className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                            <div className="features__item-3 text-center grey-bg mb-30">
                                <div className="features__icon-3 mb-30 p-relative">
                           <span>
                              <img src={images.featuresFea3} alt="image"/>
                           </span>
                                    <div className="features__shape">
                                        <img className="features__shape-2" src={images.featuresShape2} alt="image"/>
                                        <img className="features__shape-3" src={images.featuresShape3} alt="image"/>
                                    </div>
                                </div>
                                <div className="features__content-3">
                                    <h3 className="features__title features__title-3">
                                        <a href="services-details.html">Commercial Painting</a>
                                    </h3>
                                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                        doloremque lauda ntium totam rem aperiam, eaque</p>
                                    <a href="services-details.html" className="r-btn r-btn-grey">
                                        read more <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
);
};

export default FeatureHomeThree;
