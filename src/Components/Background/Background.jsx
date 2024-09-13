/* eslint-disable react/prop-types */

import bg1 from "../../assets/images/bg1.png"
import bg2 from "../../assets/images/bg2.png"

const Background = ({ title }) => {
  return (
    <div className="relative text-center min-h-[20vh] bg-gradient-to-r from-purple-50 to-blue-50 flex items-center justify-center">
      <h1 className="mt-[-50px] text-4xl font-semibold">{title}</h1>
      <img
        src={bg1}
        alt="Your Image"
        className="absolute bottom-0 left-0 mr-4 md:h-46 md:w-46"
      />
      <img
        src={bg2}
        alt="Another Image"
        className="absolute top-0 right-0 w-46 h-46 mt-[-140px]"
      />
    </div>
  );
};

export default Background;
