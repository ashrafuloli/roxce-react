import React from 'react';
import {images} from "../../../utilities/Images";

const BlogHomeTwo = () => {
    return (
        <>
            <section className="blog__area grey-bg pt-125 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3">
                            <div className="section__title-wrapper-2 mb-80 text-center">
                                <span className="section__title-pre section__title-pre-2 center">News & Blog</span>
                                <h2 className="section__title section__title-2">Our Latest News Blog Articles &
                                    Tips</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-2 white-bg mb-30">
                                <div className="blog__thumb-2 w-img fix">
                                    <a href="blog-details.html">
                                        <img src={images.blog1} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog__content-2">
                                    <div className="blog__meta-2">
                              <span>
                                 <i className="far fa-calendar-alt"/>
                                 25 nov 2021
                              </span>
                                        <span>
                                 <a href="#">
                                    <i className="far fa-comments"/>
                                    Comments (05)
                                 </a>
                              </span>
                                    </div>
                                    <h3 className="blog__title blog__title-2">
                                        <a href="blog-details.html">How To Build A Vue Survey App Using Firebase Authent
                                            Eication And Database</a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus error volaccu sante dolore lautium totam rem
                                        aperia eaque ques invent veritatis</p>
                                    <a href="blog-details.html" className="link-btn-2">
                                        read more
                                        <i className="far fa-arrow-right"/>
                                        <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-2 white-bg mb-30">
                                <div className="blog__thumb-2 w-img fix">
                                    <a href="blog-details.html">
                                        <img src={images.blog2} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog__content-2">
                                    <div className="blog__meta-2">
                              <span>
                                 <i className="far fa-calendar-alt"/>
                                 25 nov 2021
                              </span>
                                        <span>
                                 <a href="#">
                                    <i className="far fa-comments"/>
                                    Comments (05)
                                 </a>
                              </span>
                                    </div>
                                    <h3 className="blog__title blog__title-2">
                                        <a href="blog-details.html">Micro-Typography How To Space And Kern Punctuation
                                            Marks And Other Symbols</a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus error volaccu sante dolore lautium totam rem
                                        aperia eaque ques invent veritatis</p>
                                    <a href="blog-details.html" className="link-btn-2">
                                        read more
                                        <i className="far fa-arrow-right"/>
                                        <i className="far fa-arrow-right"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="blog__item-2 white-bg mb-30">
                                <div className="blog__thumb-2 w-img fix">
                                    <a href="blog-details.html">
                                        <img src={images.blog3} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog__content-2">
                                    <div className="blog__meta-2">
                              <span>
                                 <i className="far fa-calendar-alt"/>
                                 25 nov 2021
                              </span>
                                        <span>
                                 <a href="#">
                                    <i className="far fa-comments"></i>
                                    Comments (05)
                                 </a>
                              </span>
                                    </div>
                                    <h3 className="blog__title blog__title-2">
                                        <a href="blog-details.html">Smashing Podcast Episode With Rache Andrew How Can
                                            Run Online Workshops</a>
                                    </h3>
                                    <p>Sed persps unde omnis iste natus error volaccu sante dolore lautium totam rem
                                        aperia eaque ques invent veritatis</p>
                                    <a href="blog-details.html" className="link-btn-2">
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

export default BlogHomeTwo;
