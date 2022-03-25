import React from 'react';
import {images} from "../../../utilities/Images";

const FooterThree = () => {
    return (
        <>
            <footer>
                <div className="footer__area grey-bg">
                    <div className="footer__top-info">
                        <div className="container">
                            <div className="footer__top-info-border pt-80 pb-80">
                                <div className="row">
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__info-3 d-flex align-items-center">
                                            <div className="footer__info-3-icon mr-20">
                                                <i className="far fa-envelope-open"/>
                                            </div>
                                            <div className="footer__info-3-text">
                                                <a href="mailto:support@gmail.com">support@gmail.com</a>
                                                <h4>Email Address</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__info-3 d-flex align-items-center">
                                            <div className="footer__info-3-icon mr-20">
                                                <i className="far fa-phone-plus"/>
                                            </div>
                                            <div className="footer__info-3-text">
                                                <a href="tel:+012-345-6789">+012 (345) 6789</a>
                                                <h4>Phone Number</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                        <div className="footer__social footer__social-3 d-flex justify-content-md-end">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"/></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"/></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"/></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget mb-50">
                                        <div className="footer__widget-content">
                                            <div className="footer__widget-about footer__about-3">
                                                <div className="footer__logo">
                                                    <a href="index.html">
                                                        <img src={images.logo} alt="logo"/>
                                                    </a>
                                                </div>
                                                <p>Sed ut perspiciati unde omnis iste natus error sit voluptatem
                                                    accusantium </p>
                                                <div className="footer__about-location d-flex align-items-start pr-35">
                                                    <div className="icon mr-20">
                                                        <i className="fal fa-map-marker-alt"/>
                                                    </div>
                                                    <div className="text">
                                                        <h5>Location</h5>
                                                        <a target="_blank"
                                                           href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">255
                                                            Main Street 2nd Floor Paris, France</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget pl-30 mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title footer__widget-title-3">Quick Links</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__link footer__link-3">
                                                <ul>
                                                    <li>
                                                        <a href="#">Residential Interior</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Commercial Interior</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Industrial Interior</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Roof Servicing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Color Mixing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Painting & Decoration</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget pl-55 pr-30 mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title footer__widget-title-3">Quick Links</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__blog footer__blog-3">
                                                <ul>
                                                    <li>
                                                        <div className="footer__blog-sm d-flex align-items-start">
                                                            <div className="footer__blog-sm-thumb mr-20">
                                                                <a href="blog-details.html">
                                                                    <img src={images.footerSm3} alt="image"/>
                                                                </a>
                                                            </div>
                                                            <div className="footer__blog-sm-content">
                                                                <h3 className="footer__blog-sm-title">
                                                                    <a href="blog-details.html">
                                                                        Hones Design Work For Digital Business
                                                                    </a>
                                                                </h3>
                                                                <div className="footer__blog-sm-meta">
                                                                    <span className="author">Shahnewaz</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="footer__blog-sm d-flex align-items-start">
                                                            <div className="footer__blog-sm-thumb mr-20">
                                                                <a href="blog-details.html">
                                                                    <img src={images.footerSm4} alt="image"/>
                                                                </a>
                                                            </div>
                                                            <div className="footer__blog-sm-content">
                                                                <h3 className="footer__blog-sm-title">
                                                                    <a href="blog-details.html">
                                                                        When safety is on your mind, Asian Paints
                                                                    </a>
                                                                </h3>
                                                                <div className="footer__blog-sm-meta">
                                                                    <span className="author">Shahnewaz</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title footer__widget-title-3">Newsletter</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__subscribe footer__subscribe-3">
                                                <p>Sed ut perspiciati unde omnis iste natus error sit voluptatem
                                                    accusantium</p>

                                                <div className="footer__subscribe-form">
                                                    <form action="#">
                                                        <input type="email" placeholder="Enter Your Email"/>
                                                        <button type="submit" className="link-btn-2">
                                                            subscribe
                                                            <i className="far fa-arrow-right"/>
                                                            <i className="far fa-arrow-right"/>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="container">
                            <div className="footer__bottom-border footer__bottom-border-3">
                                <div className="row align-items-center">
                                    <div className="col-xxl-12">
                                        <div className="footer__copyright footer__copyright-3 text-center">
                                            <p>© 2021 Roxce All Rights Reserved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterThree;
