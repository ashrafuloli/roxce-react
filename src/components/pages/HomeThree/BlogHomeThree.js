import React from 'react';
import {images} from "../../../utilities/Images";
import blog4 from "../../../assets/img/blog/03/blog-1.jpg";

const BlogHomeThree = () => {
    return (
        <>
            <section className="blog__area pt-125 pb-100">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="section__title-wrapper mb-80 text-center">
                                <span className="section__title-pre section__title-pre-3 center">News & Blog</span>
                                <h2 className="section__title section__title-2">Our Latest News Blog Articles &
                                    Tips</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-3 mb-30">
                                <div className="blog__thumb-3 w-img">
                                    <img src={images.blog4} alt="blog"/>
                                </div>
                                <div className="blog__content-3 white-bg">
                                    <div className="blog__meta-3 mb-10">
                                        <span><i className="far fa-calendar-alt"/> 25 nov 2020</span>
                                        <span><a href="#"><i className="far fa-comments"/> Comments (05)</a></span>
                                    </div>
                                    <h3 className="blog__title-3">
                                        <a href="blog-details.html">How To Build Vue Surve App Using Firebas Authent</a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus errov laccu sante dolore lautium totam rem
                                        aperia</p>
                                    <a href="blog-details.html" className="link-btn-2">
                                        read more
                                        <i className="far fa-arrow-right"/>
                                        <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-3 mb-30">
                                <div className="blog__thumb-3 w-img">
                                    <img src={images.blog5} alt="blog"/>
                                </div>
                                <div className="blog__content-3 white-bg">
                                    <div className="blog__meta-3 mb-10">
                                        <span><i className="far fa-calendar-alt"/> 25 nov 2020</span>
                                        <span><a href="#"><i className="far fa-comments"/> Comments (05)</a></span>
                                    </div>
                                    <h3 className="blog__title-3">
                                        <a href="blog-details.html">When safety is on your mind, Asian Paints </a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus errov laccu sante dolore lautium totam rem
                                        aperia</p>
                                    <a href="blog-details.html" className="link-btn-2">
                                        read more
                                        <i className="far fa-arrow-right"/>
                                        <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-3 mb-30">
                                <div className="blog__thumb-3 w-img">
                                    <img src={images.blog6} alt="blog"/>
                                </div>
                                <div className="blog__content-3 white-bg">
                                    <div className="blog__meta-3 mb-10">
                                        <span><i className="far fa-calendar-alt"/> 25 nov 2020</span>
                                        <span><a href="#"><i className="far fa-comments"/> Comments (05)</a></span>
                                    </div>
                                    <h3 className="blog__title-3">
                                        <a href="#">Inspire Design Decisith Otto Storch When Idea Copy</a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus errov laccu sante dolore lautium totam rem
                                        aperia</p>
                                    <a href="#" className="link-btn-2">
                                        read more
                                        <i className="far fa-arrow-right"/>
                                        <i className="far fa-arrow-right"/>
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

export default BlogHomeThree;
