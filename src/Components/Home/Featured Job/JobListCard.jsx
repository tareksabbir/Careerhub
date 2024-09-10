/* eslint-disable react/prop-types */
import "../../../Custom/customButton.css";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";

const JobListCard = ({ job }) => {
  return (
    <div className="p-10 border rounded-lg">
      <img src={job.logo} className="w-[100px] max-h-[50px]" alt="" />
      <div className="ml-1">
        <h1 className="mt-2 text-xl font-semibold">{job.job_title}</h1>
        <p>{job.company_name}</p>
      </div>
      <div className="flex gap-3 mt-2">
        <button className=" button-13" role="button">
          {job.remote_or_onsite}
        </button>
        <button className="button-13" role="button">
          {job.job_type}
        </button>
      </div>
      <div className="flex gap-3 mt-2">
        <div className="flex items-center gap-2">
          {" "}
          <IoLocationOutline />
          <p>{job.contact_information.address}</p>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <AiOutlineDollarCircle />
          <p>{job.salary}</p>
        </div>
      </div>
      <button
         className="text-[13px] font-semibold  px-4 py-2 border bg-gradient-to-r from-purple-400 to-blue-400 text-white rounded-lg mt-3"
      >
        View Details
      </button>
      {/* <button
         className="text-[13px] font-semibold  px-4 py-2 border bg-black text-white rounded-lg mt-5"
      >
        View Details
      </button> */}
    </div>
  );
};

export default JobListCard;
