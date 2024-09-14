import { useLoaderData } from "react-router-dom";
import Background from "../Background/Background";

import { getDataFromLocalStorage } from "../../Hooks/localStorage";
import AppliedJobCard from "./AppliedJobCard";


const AppliedJob = () => {
  const data = useLoaderData();
  
  const id = getDataFromLocalStorage() 
  const applied = data.filter(job => id.includes(job.id))

  return (
    <>
      <Background title={"Applied Jobs"}></Background>
      {
        applied.map(job=> <AppliedJobCard key={job.id} job={job}></AppliedJobCard>)
      }
    </>
  );
};

export default AppliedJob;
