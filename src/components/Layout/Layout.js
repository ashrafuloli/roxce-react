import React from 'react';
import HeaderOne from "./Header/HeaderOne";
import HeaderTwo from "./Header/HeaderTwo";
import HeaderThree from "./Header/HeaderThree";
import {Helmet} from "react-helmet";

const Layout = (props) => {
    const {children, header, pageTitle, pageDescription} = props;
    return (
        <>
            {/* helmet page meta start */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>
                    {pageTitle || 'Roxce - Painting Services Company React Template'}
                </title>
                <meta name="robots" content="noindex, follow"/>
                <meta name="description"
                      content={pageDescription || "Roxce - Painting Services Company React Template"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            </Helmet>
            {/* helmet page meta end */}

            {/* header area start */}
            {
                (header === 'style_1') ? <HeaderOne/>
                    : (header === 'style_2') ? <HeaderTwo/>
                        : <HeaderThree/>
            }
            {/* header area end */}

            {/* main area start */}
            <main>
                {children}
            </main>
            {/* main area end */}
        </>
    );
};

export default Layout;
