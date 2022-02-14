import React from 'react';
import Layout from "../../Layout/Layout";
import HeroSliderHomeThree from "../../Element/Slider/HeroSliderHomeThree";

const HomeThree = () => {
    return (
        <>
            <Layout header="style_3"  pageTitle="Home 03 - Roxce">

                {/* sidebar area start */}
                <HeroSliderHomeThree/>
                {/* sidebar area end */}

            </Layout>
        </>
    );
};

export default HomeThree;
