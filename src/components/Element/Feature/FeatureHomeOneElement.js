import React from 'react';
import {images} from "../../../utilities/Images";

const FeatureHomeOneElement = () => {
    return (<>
        <section className="features__area pt-130 pb-130" style={{backgroundImage: `url(${images.featuresBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-10">
                        <div className="features__wrapper">
                            <div className="section__title-wrapper">
                                <div className="section__title-wrapper mb-40">
                                    <span className="section__title-pre">What We Do</span>
                                    <h2 className="section__title">Beign Us To Made Your Dream Painting</h2>
                                </div>
                                <div className="features__inner">
                                    <div className="features__item d-sm-flex align-items-center pr-40">
                                        <div className="features__icon mr-30">
                                                <span>
                                                   <img src={images.featuresFea1} alt="image"/>
                                                </span>
                                        </div>
                                        <div className="features__content">
                                            <h3 className="features__title">Residential Painting</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem
                                                accusantium doloremque</p>
                                        </div>
                                    </div>
                                    <div className="features__item d-sm-flex align-items-center pr-40">
                                        <div className="features__icon mr-30">
                                                <span>
                                                   <img src={images.featuresFea2} alt="image"/>
                                                </span>
                                        </div>
                                        <div className="features__content">
                                            <h3 className="features__title">Commercial Painting</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error voluptatem
                                                accusantium doloremque</p>
                                        </div>
                                    </div>
                                    <div className="features__item d-sm-flex align-items-center pr-40">
                                        <div className="features__icon mr-30">
                                                <span>
                                                   <img src={images.featuresFea3} alt="image"/>
                                                </span>
                                        </div>
                                        <div className="features__content">
                                            <h3 className="features__title">Industrial Painting</h3>
                                            <p>
                                                Sed ut perspiciatis unde omnis iste natus error voluptatem
                                                accusantium doloremque
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>);
};

export default FeatureHomeOneElement;
