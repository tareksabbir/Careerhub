import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const {id} =useParams()
  const jobs = useLoaderData()
  const data = jobs.find(job => job.id == id)
  console.log(data)

  return <div>THIS IS FOR JOB DETAILS {id}</div>;
};

export default JobDetails;
