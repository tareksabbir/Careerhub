import { useEffect, useState } from "react";
import Error from "../../Error/Error";
import JobListCard from "./JobListCard";

const FeaturedJob = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadJobList = async () => {
    setLoading(true);
    try {
      const res = await fetch("/jobs.json");
      const data = await res.json();
      if (!data) return;
      setFeatured(data);
    } catch (error) {
      if (error) {
        <Error></Error>;
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadJobList();
  }, []);
  console.log(featured);
  return (
    <>
      <div className="mt-20 text-center">
        <h1 className="mb-5 text-4xl font-semibold">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {featured.map((job) => (
          <JobListCard key={job.id} loading={loading} job={job}></JobListCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedJob;
