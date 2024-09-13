import { useLoaderData, useParams } from "react-router-dom";
import Background from "../../Background/Background";


const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const data = jobs.find((job) => job.id == id);
  console.log(data);

  return (
    <>
      {/* <div className="text-center min-h-[20vh] bg-gradient-to-r from-purple-50 to-blue-50  flex items-center justify-center ">
        <h1 className="mt-[-50px] text-4xl font-semibold">Job Details</h1>
      </div> */}
     
      <Background title={"Job Description"}></Background>
     

      <div className="container mx-auto mt-20 mb-32">
        <div className="grid grid-cols-3 gap-5 p-10">
          <div className="col-span-2">
            <h1 className="mt-5">
              <span className="font-bold">Job Description: </span>
              {data.job_description}
            </h1>
            <h1 className="mt-5">
              <span className="font-bold">Job Responsibility: </span>
              {data.job_responsibility}
            </h1>
            <div className="mt-5">
              <h1 className="font-bold">Educational Requirements:</h1>
              <h1 className="mt-5">{data.educational_requirements}</h1>
            </div>
            <div className="mt-5 mb-10">
              <h1 className="font-bold">Experiences:</h1>
              <h1 className="mt-5">{data.experiences}</h1>
            </div>
          </div>
          <div className="rounded-xl bg-gradient-to-r from-purple-50 to-blue-50"></div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
