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
      <div className="text-center">
        <h1 className="text-5xl">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {featured.map((job) => (
          <JobListCard key={job.id} loading={loading} job={job}></JobListCard>
        ))}
      </div>
    </>
  );
};

export default FeaturedJob;
