/* eslint-disable react/prop-types */

const JobListCard = ({ job }) => {
  return (
    <div>
      <img src={job.logo} className="w-[100px] max-h-[50px]" alt="" />
    </div>
  );
};

export default JobListCard;
