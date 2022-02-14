import React from 'react';
import {Link} from "react-router-dom";
import NavMenu from "../../Element/NavMenu/NavMenu";

const HeaderOne = () => {
    return (
        <>
            <header>
                <div className="header__area">
                    <div className="header__top grey-bg pl-55 pr-55 header__padding d-none d-lg-block">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-8 col-lg-8">
                                    <div className="header__top-left">
                                        <div className="header__info">
                                            <ul>
                                                <li>
                                                    <a target="_blank" rel="noreferrer"
                                                       href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">
                                                        <i className="far fa-map-marker-alt"/> 20 Main Street, USA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" rel="noreferrer" href="mailto:support@gmail.com">
                                                        <i className="far fa-envelope-open"/> support@gmail.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <a target="_blank" rel="noreferrer" href="tel:+012-345-6789">
                                                        <i className="fal fa-phone"/> +012
                                                        (345) 6789
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-4 col-lg-4">
                                    <div className="header__top-right d-flex align-items-center justify-content-end">
                                        <div className="header__search p-relative mr-20">
                                            <form action="#">
                                                <input type="text" placeholder="Search here"/>
                                                <button type="submit">
                                                    <i className="far fa-search"/>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="header__lang">
                                            <select>
                                                <option>English</option>
                                                <option>Bangle</option>
                                                <option>Arabic</option>
                                                <option>Hindi</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="header-sticky" className="header__bottom pl-55 pr-55 header__padding">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src="assets/img/logo/logo.png" alt="logo"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-7 d-none d-lg-block">
                                    <div className="header__bottom-mid d-flex align-items-center">
                                        <div className="main-menu">
                                            <NavMenu/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-sm-6 col-6">
                                    <div className="header__bottom-right d-flex align-items-center justify-content-end">
                                        <div className="header__social mr-35 d-none d-xl-block">
                                            <ul>
                                                <li><a href="/"><i className="fab fa-facebook-f"/></a></li>
                                                <li><a href="/"><i className="fab fa-twitter"/></a></li>
                                                <li><a href="/"><i className="fab fa-youtube"/></a></li>
                                                <li><a href="/"><i className="fab fa-linkedin"/></a></li>
                                            </ul>
                                        </div>
                                        <div className="header__action">
                                            <button type="button" className="dot-hamburger-btn sidebar-toggle-btn">
                                                <span/><span/><span/>
                                                <span/><span/><span/>
                                                <span/><span/><span/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderOne;
