import Banner from "./Banner/Banner";
import FeaturedJob from "./Featured Job/FeaturedJob";
import JobListCategory from "./Job Category/JobListCategory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <JobListCategory></JobListCategory>
      <FeaturedJob></FeaturedJob>
    </>
  );
};

export default Home;
