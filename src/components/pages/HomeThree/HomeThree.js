import React from 'react';
import Layout from "../../Layout/Layout";
import HeroSliderHomeThree from "../../Element/Slider/HeroSliderHomeThree";
import FeatureHomeThree from "./FeatureHomeThree";
import BrandSliderHomeThree from "../../Element/Slider/BrandSliderHomeThree";
import AboutHomeThree from "./AboutHomeThree";
import ServiceHomeThree from "./ServiceHomeThree";
import CounterHomeThree from "./CounterHomeThree";
import PortfolioHomeThree from "./PortfolioHomeThree";
import BlogHomeThree from "./BlogHomeThree";
import ContactHomeThree from "./ContactHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";

const HomeThree = () => {
    return (
        <>
            <Layout header="style_3" pageTitle="Home 03 - Roxce" footer="style_3">

                {/* sidebar area start */}
                <HeroSliderHomeThree/>
                {/* sidebar area end */}

                {/* features area start */}
                <FeatureHomeThree/>
                {/* features area end */}

                {/* brand area start */}
                <BrandSliderHomeThree/>
                {/* brand area end */}

                {/* about area start */}
                <AboutHomeThree/>
                {/* about area end */}

                {/* services area start */}
                <ServiceHomeThree/>
                {/* services area end */}

                {/* counter area start */}
                <CounterHomeThree/>
                {/* counter area end */}

                {/* portfolio area start */}
                <PortfolioHomeThree/>
                {/* portfolio area end */}

                {/* portfolio area start */}
                <TestimonialHomeThree/>
                {/* portfolio area end */}

                {/* portfolio area start */}
                <ContactHomeThree/>
                {/* portfolio area end */}

                {/* portfolio area start */}
                <BlogHomeThree/>
                {/* portfolio area end */}


            </Layout>
        </>
    );
};

export default HomeThree;
