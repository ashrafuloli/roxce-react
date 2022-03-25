import React from 'react';
import Layout from "../../Layout/Layout";
import HeroHomeTwo from "./HeroHomeTwo";

const HomeTwo = () => {
    return (
        <>
            <Layout header="style_2" pageTitle="Home 02 - Roxce" footer="style_2">

                {/* hero area start */}
                <HeroHomeTwo/>
                {/* hero area end */}

            </Layout>
        </>
    );
};

export default HomeTwo;
