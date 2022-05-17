import Layout from "../../Layout/Layout";
import HeroSliderHome from "../../Element/Slider/HeroSliderHome";
import AboutHomeElement from "../../Element/About/AboutHomeElement";
import FeatureHomeOneElement from "../../Element/Feature/FeatureHomeOneElement";
import ServicesHomeOneElement from "../../Element/Services/ServicesHomeOneElement";
import SkillHomeOneElement from "../../Element/Skill/SkillHomeOneElement";
import PortfolioHomeElement from "../../Element/Portfolio/PortfolioHomeElement";
import WhyHomeOneSection from "./WhyHomeOneSection";
import TestimonialHomeOneSection from "../../Element/Slider/TestimonialHomeOneSection";
import BlogHomeOne from "./BlogHomeOne";
import PopupVideoHomeOne from "../../Element/PopupVideo/PopupVideoHomeOne";
import ContactHomeOne from "../../Element/Contact/ContactHomeOne";


const HomeOne = () => {
    return (
        <>
            <Layout header="style_1" pageTitle="Home 01 - Roxce" footer="style_1">
                {/* sidebar area start */}
                <HeroSliderHome/>
                {/* sidebar area end */}

                {/* about area start */}
                <AboutHomeElement/>
                {/* about area end */}

                {/* features area start */}
                <FeatureHomeOneElement/>
                {/* features area end */}

                {/* services area start */}
                <ServicesHomeOneElement/>
                {/* services area end */}

                {/* services area start */}
                <SkillHomeOneElement/>
                {/* services area end */}

                {/* portfolio area start */}
                <PortfolioHomeElement/>
                {/* portfolio area end */}

                {/* why area start */}
                <WhyHomeOneSection/>
                {/* why area end */}

                {/* testimonial area start */}
                <TestimonialHomeOneSection/>
                {/* testimonial area end */}

                {/* video area start */}
                <PopupVideoHomeOne/>
                {/* video area end */}

                {/* contact area start */}
                <ContactHomeOne/>
                {/* contact area end */}


                {/* blog area start */}
                <BlogHomeOne/>
                {/* blog area end */}


            </Layout>
        </>
    );
};

export default HomeOne;
