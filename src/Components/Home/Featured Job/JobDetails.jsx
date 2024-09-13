import { useLoaderData, useParams } from "react-router-dom";
import Background from "../../Background/Background";
import money from "../../../assets/icons/money.png"
import calendar from "../../../assets/icons/calendar.png"
import phone from "../../../assets/icons/phone.png"
import email from "../../../assets/icons/email.png"
import address from "../../../assets/icons/Location.png"

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useLoaderData();
  const data = jobs.find((job) => job.id == id);
  console.log(data);

  return (
    <>
     
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
          <div className="rounded-xl bg-gradient-to-r from-purple-50 to-blue-50">
            <div className="p-10 ">
              <h1 className="mb-3 text-lg font-bold"> Job Details</h1>
              <hr />
              <div className="flex gap-2 mt-3">
                <img src={money} alt="" />
                <h1 ><span className="font-bold">Salary : </span>{data.salary}</h1>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={calendar} alt="" />
                <h1><span className="font-bold">Job Title : </span><span>{data.job_title}</span></h1>
              </div>
              <h1 className="mt-5 mb-3 text-lg font-bold">Contact Information</h1>
              <hr />
              <div className="flex gap-2 mt-3">
                <img src={phone} alt="" />
                <h1><span className="font-bold">Phone: </span><span>{data.contact_information.phone}</span></h1>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={email} alt="" />
                <h1><span className="font-bold">Email : </span><span>{data.contact_information.email}</span></h1>
              </div>
              <div className="flex gap-2 mt-2">
                <img src={address} alt="" />
                <h1><span className="font-bold">Address : </span><span>{data.contact_information.address}</span></h1>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
