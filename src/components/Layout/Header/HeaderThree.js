import React from 'react';
import {Link} from "react-router-dom";
import NavMenu from "../../Element/NavMenu/NavMenu";
import {images} from "../../../utilities/Images";

const HeaderThree = () => {
    return (
        <>
            <header>
                <div className="header__area">
                    <div id="header-sticky" className="header__bottom header__padding pl-55 pr-55">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xxl-2 col-xl-3 col-lg-3 col-6">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={images.logo} alt="logo"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xxl-7 col-xl-7 col-lg-8 d-none d-lg-block">
                                    <div className="header__bottom-mid d-flex align-items-center">
                                        <div className="main-menu main-menu-3">
                                            <NavMenu/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-2 col-lg-1 col-6">
                                    <div className="header__bottom-right d-flex align-items-center justify-content-end">
                                        <div className="header__call d-none d-xxl-flex align-items-center mr-40">
                                            <div className="header__call-icon mr-10">
                                                <i className="far fa-phone"/>
                                            </div>
                                            <div className="header__call-text">
                                                <span>Phone Number</span>
                                                <h5>
                                                    <a target="_blank" rel="noreferrer" href="tel:+012-345-6789">
                                                        +012 (345) 6789
                                                    </a>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="header__action">
                                            <button type="button"
                                                    className="dot-hamburger-btn dot-hamburger-btn-3 sidebar-toggle-btn">
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

export default HeaderThree;
