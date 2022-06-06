import React from 'react';
import Layout from "../../Layout/Layout";
import HeroHomeTwo from "./HeroHomeTwo";
import FeaturesHomeTwo from "./FeaturesHomeTwo";
import AboutHomeTwo from "./AboutHomeTwo";
import CounterHomeTwo from "./CounterHomeTwo";
import ServicesHomeTwo from "./ServicesHomeTwo";
import FaqHomeTwo from "../../Element/Accordion/FaqHomeTwo";
import PortfolioHomeTwo from "./PortfolioHomeTwo";
import TestimonialSliderTwo from "./TestimonialSliderTwo";
import WhyHomeTwo from "./WhyHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";

const HomeTwo = () => {
    return (
        <>
            <Layout header="style_2" pageTitle="Home 02 - Roxce" footer="style_2">

                {/* hero area start */}
                <HeroHomeTwo/>
                {/* hero area end */}

                {/* features area start */}
                <FeaturesHomeTwo/>
                {/* features area end */}

                {/* about area start */}
                <AboutHomeTwo/>
                {/* about area end */}

                {/* counter area start */}
                <CounterHomeTwo/>
                {/* counter area end */}

                {/* services area start */}
                <ServicesHomeTwo/>
                {/* services area end */}

                {/* faq area start */}
                <FaqHomeTwo/>
                {/* faq area end */}

                {/* portfolio area start */}
                <PortfolioHomeTwo/>
                {/* portfolio area end */}

                {/* testimonial area start */}
                <TestimonialSliderTwo/>
                {/* testimonial area end */}

                {/* why area start */}
                <WhyHomeTwo/>
                {/* why area end */}

                {/* blog area start */}
                <BlogHomeTwo/>
                {/* blog area end */}
            </Layout>
        </>
    );
};

export default HomeTwo;
