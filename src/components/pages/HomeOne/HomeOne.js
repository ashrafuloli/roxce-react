import Layout from "../../Layout/Layout";
import HeroSliderHome from "../../Element/Slider/HeroSliderHome";


const HomeOne = () => {
    return (
        <>
            <Layout header="style_1" pageTitle="Home 01 - Roxce">
                {/* sidebar area start */}
                <HeroSliderHome/>
                {/* sidebar area end */}
            </Layout>
        </>
    );
};

export default HomeOne;
