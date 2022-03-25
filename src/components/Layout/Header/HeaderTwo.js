import React from 'react';
import {Link} from "react-router-dom";
import NavMenu from "../../Element/NavMenu/NavMenu";
import {images} from "../../../utilities/Images";

const HeaderTwo = () => {
    return (
        <>
            <header>
                <div className="header__area">
                    <div id="header-sticky"
                         className="header__bottom header__transparent header__padding pl-55 pr-55 sticky-2">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xxl-2 col-xl-3 col-lg-3 col-6">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={images.logoWhite} alt="logo"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xxl-7 col-xl-6 col-lg-6 d-none d-lg-block">
                                    <div className="header__bottom-mid">
                                        <div className="main-menu main-menu-2">
                                            <NavMenu/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-xl-3 col-lg-3 col-6">
                                    <div className="header__bottom-right d-flex align-items-center justify-content-end">
                                        <div className="header__search mr-40">
                                            <a href="/" className="header__search-btn search-toggle">
                                                <i className="far fa-search"/>
                                            </a>
                                        </div>
                                        <div className="header__action">
                                            <button type="button"
                                                    className="dot-hamburger-btn dot-hamburger-btn-2 sidebar-toggle-btn">
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

export default HeaderTwo;
