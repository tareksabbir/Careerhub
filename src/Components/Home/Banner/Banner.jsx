import { Link } from "react-router-dom";
import user from "../../../assets/images/user.png";
const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container flex items-center justify-between mx-auto ">
          <div>
            <div className="font-bold md:text-8xl">
              <h1>One Step </h1>
              <h1>Closer To Your</h1>
              <h1 className="inline-block font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text">
                Dream Job
              </h1>
            </div>
            <div className="mt-5">
              <p>
                Explore thousands of job opportunities with all the information{" "}
                <br></br> you need. Its your future. Come find it. Manage all
                your job <br></br> application from start to finish.
              </p>
            </div>
            <div className="mt-10">
              <Link className="px-5 py-3 font-bold text-white border rounded-lg bg-gradient-to-r from-purple-400 to-blue-400">
                Get Strated
              </Link>
            </div>
          </div>
          <div className="mr-[-4rem]">
            <img src={user} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
