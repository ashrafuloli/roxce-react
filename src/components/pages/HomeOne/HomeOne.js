import Layout from "../../Layout/Layout";
import HeroSliderHome from "../../Element/Slider/HeroSliderHome";
import AboutHomeElement from "../../Element/About/AboutHomeElement";
import FeatureHomeOneElement from "../../Element/Feature/FeatureHomeOneElement";
import ServicesHomeOneElement from "../../Element/Services/ServicesHomeOneElement";
import SkillHomeOneElement from "../../Element/Skill/SkillHomeOneElement";
import PortfolioHomeElement from "../../Element/Portfolio/PortfolioHomeElement";


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
            </Layout>
        </>
    );
};

export default HomeOne;
