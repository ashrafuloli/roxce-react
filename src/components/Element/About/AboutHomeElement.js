import React from 'react';
import {images} from "../../../utilities/Images";

const AboutHomeElement = () => {
    return (
        <>
            <section className="about__area pt-130 pb-130">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-7 col-xl-6 col-lg-5">
                            <div className="about__thumb about__triangle p-relative">
                                <div className="about__thumb-1 w-img">
                                    <img src={images.about1} alt="about"/>
                                </div>
                                <div className="about__thumb-2 text-end">
                                    <img src={images.about2} alt="about"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6 col-lg-7">
                            <div className="about__content pl-60 pt-25">
                                <div className="section__title-wrapper mb-25">
                                    <span className="section__title-pre">About Us</span>
                                    <h2 className="section__title">Explore About Painting Services Success History</h2>
                                </div>
                                <p className="bold-text">Accusantium doloremq laudantium totam remesd aperiam eaque quae
                                    abillo inventore </p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremq
                                    laudantium totam rem aperiam eaque quae ab illo inventore veritatis et quasi
                                    architecto beatae vita dicta sunt explicabo. Nemo enim ipsam voluptatem</p>

                                <div className="about__author d-sm-flex align-items-center">
                                    <div className="about__author-content d-flex align-items-center mr-35">
                                        <div className="about__author-avater mr-20">
                                            <img src={images.aboutAuthor} alt="author"/>
                                        </div>
                                        <div className="about__author-info">
                                            <h3>Jose E. Swisher</h3>
                                            <span>CEO & Founder</span>
                                        </div>
                                    </div>
                                    <div className="about__author-signature">
                                        <img src={images.aboutAuthorSignature} alt="author"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutHomeElement;
