import React from 'react';
import {images} from "../../../utilities/Images";
import BrandSliderFooter from "../../Element/Slider/BrandSliderFooter";

const FooterOne = () => {
    return (
        <>
            <footer>
                <div className="footer__area black-bg">
                    <div className="footer__top pb-35">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-12">
                                    <div className="brand__wrapper brand__bg pt-75 pb-80 black-bg-4">
                                        <BrandSliderFooter/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title">About Comapny</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__widget-about">
                                                <p>Sed ut perspiciati unde omnis iste natus error sit voluptatem
                                                    accusantium emque laudantium totam rem aperiam</p>
                                                <div className="footer__logo">
                                                    <a href="index.html">
                                                        <img src={images.logoWhite} alt="logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget pl-60 footer__pr-40 mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title">Quick Links</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__link">
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
                                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer__widget pl-20 footer__pr-50 mb-50">
                                        <div className="footer__widget-top">
                                            <h3 className="footer__widget-title">Contact Us</h3>
                                        </div>
                                        <div className="footer__widget-content ">
                                            <div className="footer__info">
                                                <ul>
                                                    <li className="d-flex align-items-start">
                                                        <div className="footer__info-icon mr-20">
                                                            <i className="fal fa-map-marker-alt"/>
                                                        </div>
                                                        <div className="footer__info-text">
                                                            <h4>Locations</h4>
                                                            <a target="_blank"
                                                               href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">30
                                                                Main Street, New York</a>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <div className="footer__info-icon mr-20">
                                                            <i className="far fa-envelope-open"/>
                                                        </div>
                                                        <div className="footer__info-text">
                                                            <h4>Email Us</h4>
                                                            <a href="mailto:support@gmail.com">support@gmail.com</a>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-start">
                                                        <div className="footer__info-icon mr-20">
                                                            <i className="fal fa-phone"/>
                                                        </div>
                                                        <div className="footer__info-text">
                                                            <h4>Phone Us</h4>
                                                            <a href="tel:+012-345-6789">+012 (344) 678 99</a>
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
                                            <h3 className="footer__widget-title">Newsletter</h3>
                                        </div>
                                        <div className="footer__widget-content">
                                            <div className="footer__subscribe">
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
                            <div className="footer__bottom-border">
                                <div className="row align-items-center">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="footer__social">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"/></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"/></a></li>
                                                <li><a href="#"><i className="fab fa-youtube"/></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin"/></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                        <div className="footer__copyright text-sm-end">
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

export default FooterOne;
