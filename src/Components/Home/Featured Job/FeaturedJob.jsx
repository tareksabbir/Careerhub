import { useEffect, useState } from "react";
import Error from "../../Error/Error";
import JobListCard from "./JobListCard";

const FeaturedJob = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJob, setShowJob] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const loadJobList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/jobs.json");
      const data = await res.json();
      if (!data) return;
      setFeatured(data);
    } catch (error) {
      if (error) {
        console.error("Failed to fetch jobs:", error);
        <Error></Error>;
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobList();
  }, []);

  useEffect(() => {
    if (featured.length) {
      setShowJob(showAll ? featured : featured.slice(0, 4));
    }
  }, [featured, showAll]);

  const handleButton = () => {
    setShowAll(!showAll);
  };

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
        
          <div className="grid grid-cols-2 gap-5 mt-20 mb-10">
            {showJob.map((job) => (
              <JobListCard key={job.id} loading={loading} job={job} />
            ))}
          </div>

        <div
          onClick={handleButton}
          className="flex items-center justify-center mb-20"
        >
          <button className="text-[15px] font-semibold px-4 py-2 border bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg mt-3">
            {showAll ? "Show Less" : "Show All Jobs"}
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedJob;
