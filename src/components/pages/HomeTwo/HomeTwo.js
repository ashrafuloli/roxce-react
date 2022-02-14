import React from 'react';
import Layout from "../../Layout/Layout";
import {Link} from "react-router-dom";
import PopupVideo from "../../Element/PopupVideo/PopupVideo";

const HomeTwo = () => {
    return (
        <>
            <Layout header="style_2" pageTitle="Home 02 - Roxce">

                {/* hero area start */}
                <section className="hero__area hero__height green-bg-2 p-relative d-flex align-items-center">
                    <div className="hero__shape d-none d-md-block">
                        <span className="hero-shape-circle"/>
                        <img className="hero__shape-2" src="assets/img/hero/hero-shape-2.png" alt="shape"/>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
                                <div className="hero__content pt-110 p-relative">
                                    <span>25 Years Of Experience</span>
                                    <h3 className="hero__title"> Painting Service Agency</h3>
                                    <div className="hero__btn">
                                        <Link to="/contact" className="r-btn r-btn-yellow mr-5">
                                            get started <i className="far fa-arrow-right"/>
                                        </Link>
                                        <Link to="/services" className="r-btn r-btn-border">
                                            our services <i className="far fa-arrow-right"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
                                <div className="hero__thumb d-none d-md-block">
                                    <div className="hero__thumb-1 text-end">
                                        <img src="assets/img/hero/hero-1.png" alt="hero"/>
                                    </div>
                                    <PopupVideo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* hero area end */}

            </Layout>
        </>
    );
};

export default HomeTwo;
