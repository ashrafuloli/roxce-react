import React from 'react';
import {Link} from "react-router-dom";

const NavMenu = () => {
    return (
        <>
            <nav id="mobile-menu">
                <ul>
                    <li className="active">
                        <Link to="/home">
                            Home <i className="far fa-angle-down"/>
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/home">Home Style 1</Link></li>
                            <li><Link to="/home-2">Home Style 2</Link></li>
                            <li><Link to="/home-3">Home Style 3</Link></li>
                        </ul>
                    </li>
                    <li>
                        <li><Link to="/">About</Link></li>
                    </li>
                    <li>
                        <Link to="/">
                            Services <i className="far fa-angle-down"/>
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/">Services</Link></li>
                            <li><Link to="/">Services Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">
                            Pages <i className="far fa-angle-down"/>
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/">Portfolio</Link></li>
                            <li><Link to="/">Portfolio Details</Link></li>
                            <li><Link to="/">Team</Link></li>
                            <li><Link to="/">Team Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">
                            News <i className="far fa-angle-down"/>
                        </Link>
                        <ul className="submenu">
                            <li><Link to="/">News</Link></li>
                            <li><Link to="/">News Details</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavMenu;
