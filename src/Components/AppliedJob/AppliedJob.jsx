import { useLoaderData } from "react-router-dom";
import Background from "../Background/Background";
import { getDataFromLocalStorage } from "../../Hooks/localStorage";

const AppliedJob = () => {
  const data = useLoaderData();
  
  const id = getDataFromLocalStorage() 
  const applied = data.filter(job => id.includes(job.id))
  console.log(applied)
  return (
    <>
      <Background title={"Applied Jobs"}></Background>
    </>
  );
};

export default AppliedJob;
