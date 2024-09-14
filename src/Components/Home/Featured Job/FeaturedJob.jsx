import Jobs from "../Jobs/Jobs";

const FeaturedJob = () => {
  return (
    <>
      <div className="container mx-auto mt-40">
        <div className="mt-20 text-center">
          <h1 className="mb-5 text-4xl font-semibold">Featured Jobs</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <Jobs></Jobs>
      </div>
    </>
  );
};

export default FeaturedJob;
