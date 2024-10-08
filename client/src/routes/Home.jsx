import FeatureClass from "../components/FeatureClass";
import Features from "../components/Features";
import HeroBanner from "../components/HeroBanner";
import PopularCourses from "../components/PopularCourses";

const Home = () => {
  return (
    <>
      <HeroBanner />
      {/* <Features /> */}
      <FeatureClass />
      <PopularCourses />
    </>
  );
};

export default Home;
